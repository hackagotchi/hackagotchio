import fs from 'fs'
import { getAllPosts } from './api'

export default (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')

    const fields = [
      'title',
      'date',
      'slug',
      'author',
      'coverImage',
      'excerpt',
    ]

    res.end(JSON.stringify(getAllPosts(fields)))

}