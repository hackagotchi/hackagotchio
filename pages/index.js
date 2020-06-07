import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import fetch from 'isomorphic-unfetch';

function compare(a, b) {
  if (Date.parse(a.date) < Date.parse(b.date)) {
    return 1;
  }
  if (Date.parse(a.date) > Date.parse(b.date)) {
    return -1;
  }
  return 0;
}

export default function Index({ allPosts }) {
  const postsSorted = allPosts.sort(compare)
  console.log(postsSorted)
  const heroPost = postsSorted[0]
  const morePosts = postsSorted.slice(1)
  return (
    <>
      <Layout>
        <Head>
          <title>Hackagotchi!</title>
        </Head>

        <Intro />

        <section className="w-1/2 container mx-auto pb-5 space-y-5">
          <div>
            <h1 className="text-5xl" id="-https-a-slack-edge-com-production-standard-emoji-assets-10-2-google-medium-26f0-fe0f-2x-png-https-a-slack-edge-com-production-standard-emoji-assets-10-2-google-medium-26f0-fe0f-2x-png-overview-https-emoji-slack-edge-com-t0266frgm-gempheus-f672da5597ba4abb-png-https-emoji-slack-edge-com-t0266frgm-gempheus-f672da5597ba4abb-png-" className="text-5xl">👁‍🗨 <strong>Overview:</strong> </h1>
          </div>
          <p>With Hackagotchi, you can have a farm and cute adorable Orphei that earn you passive income in GP.</p>
          <h1 className="text-5xl" id="-https-a-slack-edge-com-production-standard-emoji-assets-10-2-google-medium-1f945-2x-png-https-a-slack-edge-com-production-standard-emoji-assets-10-2-google-medium-1f945-2x-png-goal-https-a-slack-edge-com-production-standard-emoji-assets-10-2-google-medium-26bd-2x-png-https-a-slack-edge-com-production-standard-emoji-assets-10-2-google-medium-26bd-2x-png-">⚽️ <strong>Goal:</strong></h1>
          <p>Hackagotchi was meant to revitalize the GP economy by giving people adorable things to covet, make them feel more integrated with the community, and make
them feel like they could work toward earning more GP in the future.</p>
          <h1 className="text-5xl" id="-https-a-slack-edge-com-production-standard-emoji-assets-10-2-google-medium-1f33d-2x-png-https-a-slack-edge-com-production-standard-emoji-assets-10-2-google-medium-1f33d-2x-png-land-farming-and-resources-https-a-slack-edge-com-production-standard-emoji-assets-10-2-google-medium-1f333-2x-png-https-a-slack-edge-com-production-standard-emoji-assets-10-2-google-medium-1f333-2x-png-"><strong>Land, Farming, and Resources:</strong></h1>
          <p>When you hackstead, you get a tile of land. You can buy more tiles of land
          later after your hackstead has earned more XP. You plant things on your
          tiles of land which yield resources at regular intervals. These
          resources aren&#39;t GP, imagine things like &quot;Hacker Spirit&quot; and &quot;Orange
          Energy Crystals.&quot; Your plants level up after they&#39;ve been growing for a
          while.<br/> Higher level plants yield more resources and give your hackstead
          more XP so you can buy more tiles of land. Plants get bonuses to their
          yield and rate of growth if they&#39;re planted on tiles next to plants of
          the same type, this encourages people to grow only one or two types of
          plants, meaning that they&#39;ll only get one or two types of resources
regularly.</p>
          <h1 className="text-5xl" id="-https-a-slack-edge-com-production-standard-emoji-assets-10-2-google-medium-1f4b0-2x-png-https-a-slack-edge-com-production-standard-emoji-assets-10-2-google-medium-1f4b0-2x-png-fees-and-hackagotchi-https-emoji-slack-edge-com-t0266frgm-adorpheus-b5973d00df055343-png-https-emoji-slack-edge-com-t0266frgm-adorpheus-b5973d00df055343-png-">💸 <strong>Fees and Hackagotchi:</strong> </h1>
          <p>In order to craft useful things you need multiple types of resources, so
          you have to buy and sell from other Hack Club members on the open
          market. You also aren&#39;t given any seeds to start with, so you have to
          buy some seeds off of the open market as well. There&#39;s a small 5%
          clerical fee when you put something up for sale on the market, and
          there&#39;s also fees on hacksteading. All of this fee money is later
          &quot;found&quot; by Hackagotchi during events called &quot;Harvests.&quot; The innocent
Hackagotchi simply give that money to their owners.</p>
          <h1 className="text-5xl" id="-https-a-slack-edge-com-production-standard-emoji-assets-10-2-google-medium-1f48d-2x-png-https-a-slack-edge-com-production-standard-emoji-assets-10-2-google-medium-1f48d-2x-png-hackagotchi-and-items-https-a-slack-edge-com-production-standard-emoji-assets-10-2-google-medium-1f944-2x-png-https-a-slack-edge-com-production-standard-emoji-assets-10-2-google-medium-1f944-2x-png-">🏦 <strong>Hackagotchi and Items:</strong> </h1>
          <p>You can craft items that give you a chance of spawning different types of
          Hackagotchi. Hackagotchi give you more GP the happier they are.
          Hackagotchi can hold items which make them happier. For example, if two
          Hackagotchi on your hackstead are both holding &quot;Friendship Bracelet&quot;
          items, you get a small happiness boost. If one Hackagotchi is holding a
Rubiks cube, you have a small chance to get a 10% boost to the happiness of your Hackstead when a harvest occurs.</p>

        </section>

        

        <Container>
        <h1 className="text-6xl pb-2">Latest from the Blog:</h1>
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps(req) {

  const { getAllPosts } = require('./api/api')

  const allPosts = await getAllPosts(["title", "date", "slug", "author", "content", "ogImage", "coverImage", "excerpt"])

  return {
    props: { allPosts },
  }
}