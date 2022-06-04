/** @jsxImportSource @emotion/react */
import { useState, useEffect } from "react"
import Layout from "../Layout"
import Container from "../Container"
import Loading from "../Loading"

const CollectionList = () => {
    const [collectionList, setCollectionList] = useState(JSON.parse(localStorage.getItem('anilist_collection')))

    return(
        <Layout>
            <Container>
                <div>
                    <h2>Collection List</h2>
                    
                    {collectionList.length < 1 ? (
                        <span>You have no collection, you can create one by click + button</span>
                    ) : (
                        <span>Collection avail</span>
                    )}
                </div>
            </Container>
        </Layout>
    )
}

export default CollectionList