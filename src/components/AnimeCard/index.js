/** @jsxImportSource @emotion/react */
import Image from "next/image"
import { AnimeCardStyle } from "./AnimeCardStyle"
import Button from "../Button"
import Link from "next/link"

const AnimeCard = ({ detail, deleteAnime }) => {
    return(
        <div css={AnimeCardStyle.card}>
            <Link href={`/anime_detail/${detail.id}`}>
                <a>
                    <figure css={AnimeCardStyle.figure} >
                        <Image
                            src={detail.coverImage.large}
                            alt="cover"
                            width={200}
                            height={200}
                            objectPosition="center"
                        />
                    </figure>
                    <div css={AnimeCardStyle.contentContainer}>
                        <h4 css={AnimeCardStyle.title}>{detail.title.english || '-'}</h4>
                    </div>
                </a>
            </Link>
            <div css={deleteAnime ? AnimeCardStyle.deleteContainer : AnimeCardStyle.deleteContainerHide }>
                <Button variant="danger" buttonTrigger={() => deleteAnime(detail.id)}>
                    Delete anime
                </Button>
            </div>
        </div>
    )
}

export default AnimeCard