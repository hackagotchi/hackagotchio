import Head from 'next/head'
import { CMS_NAME, HOME_OG_IMAGE_URL } from '../lib/constants'

export default function Meta() {
  return (
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
<link rel="manifest" href="/site.webmanifest"/>
<meta name="msapplication-TileColor" content="#da532c"/>
<meta name="theme-color" content="#ffffff"/>
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta
        name="description"
        content={`The cutest game for Hack Club.`}
      />
      <meta property="og:image" content={'https://images.unsplash.com/photo-1536657464919-892534f60d6e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=4288&h=2848&fit=crop&ixid=eyJhcHBfaWQiOjF9'} />
    </Head>
  )
}
