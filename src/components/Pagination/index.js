/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react'
import { PaginationStyle } from './PaginationStyle'

const Pagination = ({ page, totalPage, changePage }) => {
    const [isMobile, setisMobile] = useState(false)

    useEffect(() => {
        window.innerWidth < 576 ? setisMobile(true) : setisMobile(false)
    }, [])

    return(
        <div css={PaginationStyle.paginationWrapper}>
            <div css={PaginationStyle.page} onClick={() => changePage(1)}>
                <span>
                    &lt;&lt;
                </span>
            </div>
            <div css={PaginationStyle.page} onClick={() => changePage(page-1)}>
                <span>
                    &lt;
                </span>
            </div>
            {Array.from({ length: isMobile ? 5 - page : 10 - page }, (_, i) => {
                return(
                    <div key={i} css={page+i == page ? [PaginationStyle.page, PaginationStyle.active] : PaginationStyle.page}  onClick={() => changePage(page+1)}>
                        <span key={page+i}>{page+i}</span>
                    </div>
                )
            })}
            <div css={PaginationStyle.page} onClick={() => changePage(page+1)}>
                <span>
                    &gt;
                </span>
            </div>
            <div css={PaginationStyle.page} onClick={() => changePage(totalPage)}>
                <span>
                    &gt;&gt;
                </span>
            </div>
        </div>
    )
}

export default Pagination