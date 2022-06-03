/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client';
import { GETDETAILANIME } from '../../../queries';
import { DetailAnimeStyle } from './DetailAnimeStyle';
import Layout from '../Layout';
import Container from '../Container';
import Loading from '../Loading';
import Image from 'next/image';


const DetailAnime = ({ id }) => {
    const { loading, error, data, refetch, networkStatus } = useQuery(GETDETAILANIME, { 
        variables: {
            idIn: id,
            asHtml: false
        }
    });

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
                        <figure>
                            <Image 
                                src={data.Media.coverImage.large}
                                width={300}
                                height={400}
                            />
                        </figure>
                        <div css={DetailAnimeStyle.textInfoContainer}>
                            <h2>{data.Media.title.english}</h2>
                            <p>{data.Media.description}</p>
                        </div>
                        <div></div>
                    </div>
                ) : (
                    <></>
                )}
                   
            </Container>
        </Layout>
    )
}

export default DetailAnime