import AnimeList from "../src/components/AnimeList"
import { useEffect } from 'react'

export default function Home() {
    useEffect(() => {
        if(!localStorage.getItem('anilist_collection')) {
            localStorage.setItem('anilist_collection', JSON.stringify([]))
        }
    }, [])
    return (
        <AnimeList />
    )
}
