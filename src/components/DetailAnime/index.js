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


const DetailAnime = ({ id }) => {
    const { loading, error, data, refetch, networkStatus } = useQuery(GETDETAILANIME, { 
        variables: {
            idIn: id,
            asHtml: true
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