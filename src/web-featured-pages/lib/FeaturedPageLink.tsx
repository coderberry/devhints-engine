import { Link } from 'gatsby'
import React from 'react'
import css from 'styled-jsx/css'

interface Props {
  path: string
  title: string
}

const FeaturedPageLink = (props: Props) => {
  const { path, title } = props

  return (
    <React.Fragment>
      <Link to={path} className='FeaturedPageLink'>
        {title}
      </Link>

      <style jsx>{CSS}</style>
    </React.Fragment>
  )
}

const CSS = css`
  :global(.FeaturedPageLink) {
    text-decoration: none;
    display: inline-block;
    padding: 8px 12px;
    margin: 4px;
    border: solid 1px #8883;
  }
`

export default FeaturedPageLink
