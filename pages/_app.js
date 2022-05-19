import React from 'react'

import { DefaultSeo } from 'next-seo'

import Layout from '@layouts/base'

import '@styles/main.scss'

const MainApp = ({ Component, pageProps }) => (
  <Layout>
    <DefaultSeo
      openGraph={{
        type: 'website',
        url: 'https://nextjs-starter.kevinrpb.me',
        locale: 'en_US',
        site_name: 'NextJS Starter',
        defaultTitle: 'NextJS Starter',
        titleTemplate: '%s',
        description: '',
        images: [
          {
            url: 'https://nextjs-starter.kevinrpb.me/icons/icon-512.png',
            width: 512,
            height: 512,
            alt: 'NextJS Starter',
          },
        ],
      }}
      twitter={{
        handle: '@kevinrpb',
        // site: '@',
        cardType: 'summary',
      }}
    />
    <Component {...pageProps} />
  </Layout>
)

export default MainApp
