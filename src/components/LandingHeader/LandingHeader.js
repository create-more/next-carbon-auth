'use client'

import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
} from '@carbon/react';
import {
  Switcher,
  Notification,
  UserAvatar,
} from '@carbon/icons-react';

import Link from 'next/link';

const LandingHeader = () => (
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <Header aria-label="Base Carbon Auth">
          <SkipToContent />
          <HeaderMenuButton
            aria-label="Open menu"
            onClick={onClickSideNavExpand}
            isActive={isSideNavExpanded}
          />
          <Link href="/" passHref legacyBehavior>
            <HeaderName prefix="createmore.io">
              Base Carbon Auth
            </HeaderName>
          </Link>     
           <HeaderNavigation aria-label="Base Carbon Auth">
              <Link href="/about" passHref legacyBehavior>
                <HeaderMenuItem >
                  About
                </HeaderMenuItem>
              </Link>
            </HeaderNavigation>
            <SideNav
              aria-label="Side navigation"
              expanded={isSideNavExpanded}
              isPersistent={false}>
              <SideNavItems>
              <HeaderSideNavItems>
                <Link href="/about" passHref legacyBehavior>
                  <HeaderMenuItem >
                    About
                  </HeaderMenuItem>
                </Link>
              </HeaderSideNavItems>
              </SideNavItems>
            </SideNav>
            <HeaderGlobalBar>
              <HeaderGlobalAction
                aria-label="Notifications"
                tooltipAlignment="center">
                <Notification size={20} />
              </HeaderGlobalAction>
              <HeaderGlobalAction
                aria-label="User Avatar"
                tooltipAlignment="center">
                <UserAvatar size={20} />
              </HeaderGlobalAction>
              <HeaderGlobalAction aria-label="App Switcher" tooltipAlignment="end">
                <Switcher size={20} />
              </HeaderGlobalAction>
            </HeaderGlobalBar>
        </Header>
      )}
    />
);

export default LandingHeader;
