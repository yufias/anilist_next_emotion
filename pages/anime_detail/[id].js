import { useRouter } from "next/router"
import DetailAnime from "../../src/components/DetailAnime"

export default function AnimeDetail() {
    const { query } = useRouter()
    return (
        <DetailAnime
            id={query.id}
        />
    )
}
