import path from 'path'
import fs from 'fs'

import matter from 'gray-matter'
import readingTime from 'reading-time'
import { sync } from 'glob'

import { serialize } from 'next-mdx-remote/serialize'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeHighlight from 'rehype-highlight'
import rehypeCodeTitles from 'rehype-code-titles'

export const getAllSlugs = async (dirName) => {
  const docsDir = path.join(process.cwd(), dirName)

  const paths = sync(`${docsDir}/**/*.mdx`)

  const slugs = paths.map((path) => {
    const slug = path
      .replace(docsDir, '')
      .replace(/\.mdx$/, '')
      .replace(/^\//, '')

    return slug
  })

  return slugs
}

export const getDoc = async (dirName, slug) => {
  const docsDir = path.join(process.cwd(), dirName)

  const postPath = path.join(docsDir, `${slug}.mdx`)
  const source = await fs.promises.readFile(postPath, 'utf8')

  const { content, data } = matter(source)
  const mdx = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            properties: { className: ['anchor'] },
          },
          { behaviour: 'wrap' },
        ],
        rehypeHighlight,
        rehypeCodeTitles,
      ],
    },
  })

  return {
    mdx,
    meta: {
      slug,
      readTime: Math.ceil(readingTime(source).minutes),
      ...data,
    },
  }
}

export const getAllDocs = async (dirName) => {
  const slugs = await getAllSlugs(dirName)
  const posts = slugs.map(async (slug) => await getDoc(dirName, slug))

  return await Promise.all(posts)
}

export const getAllDocsMeta = async (dirName) => {
  const posts = await getAllDocs(dirName)
  const metas = posts.map(({ meta }) => meta)

  return metas
}
