/** @jsxImportSource @emotion/react */
import { PaginationStyle } from './PaginationStyle'

const Pagination = ({ page, totalPage, changePage }) => {
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
            {Array.from({ length: 10 - page }, (_, i) => {
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