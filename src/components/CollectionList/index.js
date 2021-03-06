/** @jsxImportSource @emotion/react */
import { useState, useEffect } from "react"
import { CollectionListStyle } from "./CollectionListStyle"
import { globalStyle } from '../../../styles/globalStyle'
import Layout from "../Layout"
import Container from "../Container"
import Button from "../Button"
import CollectionCard from "../CollectionCard"
import Swal from 'sweetalert2'
import Modal from "../Modal"


const CollectionList = () => {
    const [collectionList, setCollectionList] = useState([])
    const [newCollection, setNewCollection] = useState('')
    const [modalOpen, setModalOpen] = useState(false)
    const [modalOpenEdit, setModalOpenEdit] = useState(false)
    const [collectionName, setCollectionName] = useState('')
    const [originCollectionName, setOriginCollectionName] = useState('')

    const addNewCollection = () => {
        const findExisting = collectionList.find(item => item == newCollection);

        if(!newCollection){
            Swal.fire({
                title: `Warning`,
                text: `Collection name can't be empty`,
                icon: 'warning',
                confirmButtonText: 'Ok!',
            })
            return
        }

        if(findExisting) {
            Swal.fire({
                title: `Warning`,
                text: `Collection name already exist`,
                icon: 'warning',
                confirmButtonText: 'Ok!',
            })
            return;
        }
        const newCollectionList = [...collectionList, {name: newCollection, list: []}]
        localStorage.setItem('anilist_collection', JSON.stringify(newCollectionList))
        setCollectionList(newCollectionList)
        setNewCollection('')
        handleModal()
    }

    const deleteCollection = (collectionName) => {
        const collectionIndex = collectionList.findIndex(item => item.name == collectionName)
        Swal.fire({
            title: `Delete ${collectionName}`,
            text: 'Do you want to continue',
            icon: 'question',
            confirmButtonText: 'Yes',
            confirmButtonColor: `${globalStyle.colors.blue[70]}`,
            showCancelButton: true,
        }).then((result) => {
            if (result.isConfirmed) {
                collectionList.splice(collectionIndex, 1)
                localStorage.setItem('anilist_collection', JSON.stringify(collectionList))
                initialCollectionList()
            }
        })
          
    }

    const handleModal = () => {
        setModalOpen(!modalOpen)
    }

    const handleModalEditOnly = () => {
        setModalOpenEdit(!modalOpenEdit)
    }

    const handleModalEdit = (name) => {
        setModalOpenEdit(!modalOpenEdit)
        setCollectionName(name)
        setOriginCollectionName(name)
    }

    const initialCollectionList = () => {
        setCollectionList(JSON.parse(localStorage.getItem('anilist_collection')))
    }

    const editCollection = () => {
        if(!collectionName) {
            Swal.fire({
                title: `Warning`,
                text: `Collection name cannot be empty`,
                icon: 'warning',
                confirmButtonText: 'Understood!',
            })
            return;
        }
        
        const anilistCollection = JSON.parse(localStorage.getItem('anilist_collection'))
        const findIndex = anilistCollection.findIndex(item => item.name == originCollectionName)
        
        anilistCollection[findIndex].name = collectionName

        localStorage.setItem('anilist_collection', JSON.stringify(anilistCollection))
        handleModalEditOnly()
        initialCollectionList()
    }

    useEffect(() => {
        initialCollectionList()
    }, [])

    return(
        <Layout>
            <Container>
                <div css={CollectionListStyle.collectionListWrapper}>
                    <div css={CollectionListStyle.collectionListHeader}>
                        <h2>Collection List</h2>
                    </div>
                    <div css={CollectionListStyle.buttonAddModal}>
                        <Button buttonTrigger={handleModal}>
                            + Add new
                        </Button>
                    </div>
                    <div css={CollectionListStyle.collectionListContent}>
                        {collectionList.length < 1 ? (
                            <div>
                                <span>You have no collection, you can create one by click +Add new</span>
                            </div>
                        ) : (
                            collectionList.map((item, index) => {
                                return(
                                    <CollectionCard 
                                        key={index}
                                        label={item.name}
                                        deleteCollection={deleteCollection}
                                        editCollection={handleModalEdit}
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
                            <div css={CollectionListStyle.addCollectionContainer}>
                                <h3>Add new collection</h3>
                                <input type="text" value={newCollection} onChange={(e) => {setNewCollection(e.target.value)}} placeholder="Input collection name" css={CollectionListStyle.inputCollection}></input>
                                <Button buttonTrigger={addNewCollection}>
                                    +
                                </Button>
                            </div>
                        </Modal>

                        <Modal
                            modalOpen={modalOpenEdit}
                            handleModal={handleModalEditOnly}
                        >
                            <div css={CollectionListStyle.addCollectionContainer}>
                                <h3>Edit collection name</h3>
                                <input type="text" value={collectionName} onChange={(e) => {setCollectionName(e.target.value)}} placeholder="Input collection name" css={CollectionListStyle.inputCollection}></input>
                                <Button buttonTrigger={editCollection}>
                                    Edit
                                </Button>
                            </div>
                        </Modal>
                    </div>
                </div>
            </Container>
        </Layout>
    )
}

export default CollectionList