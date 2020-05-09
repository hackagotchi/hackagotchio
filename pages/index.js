import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import fetch from 'isomorphic-unfetch';

function compare( a, b ) {
  if ( Date.parse(a.date) < Date.parse(b.date) ){
    return 1;
  }
  if ( Date.parse(a.date) > Date.parse(b.date) ){
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
          <title>MLNMA</title>
        </Head>
          <Container>
            <Intro />
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

  const allPosts = await getAllPosts(["title","date","slug","author","content","ogImage","coverImage", "excerpt"])

  return {
        props: { allPosts },
  }
}