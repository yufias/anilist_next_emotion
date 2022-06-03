import { gql } from '@apollo/client';

export const GETALLANIME = gql`
    query ($id: Int, $page: Int, $perPage: Int, $search: String) {
        Page (page: $page, perPage: $perPage) {
            pageInfo {
                total
                currentPage
                lastPage
                hasNextPage
                perPage
            }
            media (id: $id, search: $search) {
                id
                title {
                english
                native
                }
                coverImage {
                medium
                large
                color
                }
                bannerImage
            }
        }
    }
`;

export const GETDETAILANIME = gql`
    query Query($idIn: [Int], $asHtml: Boolean) {
        Media(id_in: $idIn) {
            id
            title {
                english
            }
            episodes
            duration
            chapters
            coverImage {
                large
                extraLarge
            }
            bannerImage
            genres
            description(asHtml: $asHtml)
        }
    }
`