import React from 'react'

import Image from 'next/future/image'
// import ExportedImage from 'next-image-export-optimizer'

import Page from '@layouts/page'

import cats from '@img/cats.jpeg'

const Home = () => (
  <Page>
    <main>
      <article>
        <h1>NextJS Starter</h1>

        <Image src={cats} alt='A picture of two cats' width='768' height='1024' />
      </article>
    </main>
  </Page>
)

export default Home
