import { getPostBySlug } from '../api'

export default (req, res) => {

  const {
      query: { slug, fields }
  } = req

  const items = getPostBySlug(slug, fields.split(","))

  res.end(JSON.stringify(items))
}