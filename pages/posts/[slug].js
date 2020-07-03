// import { useRouter } from 'next/router'
// import ErrorPage from 'next/error'
// import Container from '../../components/container'
// import PostBody from '../../components/post-body'
// import Header from '../../components/header'
// import PostHeader from '../../components/post-header'
// import Layout from '../../components/layout'
// import PostTitle from '../../components/post-title'
// import Head from 'next/head'
// import markdownStyles from '../../components/markdown-styles.module.css'
// const katexConv = require("showdown-katex")
// import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
// const showdownHighlight = require("showdown-highlight")

// export default function Post({ post, morePosts, preview, slugs, posts }) {
//   const router = useRouter()
//   if (!router.isFallback && !post?.slug) {
//     return <ErrorPage statusCode={404} />
//   }

//   console.log(post.emoji)
//   return (
//     <Layout preview={preview}>
//       <Container>
//         <Header />
//         {router.isFallback ? (
//           <PostTitle>Loading…</PostTitle>
//         ) : (
//             <>
//               <article className="mb-32">
//                 <Head>
//                   <title>
//                     MLNMA.
//                   </title>
//                   <meta property="og:image" content={post.ogImage.url} />
//                 </Head>
//                 <PostHeader
//                   title={post.title}
//                   coverImage={post.coverImage}
//                   date={post.date}
//                   author={post.author}
//                   excerpt={post.excerpt}
//                   emoji={post.emoji}
//                 />
//                 <div className="max-w-3xl mx-auto">
//                   <div
//                     className={markdownStyles['markdown']}
//                     dangerouslySetInnerHTML={{ __html: post.content }}
//                   />
//                   <div className="bg-black text-white dark-mode:bg-white dark-mode:text-black px-12 py-28 flex flex-col lg:flex-row items-center">
//                     <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
//                       That's the end!
//                     </h3>
//                     <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
//                       {
//                         slugs.indexOf(post.slug) !== 0 && (
//                           <a
//                             href={`/posts/${slugs[slugs.indexOf(post.slug) - 1]}`}
//                             className="mx-3 font-bold hover:underline text-black "
//                           >
//                             <FiArrowLeft />{posts[slugs.indexOf(post.slug) - 1].title}
//                           </a>
//                         )
//                       }

//                       {
//                         slugs.indexOf(post.slug) !== slugs.length-1 && (
//                           <a
//                             href={`/posts/${slugs[slugs.indexOf(post.slug) + 1]}`}
//                             className=" mx-3 border border-black font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
//                           >
//                             <FiArrowRight />
//                             Next: {posts[slugs.indexOf(post.slug) + 1].title}
//                           </a>
//                         )
//                       }

//                     </div>
//                   </div>
//                 </div>
//               </article>
//             </>
//           )}
//       </Container>
//     </Layout>
//   )
// }

// export async function getStaticProps({ params }) {
//   const { getPostBySlug, getAllPosts } = require('../api/api')

//   let post = await getPostBySlug(params.slug, ["title","date","slug","author","content","ogImage","coverImage", "excerpt", "emoji"])

//   console.log(post)

//   let slugs = await getAllPosts(['slug']).map(e => e.slug)
//   let posts = await getAllPosts(["title","date","slug","author","content","ogImage","coverImage", "excerpt", "emoji"])

//   console.log(slugs)

//   const classMap = {
//     a: "hover:bg-white hover:text-black dark-mode:hover:bg-black dark-mode:hover:text-white bg-black text-white dark-mode:bg-white dark-mode:text-black rounded px-1"
//   }
  
//   const bindings = Object.keys(classMap)
//     .map(key => ({
//       type: 'output',
//       regex: new RegExp(`<${key}(.*)>`, 'g'),
//       replace: `<${key} class="${classMap[key]}" $1>`
//     }));

  
//   let toc = []

//   function _defineProperty(obj, key, value) {
//     if (key in obj) {
//       Object.defineProperty(obj, key, {
//         value: value,
//         enumerable: true,
//         configurable: true,
//         writable: true
//       });
//     } else {
//       obj[key] = value;
//     }
  
//     return obj;
//   }
  
//   function ownKeys(object, enumerableOnly) {
//     var keys = Object.keys(object);
  
//     if (Object.getOwnPropertySymbols) {
//       var symbols = Object.getOwnPropertySymbols(object);
//       if (enumerableOnly) symbols = symbols.filter(function (sym) {
//         return Object.getOwnPropertyDescriptor(object, sym).enumerable;
//       });
//       keys.push.apply(keys, symbols);
//     }
  
//     return keys;
//   }
  
//   function _objectSpread2(target) {
//     for (var i = 1; i < arguments.length; i++) {
//       var source = arguments[i] != null ? arguments[i] : {};
  
//       if (i % 2) {
//         ownKeys(source, true).forEach(function (key) {
//           _defineProperty(target, key, source[key]);
//         });
//       } else if (Object.getOwnPropertyDescriptors) {
//         Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
//       } else {
//         ownKeys(source).forEach(function (key) {
//           Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
//         });
//       }
//     }
  
//     return target;
//   }
  
//   function showdownToc() {
//     var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
//         toc = _ref.toc;
  
//     return function () {
//       return [{
//         type: 'output',
//         filter: function filter(source) {
//           var regex = /(<h([1-6]).*?id="([^"]*?)".*?>(.+?)<\/h[1-6]>)|(<p>\[toc\]<\/p>)/g; // find and collect all headers and [toc] node;
  
//           var collection = [];
//           source.replace(regex, function (wholeMatch, _, level, anchor, text) {
//             if (wholeMatch === '<p>[toc]</p>') {
//               collection.push({
//                 type: 'toc'
//               });
//             } else {
//               text = text.replace(/<[^>]+>/g, '');
//               var tocItem = {
//                 anchor: anchor,
//                 level: Number(level),
//                 text: text
//               };
  
//               if (toc) {
//                 toc.push(tocItem);
//               }
  
//               collection.push(_objectSpread2({
//                 type: 'header'
//               }, tocItem));
//             }
  
//             return '';
//           }); // calculate toc info
  
//           var tocCollection = [];
//           collection.forEach(function (_ref2, index) {
//             var type = _ref2.type;
  
//             if (type === 'toc') {
//               if (collection[index + 1] && collection[index + 1].type === 'header') {
//                 var headers = [];
//                 var levelToToc = collection[index + 1].level;
  
//                 for (var i = index + 1; i < collection.length; i++) {
//                   if (collection[i].type === 'toc') break;
//                   var level = collection[i].level;
  
//                   if (level === levelToToc) {
//                     headers.push(collection[i]);
//                   }
//                 }
  
//                 tocCollection.push(headers);
//               } else {
//                 tocCollection.push([]);
//               }
//             }
//           }); // replace [toc] node in source
  
//           source = source.replace(/<p>\[toc\]<\/p>[\n]*/g, function () {
//             var headers = tocCollection.shift();
  
//             if (headers && headers.length) {
//               var str = "<ol>".concat(headers.map(function (_ref3, index) {
//                 var text = _ref3.text,
//                     anchor = _ref3.anchor;
//                 return `<li>${index+1}: <a class='hover:bg-white hover:text-black dark-mode:hover:bg-black dark-mode:hover:text-white bg-black text-white dark-mode:bg-white dark-mode:text-black rounded px-1' href=\"#`.concat(anchor, "\">").concat(text, "</a></li>");
//               }).join(''), "</ol>\n");
//               return str;
//             }
  
//             return '';
//           });
//           return source;
//         }
//       }];
//     };
//   }

//   var showdown = require('showdown'),
//     converter = new showdown.Converter({
//       extensions: [
//         katexConv({
//           displayMode: true,
//           throwOnError: false, // allows katex to fail silently
//           errorColor: '#ff0000',
//           delimiters: [
//             { left: "$$", right: "$$", display: false },
//             { left: '~', right: '~', display: false, asciimath: false },
//           ],
//         }),
//         showdownHighlight,
//         showdownToc({toc}),
//         ...bindings,
        
//       ]
//     })

    

    
//     const content = await converter.makeHtml(post.content);
//     console.log(toc)

//   return {
//     props: {
//       post: {
//         ...post,
//         content,
//       },
//       slugs,
//       posts
//     },
//   }
// }

// export async function getStaticPaths(context) {
//   const { getAllPosts } = require('../api/api')

//   const posts = await getAllPosts(["slug"])

//   return {
//     paths: posts.map(posts => {
//       return {
//         params: {
//           slug: posts.slug,
//         },
//       }
//     }),
//     fallback: false,
//   }
// }

import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import markdownStyles from '../../components/markdown-styles.module.css'
const katexConv = require("showdown-katex")
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { usePalette } from 'react-palette'
const showdownHighlight = require("showdown-highlight")

export default function Post({ post, morePosts, preview, slugs, posts }) {
  const { data, loading, err } = usePalette(post.coverImage);

  console.log(post.coverImage)

  console.log(data.darkMuted)
  console.log(post)
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  /*bg-black text-white dark-mode:bg-white dark-mode:text-black */

  console.log(post.emoji)
  return (
    <div style={{
      backgroundColor: data.darkMuted,
      color: data.lightVibrant
    }}>
      <Layout preview={preview}>
        <Container>
          <Header />
          {router.isFallback || loading ? (
            <PostTitle>Loading…</PostTitle>
          ) : (
              <>
                <article className="mb-32">
                  <Head>
                    <title>
                      Hackagotchi
                  </title>
                    <meta property="og:image" content={post.ogImage.url} />
                  </Head>
                  <PostHeader
                    title={post.title}
                    coverImage={post.coverImage}
                    date={post.date}
                    author={post.author}
                    excerpt={post.excerpt}
                    emoji={post.emoji}
                  />
                  <div className="max-w-3xl mx-auto">
                    <div
                      className={markdownStyles['markdown']}
                      dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                    <div style={{
                      color: data.darkMuted,
                      backgroundColor: data.lightVibrant
                    }} className=" px-12 py-28 flex flex-col lg:flex-row items-center">
                      <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
                        That's the end!
                    </h3>
                      <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
                        {
                          slugs.indexOf(post.slug) !== 0 && (
                            <a
                              href={`/posts/${slugs[slugs.indexOf(post.slug) - 1]}`}
                              className="mx-3 font-bold hover:underline "
                            >
                              <FiArrowLeft />{posts[slugs.indexOf(post.slug) - 1].title}
                            </a>
                          )
                        }

                        {
                          slugs.indexOf(post.slug) !== slugs.length - 1 && (
                            <a
                              href={`/posts/${slugs[slugs.indexOf(post.slug) + 1]}`}
                              style={{
                                borderColor: data.darkMuted
                              }}
                              className=" mx-3 border font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
                            >
                              <FiArrowRight />
                            Next: {posts[slugs.indexOf(post.slug) + 1].title}
                            </a>
                          )
                        }

                      </div>
                    </div>
                  </div>
                </article>
              </>
            )}
        </Container>
      </Layout>
    </div>
  )
}

export async function getStaticProps({ params }) {
  const { getPostBySlug, getAllPosts } = require('../api/api')

  let post = await getPostBySlug(params.slug, ["title", "date", "slug", "author", "content", "ogImage", "coverImage", "excerpt", "emoji"])

  console.log(post)

  let slugs = await getAllPosts(['slug']).map(e => e.slug)
  let posts = await getAllPosts(["title", "date", "slug", "author", "content", "ogImage", "coverImage", "excerpt", "emoji"])

  console.log(slugs)

  const classMap = {
    // a: "hover:bg-white hover:text-black dark-mode:hover:bg-black dark-mode:hover:text-white bg-black text-white dark-mode:bg-white dark-mode:text-black rounded px-1"
    h4: "italic text-lg"
  }

  const bindings = Object.keys(classMap)
    .map(key => ({
      type: 'output',
      regex: new RegExp(`<${key}(.*)>`, 'g'),
      replace: `<${key} class="${classMap[key]}" $1>`
    }));


  let toc = []

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(source, true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(source).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function showdownToc() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      toc = _ref.toc;

    return function () {
      return [{
        type: 'output',
        filter: function filter(source) {
          var regex = /(<h([1-6]).*?id="([^"]*?)".*?>(.+?)<\/h[1-6]>)|(<p>\[toc\]<\/p>)/g; // find and collect all headers and [toc] node;

          var collection = [];
          source.replace(regex, function (wholeMatch, _, level, anchor, text) {
            if (wholeMatch === '<p>[toc]</p>') {
              collection.push({
                type: 'toc'
              });
            } else {
              text = text.replace(/<[^>]+>/g, '');
              var tocItem = {
                anchor: anchor,
                level: Number(level),
                text: text
              };

              if (toc) {
                toc.push(tocItem);
              }

              collection.push(_objectSpread2({
                type: 'header'
              }, tocItem));
            }

            return '';
          }); // calculate toc info

          var tocCollection = [];
          collection.forEach(function (_ref2, index) {
            var type = _ref2.type;

            if (type === 'toc') {
              if (collection[index + 1] && collection[index + 1].type === 'header') {
                var headers = [];
                var levelToToc = collection[index + 1].level;

                for (var i = index + 1; i < collection.length; i++) {
                  if (collection[i].type === 'toc') break;
                  var level = collection[i].level;

                  if (level === levelToToc) {
                    headers.push(collection[i]);
                  }
                }

                tocCollection.push(headers);
              } else {
                tocCollection.push([]);
              }
            }
          }); // replace [toc] node in source

          source = source.replace(/<p>\[toc\]<\/p>[\n]*/g, function () {
            var headers = tocCollection.shift();

            if (headers && headers.length) {
              var str = "<ol>".concat(headers.map(function (_ref3, index) {
                var text = _ref3.text,
                  anchor = _ref3.anchor;
                return `<li>${index + 1}: <a class='' href=\"#`.concat(anchor, "\">").concat(text, "</a></li>");
              }).join(''), "</ol>\n");
              return str;
            }

            return '';
          });
          return source;
        }
      }];
    };
  }

  var showdown = require('showdown'),
    converter = new showdown.Converter({
      extensions: [
        katexConv({
          displayMode: true,
          throwOnError: false, // allows katex to fail silently
          errorColor: '#ff0000',
          delimiters: [
            { left: "$$", right: "$$", display: false },
            { left: '~', right: '~', display: false, asciimath: false },
          ],
        }),
        showdownHighlight,
        showdownToc({ toc }),
        ...bindings,

      ],
      tables: true
    })




  const content = await converter.makeHtml(post.content);
  console.log(toc)

  return {
    props: {
      post: {
        ...post,
        content,
      },
      slugs,
      posts
    },
  }
}

export async function getStaticPaths(context) {
  const { getAllPosts } = require('../api/api')

  const posts = await getAllPosts(["slug"])

  return {
    paths: posts.map(posts => {
      return {
        params: {
          slug: posts.slug,
        },
      }
    }),
    fallback: false,
  }
}
