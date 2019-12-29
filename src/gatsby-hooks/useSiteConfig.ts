import { graphql, useStaticQuery } from 'gatsby'

/**
 * Hook for accessing site content (labels and stuff)
 */

const useSiteConfig = (): {
  site: {
    host: string
  }
  disqus: {
    enabled: boolean
    host: string
  }
} => {
  // Add more stuff here as needed
  const QUERY = graphql`
    {
      site {
        siteMetadata {
          site {
            host
          }
          disqus {
            enabled
            host
          }
        }
      }
    }
  `

  return useStaticQuery(QUERY).site.siteMetadata
}

export default useSiteConfig
