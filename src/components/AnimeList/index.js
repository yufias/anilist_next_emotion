/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react'
import { AnimeListStyle } from './AnimeListStyle'
import { useQuery, NetworkStatus } from '@apollo/client';
import { GETALLANIME } from '../../../queries';
import Layout from '../Layout';
import Container from '../Container';
import Loading from '../Loading';
import AnimeCard from '../AnimeCard';
import Pagination from '../Pagination';
import Link from 'next/link';

const AnimeList = () => {
    const [pages, setPages] = useState([])
    const [totalPage, setTotalPage] = useState(0)
    const [page, setPage] = useState(1)
    const { loading, error, data, refetch, networkStatus } = useQuery(GETALLANIME, { 
        variables: {
            perPage: 10
        } ,
        notifyOnNetworkStatusChange: true,
    });

    useEffect(() => {
        if(data) {
            const responseTotalPage = data.Page.pageInfo.lastPage
            const currentPage = data.Page.pageInfo.currentPage
            let pagesNumber = []

            Array.from({length: responseTotalPage}).map((_, index) => (
                pagesNumber.push(index+1)
            )) 
            setPages(pagesNumber)
            setPage(currentPage)
            setTotalPage(responseTotalPage)
        }
    }, [data]);

    const changePage = (page) => {
        refetch({ 
            page: page,
            perPage: 10
         })
    }

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
                <h2 css={AnimeListStyle.pageTitle}>List Anime</h2>
                <div css={AnimeListStyle.listContainer}>
                    {loading || networkStatus == NetworkStatus.refetch ? (
                        <Loading />
                    ) : (
                        <>
                            {data.Page.media.map((anime, index) => {
                                return(
                                    <AnimeCard
                                        detail={anime}
                                        key={index}
                                    />
                                )
                            })}
                        </>
                    )}
                </div>
                <div css={AnimeListStyle.paginationContainer}>
                    <Pagination 
                        page={page}
                        totalPage={totalPage}
                        changePage={changePage}
                    />
                </div>
            </Container>
        </Layout>
    )
}

export default AnimeList

