/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react'
import { unstable_batchUpdates } from 'react-dom';
import { useRouter } from 'next/router';
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
    const [collection, setCollection] = useState({})
    const [animeExisting, setAnimeExisting] = useState([])
    const [checkedCollection, setCheckedCollection] = useState([])
    const [newCollection, setNewCollection] = useState('')
    const router = useRouter()

    const { loading, error, data } = useQuery(GETDETAILANIME, { 
        variables: {
            idIn: id,
            asHtml: true
        }
    });

    const initialCollectionList = () => {
        let existingTmp = []
        const collectionList = JSON.parse(localStorage.getItem('anilist_collection'))
        collectionList.forEach(collection => {
            const findExistingId = collection.list.find(el => el.id == id)

            if(findExistingId) {
                existingTmp.push(true)
            } else {
                existingTmp.push(false)
            }
        })

        setCollection({
            collectionList: collectionList,
            animeExisting: existingTmp
        })
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

        const newCollectionList = [...collection.collectionList, {name: newCollection, list: []}]
        localStorage.setItem('anilist_collection', JSON.stringify(newCollectionList))
        setCollection({
            ...collection,
            collectionList: newCollectionList
        })
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
            const findIndex = collection.collectionList.findIndex(el => el.name == item)

            collection.collectionList[findIndex].list.push({
                id: data.Media.id,
                title: {
                    english: data.Media.title.english
                },
                coverImage: {
                    large: data.Media.coverImage.large
                }
            })
        })
        localStorage.setItem('anilist_collection', JSON.stringify(collection.collectionList))
        setCheckedCollection([])
        initialCollectionList()
        handleModal()
        Swal.fire({
            title: `Success!`,
            text: `Anime added to collection(s)`,
            icon: 'success',
            confirmButtonText: 'Awesome!',
        })
    }

    useEffect(() => {
        if(!router.isReady) return;

        initialCollectionList()
    }, [router.isReady])

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
                                    {collection.collectionList.length < 1 ? (
                                        <>
                                            <span>No collection found, you can create one here first</span>
                                            <input type="text" value={newCollection} onChange={(e) => {setNewCollection(e.target.value)}} placeholder="Input collection name" css={DetailAnimeStyle.inputCollection}></input>
                                            <Button outline buttonTrigger={addNewCollection}>
                                                + Create new collection
                                            </Button>
                                        </>
                                    ) : (
                                        collection.collectionList.map((item, index) => {
                                            return(
                                                <div css={DetailAnimeStyle.chooseCollection} key={index}>
                                                    <div css={DetailAnimeStyle.chooseCollectionInput}>
                                                        <input
                                                            type="checkbox"
                                                            value={item.name}
                                                            onChange={(e) => setChecked(e)}
                                                            disabled={collection.animeExisting[index]}
                                                        />
                                                        <CollectionCard 
                                                            label={item.name}
                                                        />
                                                    </div>
                                                    <span css={collection.animeExisting[index] ? DetailAnimeStyle.existingAnime : DetailAnimeStyle.existingAnimeFalse}>Anime Already exist</span>
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