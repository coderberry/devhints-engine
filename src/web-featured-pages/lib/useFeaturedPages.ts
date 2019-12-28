import { graphql, useStaticQuery } from 'gatsby'

interface Context {
  nodePath: string
  category: string
  title: string
}

interface Node {
  id: string
  context: Pick<Context, 'nodePath' | 'title'>
}

interface Data {
  pages: {
    nodes: Node[]
  }
}

/**
 * Returns a list of featured pages.
 */

const useFeaturedPages = (): Node[] => {
  const { nodes } = useStaticQuery<Data>(graphql`
    query FeaturedPagesQuery {
      pages: allSitePage(
        filter: {
          context: { isFeatured: { eq: true }, nodeType: { eq: "sheet" } }
        }
        sort: { fields: [context___updated], order: DESC }
        limit: 8
      ) {
        nodes {
          id
          context {
            nodePath
            category
            title
          }
        }
      }
    }
  `).pages
  return nodes
}

export default useFeaturedPages
