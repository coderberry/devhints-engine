import React, { useEffect } from 'react'
import { DisqusData } from '../../types/types'

/**
 * Disqus doesn't need to load right away.
 */

const DISQUS_DELAY = 100

/**
 * Adds a discus discussion.
 *
 * @example
 *     const { thread, count } = useDisqus({ host, url, identifier })
 *     return <div>{count} responses: {thread}</div>
 */

const useDisqus = (props: DisqusData) => {
  const { host, url, identifier } = props

  // On componentDidMount, inject some scripts
  useEffect(() => {
    setTimeout(() => {
      if (typeof window === 'undefined') return
      ;(window as any).disqus_config = function() {
        ;(this as any).page.url = url
        ;(this as any).page.identifier = identifier
      }

      injectScript(host)
    }, DISQUS_DELAY)
  }, [])

  const thread = <div id='disqus_thread' />
  const count = (
    <span
      className='disqus-comment-count'
      data-disqus-identifier={identifier}
      data-disqus-url={url}
    >
      Comments
    </span>
  )
  return { thread, count }
}

/**
 * Injects disqus's scripts into the page.
 *
 * @example
 *     inject('devhints.disqus.com')
 */

export function injectScript(host: string) {
  injectEmbed(host)
  injectCount(host)
}

export function injectEmbed(host: string) {
  const s = document.createElement('script')
  s.src = `https://${host}/embed.js`
  s.setAttribute('data-timestamp', `#{+new Date()}`)
  const parent = document.head || document.body
  if (parent) parent.appendChild(s)
}

export function injectCount(host: string) {
  const s = document.createElement('script')
  s.src = `https://${host}/count.js`
  s.id = 'dsq-count-scr'
  s.async = true
  const parent = document.head || document.body
  if (parent) parent.appendChild(s)
}

export default useDisqus
