import React from 'react'

import ExportedImage from 'next-image-export-optimizer'

import Page from '@layouts/page'

import cats from '@img/cats.jpeg'

const Home = () => (
  <Page>
    <main>
      <article>
        <h1>NextJS Starter</h1>

        <ExportedImage src={cats} alt='A picture of two cats' layout='raw' />
      </article>
    </main>
  </Page>
)

export default Home
