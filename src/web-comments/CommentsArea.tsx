import React from 'react'
import CSS from './CommentsArea.module.css'
import CommentsAreaSummary from './lib/CommentsAreaSummary'
import CommentsSection from './lib/CommentsSection'
import { useSiteDisqus } from './useSiteDisqus'

/**
 * Comments area
 */

const CommentsArea = () => {
  const { thread, count } = useSiteDisqus()

  return (
    <section className={CSS.root} id='comments' data-js-no-preview>
      <div className={CSS.container}>
        <details className={CSS.details}>
          <CommentsAreaSummary count={count} />
          <CommentsSection {...{ thread, count }} />
        </details>
      </div>
    </section>
  )
}

/*
 * Export
 */

export default CommentsArea
