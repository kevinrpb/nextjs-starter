import React from 'react'

import Head from 'next/head'
import { NextSeo } from 'next-seo'

import Header from '@components/header'

export default function Page({ title, children }) {
  const _title = title ?? 'NextJS Starter'

  return (
    <>
      <Head>
        <title>{_title}</title>
      </Head>

      <NextSeo
        openGraph={{
          title: _title,
        }}
      />

      <Header />

      {children}
    </>
  )
}
