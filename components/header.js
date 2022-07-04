import React from 'react'

import SaneLink from '@components/link'
import Icon from '@components/icon'

const Header = () => (
  <header>
    <SaneLink href='/'>
      <h1>NextJS Starter</h1>
    </SaneLink>

    <nav>
      <SaneLink href='/docs'>
        <Icon name='heart' /> Docs
      </SaneLink>

      <SaneLink href='https://github.com/kevinrpb/nextjs-starter'>
        <Icon name='github' /> See on GitHub
      </SaneLink>
    </nav>
  </header>
)

export default Header
