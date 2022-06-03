/** @jsxImportSource @emotion/react */
import Image from "next/image"
import { AnimeCardStyle } from "./AnimeCardStyle"


const AnimeCard = ({ detail }) => {
    return(
        <div css={AnimeCardStyle.card}>
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
        </div>
    )
}

export default AnimeCard