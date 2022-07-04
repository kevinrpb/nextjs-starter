import React from 'react'

import Page from '@layouts/page'
import SaneLink from '@components/link'

import { getAllDocsMeta } from '@lib/docs'

export const getStaticProps = async () => {
  const docs = await getAllDocsMeta('docs')

  return {
    props: { docs },
  }
}

const DocItem = ({ slug, title }) => (
  <SaneLink href={`/docs/${slug}`}>
    <article>
      <h1>{title}</h1>
    </article>
  </SaneLink>
)

const DocsHome = ({ docs }) => (
  <Page>
    <main data-page='docs'>
      {docs.map((meta) => (
        <DocItem key={meta.slug} {...meta} />
      ))}
    </main>
  </Page>
)

export default DocsHome
