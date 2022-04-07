import pagination from './index'
import { Pag, PagLink } from './style-pagination'

const Dots = ({ className }) => <span>...</span>

const Page = ({ page, pageLink, onClick }) => {
  const Component = page === '...' ? Dots : 'a'

  const handleClick = !onClick
    ? null
    : (e) => {
        e.preventDefault()
        onClick(page)
      }

  return (
    <Component href={pageLink} onClick={handleClick}>
      {page}
    </Component>
  )
}

export const Pagination = ({ total, activePage, onClick, pageLink }) => {
  return (
    <Pag>
      {pagination({ total, activePage }).map((page, index) => (
        <PagLink key={index} active={activePage === page ? true : ''}>
          <Page
            page={page}
            onClick={onClick}
            pageLink={pageLink.replace('%page%', page)}
          />
        </PagLink>
      ))}
    </Pag>
  )
}

Pagination.defaultProps = {
  pageLink: '',
  activePage: 1,
}
