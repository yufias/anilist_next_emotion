/** @jsxImportSource @emotion/react */
import Layout from "../Layout"
import Container from "../Container"
import Link from "next/link"

const DetailCollection = ({ name }) => {
    return(
        <Layout>
            <Container>
                <div>
                    {name}
                </div>
            </Container>
        </Layout>
    )
}

export default DetailCollection