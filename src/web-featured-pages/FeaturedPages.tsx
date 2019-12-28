import React from 'react'
import css from 'styled-jsx/css'
import FeaturedPageLink from './lib/FeaturedPageLink'
import useFeaturedPages from './lib/useFeaturedPages'

const FeaturedPages = () => {
  const nodes = useFeaturedPages()

  return (
    <section className='FeaturedPages'>
      <div className='container'>
        {nodes.map(node => {
          return (
            <FeaturedPageLink
              key={node.id}
              path={node.context.nodePath}
              title={node.context.title}
            />
          )
        })}
      </div>

      <style jsx>{CSS}</style>
    </section>
  )
}

const CSS = css`
  .FeaturedPages {
    position: relative;
  }

  .FeaturedPages::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 32px;
    right: 32px;
    bottom: 0;
    background: rgba(0, 0, 0, 0.02);
  }

  .container {
    @extend %gutter-padding;
    max-width: 740px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }
`

export default FeaturedPages
