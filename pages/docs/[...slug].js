import React from 'react'

import { MDXRemote } from 'next-mdx-remote'

import 'highlight.js/styles/atom-one-dark-reasonable.css'

import Page from '@layouts/page'

import { getAllSlugs, getDoc } from '@lib/docs'

export const getStaticPaths = async () => {
  const slugs = await getAllSlugs('docs')
  const paths = slugs.map((slug) => ({ params: { slug: slug.split('/') } }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const { slug } = params
  const { mdx, meta } = await getDoc('docs', slug.join('/'))

  return {
    props: { mdx, meta },
  }
}

const DocPage = ({ mdx, meta }) => (
  <Page>
    <main data-page='docs/doc'>
      <h1>{meta.title}</h1>

      <MDXRemote {...mdx} />
    </main>
  </Page>
)

export default DocPage
