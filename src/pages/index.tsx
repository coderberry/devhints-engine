import { graphql, StaticQuery } from 'gatsby'
import * as React from 'react'
import { CONTENT } from '../../config'
import RootPage from '../web/components/RootPage'
import Layout from '../web/containers/Layout'
import { Provider } from '../web/contexts/SiteContext'
import { groupByCategory, toSiteLinks } from '../web/lib/site_page'
import { AllSitePage, SiteSearchIndex } from '../web/types'

/*
 * Types
 */

export interface Data {
  allPages: AllSitePage
  recentlyUpdated: AllSitePage
  siteSearchIndex: SiteSearchIndex
}

/**
 * Connector for `<RootPage />`
 */

export const Root = () => {
  return (
    <StaticQuery
      query={query}
      render={(data: Data) => {
        const groups = groupByCategory(data.allPages)
        return (
          <Layout>
            <Provider value={{ CONTENT }}>
              <RootPage
                groups={groups}
                recentlyUpdated={toSiteLinks(data && data.recentlyUpdated)}
                siteSearchIndex={data && data.siteSearchIndex}
              />
            </Provider>
          </Layout>
        )
      }}
    />
  )
}

export default Root

/**
 * GraphQL query
 */

const query = graphql`
  query IndexPageQuery {
    siteSearchIndex {
      index
    }

    allPages: allSitePage(filter: { context: { nodeType: { eq: "sheet" } } }) {
      edges {
        node {
          id
          context {
            nodePath
            category
            title
          }
        }
      }
    }

    recentlyUpdated: allSitePage(
      filter: { context: { updated: { ne: null }, nodeType: { eq: "sheet" } } }
      sort: { fields: [context___updated], order: DESC }
      limit: 20
    ) {
      edges {
        node {
          id
          context {
            nodePath
            category
            title
          }
        }
      }
    }
  }
`
