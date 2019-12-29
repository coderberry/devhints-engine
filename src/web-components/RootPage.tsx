import React from 'react'

import useSiteContent from '../gatsby-hooks/useSiteContent'
import CommonHead from '../gatsby-shell/comps/CommonHead'
import { HomeMeta } from '../gatsby-shell/Meta'
import { GroupedSiteLinks, SiteLink } from '../types/types'
import FeaturedPages from '../web-featured-pages/FeaturedPages'
import { LiveSearchInput } from '../web-search'
import CodefundBanner from './CodefundBanner'
import PagesList from './PagesList'
import SiteHeader from './SiteHeader'
import TopNav from './TopNav'

export interface Props {
  recentlyUpdated: SiteLink[]
  groups: GroupedSiteLinks
}

/**
 * The home page.
 *
 * @example
 *     <RootPage
 *       groups={{ 'React': [ ... ] }}
 *       recentlyUpdated={[ ... ]}
 *     />
 */

export const RootPage = (props: Props) => {
  const content = useSiteContent()
  const recentlyUpdatedLabel = content.home.recentlyUpdated
  const { groups, recentlyUpdated } = props

  return (
    <div>
      <HomeMeta />
      <CommonHead />
      <TopNav />

      <div className='body-area -slim'>
        <SiteHeader />
        <LiveSearchInput />
        <CodefundBanner />
      </div>

      <FeaturedPages />

      <div className='body-area -slim'>
        <PagesList title={recentlyUpdatedLabel} links={recentlyUpdated} />

        {Object.keys(groups).map((group: string) => (
          <PagesList key={group} title={group} links={groups[group]} />
        ))}
      </div>
    </div>
  )
}

export default RootPage
