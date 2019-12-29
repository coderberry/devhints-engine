import React from 'react'
import useSiteConfig from '../gatsby-hooks/useSiteConfig'
import { useSheetContext } from '../gatsby-shell/SheetTemplate'
import { DisqusData } from '../types/types'
import useDisqus from './lib/useDisqus'

/**
 * Returns a Disqus `thread` and `count`.
 */

export const useSiteDisqus = (): {
  thread: React.ReactNode
  count: React.ReactNode
} => {
  // If no data is available, return this
  const noop = () => ({ thread: null, count: null })

  const sheetCtx = useSheetContext()
  if (!sheetCtx) return noop()

  const config = useSiteConfig()
  if (!config) return noop()

  const path = sheetCtx.path // '/react'
  const siteHost = config.site.host // 'https://devhints.io'
  const host = config.disqus.host // 'devhints.disqus.com'
  const url = `${siteHost}${path}`
  const identifier = path.substr(1)

  // Disqus configuration
  const disqus: DisqusData = { host, url, identifier }
  return useDisqus(disqus) || noop()
}
