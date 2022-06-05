/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client';
import { GETDETAILANIME } from '../../../queries';
import { DetailAnimeStyle } from './DetailAnimeStyle';
import Layout from '../Layout';
import Container from '../Container';
import Loading from '../Loading';
import Image from 'next/image';
import Parser from 'html-react-parser'
import Modal from "../Modal"
import Button from '../Button';
import CollectionCard from '../CollectionCard';
import Link from 'next/link';
import Swal from 'sweetalert2';


const DetailAnime = ({ id }) => {
    const [modalOpen, setModalOpen] = useState(false)
    const [collectionList, setCollectionList] = useState([])
    const [animeExisting, setAnimeExisting] = useState([])
    const [checkedCollection, setCheckedCollection] = useState([])
    const [newCollection, setNewCollection] = useState('')

    const { loading, error, data } = useQuery(GETDETAILANIME, { 
        variables: {
            idIn: id,
            asHtml: true
        }
    });

    const initialCollectionList = () => {
        setCollectionList(JSON.parse(localStorage.getItem('anilist_collection')))
    }

    const checkExistingAnime = () => {
        let existingTmp = []
        collectionList.forEach(collection => {
            const findExistingId = collection.list.find(el => el.id == data.Media.id)

            if(findExistingId) {
                existingTmp.push(true)
            } else {
                existingTmp.push(false)
            }
        })
        setAnimeExisting(existingTmp)

        console.log(animeExisting, "EXISTING")
    }

    const handleModal = () => {
        setModalOpen(!modalOpen)
    }

    const setChecked = (e) => {
        if(e.target.checked) {
            setCheckedCollection([...checkedCollection, e.target.value])
        } else {
            const filteredArray = checkedCollection.length >= 1 ? checkedCollection.filter(item => item !== e.target.value) : []
            setCheckedCollection(filteredArray)
        }
    }

    const addNewCollection = () => {
        if(!newCollection){
            Swal.fire({
                title: `Warning`,
                text: `Collection name can't be empty`,
                icon: 'warning',
                confirmButtonText: 'Ok!',
            })
            return
        }

        const newCollectionList = [...collectionList, {name: newCollection, list: []}]
        localStorage.setItem('anilist_collection', JSON.stringify(newCollectionList))
        setCollectionList(newCollectionList)
        setNewCollection('')
    }

    const addToCollections = () => {
        if(checkedCollection.length < 1) {
            Swal.fire({
                title: `Failed!`,
                text: `No collection selected`,
                icon: 'error',
                confirmButtonText: 'Ok',
            })
            return
        }

        checkedCollection.forEach((item, index) => {
            const findIndex = collectionList.findIndex(el => el.name == item)

            collectionList[findIndex].list.push({
                id: data.Media.id,
                title: data.Media.title.english,
                coverImage: data.Media.coverImage.large
            })
        })
        localStorage.setItem('anilist_collection', JSON.stringify(collectionList))
        setCheckedCollection([])
        handleModal()
        checkExistingAnime()
        Swal.fire({
            title: `Success!`,
            text: `Anime added to collection(s)`,
            icon: 'success',
            confirmButtonText: 'Awesome!',
        })
    }

    useEffect(() => {
        initialCollectionList()
        checkExistingAnime();
    }, [])

    if(error) {
        return(
            <Layout>
                <Container>
                    Error
                </Container>
            </Layout>
        )
    }

    return(
        <Layout>
            <Container>
                {loading ? <Loading /> : <></> }
                {data ? (
                    <div css={DetailAnimeStyle.detailAnimeContainer}>
                        <figure css={DetailAnimeStyle.coverImageFigure}>
                            <Image 
                                src={data.Media.coverImage.large}
                                alt="cover_image"
                                width={300}
                                height={400}
                                layout="responsive"
                            />
                        </figure>
                        <div css={DetailAnimeStyle.textInfoContainer}>
                            <h2>{data.Media.title.english}</h2>
                            <div css={DetailAnimeStyle.episodesDurationContainer}>
                                <div css={DetailAnimeStyle.episodesDurationContent}>
                                    <b><span>Episodes</span></b>
                                    <span>{data.Media.episodes}</span>
                                </div>
                                <div css={DetailAnimeStyle.episodesDurationContent}>
                                    <b><span>Duration</span></b>
                                    <span>{data.Media.duration} Minutes</span>
                                </div>
                            </div>
                            <div css={DetailAnimeStyle.genreText}>
                                <b>Genres:</b> {data.Media.genres.toString()}
                            </div>
                            <div>
                                <b>Desription: </b>{Parser(data.Media.description)}
                            </div>
                            <div>
                                <Button outline buttonTrigger={handleModal}>
                                    + Add to collection
                                </Button>
                            </div>
                        </div>
                        <div id="modalContainer">
                            <Modal
                                modalOpen={modalOpen}
                                handleModal={handleModal}
                            >
                                <div css={DetailAnimeStyle.modalContent}>
                                    <div>
                                        <h3>Add anime to collection</h3>
                                    </div>
                                    <div css={DetailAnimeStyle.collectionContent}>
                                    {collectionList.length < 1 ? (
                                        <>
                                            <span>No collection found, you can create one here first</span>
                                            <input type="text" value={newCollection} onChange={(e) => {setNewCollection(e.target.value)}} placeholder="Input collection name" css={DetailAnimeStyle.inputCollection}></input>
                                            <Button outline buttonTrigger={addNewCollection}>
                                                + Create new collection
                                            </Button>
                                        </>
                                    ) : (
                                        collectionList.map((item, index) => {
                                            return(
                                                <div css={DetailAnimeStyle.chooseCollection} key={index}>
                                                    <input
                                                        type="checkbox"
                                                        value={item.name}
                                                        onChange={(e) => setChecked(e)}
                                                        disabled={animeExisting[index]}
                                                    />
                                                    <Link href={`/collection/${item.name}`}>
                                                        <a>
                                                            <CollectionCard 
                                                                label={item.name}
                                                            />
                                                            <span css={animeExisting[index] ? DetailAnimeStyle.existingAnime : DetailAnimeStyle.existingAnimeFalse}>Anime Already exist</span>
                                                        </a>
                                                    </Link>
                                                </div>
                                            )
                                        })
                                    )}
                                    </div>
                                    <Button outline buttonTrigger={addToCollections}>
                                        + Add to collection(s)
                                    </Button>
                                </div>
                            </Modal>
                        </div>
                    </div>
                ) : (
                    <></>
                )}
                   
            </Container>
        </Layout>
    )
}

export default DetailAnime