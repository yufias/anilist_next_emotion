/** @jsxImportSource @emotion/react */
import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { DetailCollectionStyle } from "./DetailCollectionStyle"
import Layout from "../Layout"
import Container from "../Container"
import Button from "../Button"
import AnimeCard from "../AnimeCard"
import Modal from "../Modal"
import Swal from "sweetalert2"
import { globalStyle } from "../../../styles/globalStyle"

const DetailCollection = ({ name }) => {
    const [collectionList, setCollectionList] = useState([])
    const [modalOpen, setModalOpen] = useState(false)
    const [collectionName, setCollectionName] = useState('')
    const router = useRouter()


    const initialCollectionList = () => {
        const anilistCollection = JSON.parse(localStorage.getItem('anilist_collection'))
        const findIndex = anilistCollection.findIndex(item => item.name == router.query.name)
        setCollectionName(router.query.name)
        setCollectionList(anilistCollection[findIndex].list)
    }
    
    const handleModal = () => {
        setModalOpen(!modalOpen)
    }

    const EditCollectionName = () => {
        console.log("HERE")
    }

    const deleteAnime = (id) => {
        const findCollectionListIndex = collectionList.findIndex(item => item.id == id)
        Swal.fire({
            title: `Delete ${collectionList[findCollectionListIndex].title.english}`,
            text: 'Do you want to continue',
            icon: 'question',
            confirmButtonText: 'Yes',
            confirmButtonColor: `${globalStyle.colors.blue[70]}`,
            showCancelButton: true,
        }).then((result) => {
            if (result.isConfirmed) {
                collectionList.splice(findCollectionListIndex, 1)
                const anilistCollection = JSON.parse(localStorage.getItem('anilist_collection'))
                const findCollectionNameIndex = anilistCollection.findIndex(item => item.name == collectionName)
                anilistCollection[findCollectionNameIndex].list = collectionList
                localStorage.setItem('anilist_collection', JSON.stringify(anilistCollection))
                initialCollectionList()
            }
        })
    }

    useEffect(() => {
        if(!router.isReady) return;
        
        initialCollectionList()
    }, [router.isReady])

    return(
        <Layout>
            <Container>
                <div>
                    <div>
                        <h2>
                            Collection {name}
                        </h2>
                        {/* <Button>
                            Edit
                        </Button> */}
                    </div>
                    <div css={DetailCollectionStyle.collectionList}>
                        {collectionList.length < 1 ? (
                            <span>No anime in this collection</span>
                        ) : (
                            collectionList.map((anime, index) => {
                                return(
                                    <AnimeCard
                                        key={index}
                                        detail={anime}
                                        deleteAnime={deleteAnime}
                                    />
                                )
                            })
                        )}
                    </div>
                    <div id="modalContainer">
                        <Modal
                            modalOpen={modalOpen}
                            handleModal={handleModal}
                        >
                            <div>
                                <h3>Edit collection name</h3>
                                <input type="text" value={collectionName} onChange={(e) => {setCollectionName(e.target.value)}} placeholder="Input collection name"></input>
                                {/* <Button buttonTrigger={EditCollectionName}>
                                    Edit
                                </Button> */}
                            </div>
                        </Modal>
                    </div>
                </div>
            </Container>
        </Layout>
    )
}

export default DetailCollection