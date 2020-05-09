import Document, { Html, Head, Main, NextScript } from 'next/document'
import Media from 'react-media'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <Head>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css" integrity="sha384-zB1R0rpPzHqg7Kpt0Aljp8JPLqbXI3bhnPWROx27a9N0Ll6ZP/+DiW/UqRcLbRjq" crossorigin="anonymous" />
          <script defer src="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.js" integrity="sha384-y23I5Q6l+B6vatafAwxRu/0oK/79VlbSz7Q9aiSZUvyWYIYsd+qj+o24G5ZU2zJz" crossorigin="anonymous"></script>
          <script defer src="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/contrib/auto-render.min.js" integrity="sha384-kWPLUVMOks5AQFrykwIup5lo0m3iMkkHrD0uJ4H5cjeGihAutqP0yW0J6dpFiVkI" crossorigin="anonymous"
            onload="renderMathInElement(document.body);"></script>
          <Media queries={{ dark: '(prefers-color-scheme: dark)' }}>
            {(e) => {
              return (
                <link rel="stylesheet"
                  href={`//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.0.2/styles/${e.dark ? "ir-black" : "github"}.min.css`} />
              )
            }
            }
          </Media>
          <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.0.2/highlight.min.js"></script>
          <meta name="title" content="MLNMA"/>
<meta name="description" content="A notebook, blog, and little course about Machine Learning, without the abstractness."/>
<meta name="keywords" content="Machine Learning, machine learning, artificial intelligence, mathematics, javascript, rust, python, numpy, tensorflow, keras, nextjs, web development"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta name="revisit-after" content="1 days"/>
<meta name="author" content="Rishi Kothari"/>
<meta name="title" content="MLNMA"/>
<meta name="description" content="A course, notebook, and blog about Machine Learning, Web Development, and Math without the abstractness.."/>
<meta property="og:type" content="website"/>
<meta property="og:url" content="https://mlnma.now.sh/"/>
<meta property="og:title" content="MLNMA"/>
<meta property="og:description" content="A course, notebook, and blog about Machine Learning, Web Development, and Math without the abstractness.."/>
<meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"/>
<meta property="twitter:card" content="summary_large_image"/>
<meta property="twitter:url" content="https://mlnma.now.sh/"/>
<meta property="twitter:title" content="MLNMA"/>
<meta property="twitter:description" content="A course, notebook, and blog about Machine Learning, Web Development, and Math without the abstractness.."/>
<meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"></meta>

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
