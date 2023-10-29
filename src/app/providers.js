'use client'

import { Content, Theme } from '@carbon/react';

import LandingHeader from '@/components/LandingHeader/LandingHeader';

export function Providers({ children }) {
  return (
    <div>
        <Theme theme="g100">
          <LandingHeader />
        </Theme>
        <Content>
          {children}
        </Content>
    </div>
  )
}