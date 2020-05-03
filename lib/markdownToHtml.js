import remark from 'remark'
import html from 'remark-html'
const math = require('remark-math')
const htmlKatex = require('remark-html-katex')


export default async function markdownToHtml(markdown) {
  console.log(markdown)
  var md = require('markdown-it')({
    html: true,
    linkify: true,
    typographer: true
  });

  const result = md.render(markdown)
  console.log(result)
  return result
}
