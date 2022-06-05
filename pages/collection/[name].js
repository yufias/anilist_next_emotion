import { useRouter } from "next/router"
import DetailCollection from "../../src/components/DetailCollection"

export default function CollectionDetail() {
    const { query } = useRouter()

    return (
        <DetailCollection
            name={query.name}
        />
    )
}
