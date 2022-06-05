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


const DetailAnime = ({ id }) => {
    const [modalOpen, setModalOpen] = useState(false)
    const [collectionList, setCollectionList] = useState([])
    const [checkedCollection, setCheckedCollection] = useState([])

    const { loading, error, data } = useQuery(GETDETAILANIME, { 
        variables: {
            idIn: id,
            asHtml: true
        }
    });

    const initialCollectionList = () => {
        setCollectionList(JSON.parse(localStorage.getItem('anilist_collection')))
        console.log(collectionList, "COLLECTION LIST")
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

    const addToCollections = () => {
        console.log(checkedCollection, "CHECKED COLLECTION")
        console.log(data, "DETAIL ANIME")
        checkedCollection.forEach((item, index) => {
            const findIndex = collectionList.findIndex(el => el.name == item)

            collectionList[findIndex].list.push({
                id: data.Media.id,
                title: data.Media.title.english,
                coverImage: data.Media.coverImage.large
            })
        })
        localStorage.setItem('anilist_collection', JSON.stringify(collectionList))
    }

    useEffect(() => {
        initialCollectionList()
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
                                    {collectionList.map((item, index) => {
                                        return(
                                            <div css={DetailAnimeStyle.chooseCollection} key={index}>
                                                <input
                                                    type="checkbox"
                                                    value={item.name}
                                                    onChange={(e) => setChecked(e)}
                                                />
                                                <Link href={`/collection/${item.name}`}>
                                                    <a>
                                                        <CollectionCard 
                                                            label={item.name}
                                                        />
                                                    </a>
                                                </Link>
                                            </div>
                                        )
                                    })}
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