// @ts-expect-error ts-migrate(1259) FIXME: Module '"/Users/Kutsan/Projects/soyaendustriyel/no... Remove this comment to see the full error message
import React from 'react'

// @ts-expect-error ts-migrate(2792) FIXME: Cannot find module '@/components/Header/Header.jsx... Remove this comment to see the full error message
import Header from '@/components/Header/Header.jsx'
// @ts-expect-error ts-migrate(2792) FIXME: Cannot find module '@/components/Footer/Footer.jsx... Remove this comment to see the full error message
import Footer from '@/components/Footer/Footer.jsx'
// @ts-expect-error ts-migrate(2792) FIXME: Cannot find module '@/components/NavbarDesktop/Nav... Remove this comment to see the full error message
import NavbarDesktop from '@/components/NavbarDesktop/NavbarDesktop.jsx'
// @ts-expect-error ts-migrate(2792) FIXME: Cannot find module '@/components/NavbarMobile/Navb... Remove this comment to see the full error message
import NavbarMobile from '@/components/NavbarMobile/NavbarMobile.jsx'

// @ts-expect-error ts-migrate(2792) FIXME: Cannot find module '@/hooks/use-viewport.js'. Did ... Remove this comment to see the full error message
import useViewport from '@/hooks/use-viewport.js'

type Props = {
    children: React.ReactNode;
    history: any;
};

const LayoutDefault = ({ children }: Props) => {
  const { width } = useViewport()
  const breakpoint = 768

  return (
    <>
      <Header />

      <nav>{width > breakpoint ? <NavbarDesktop /> : <NavbarMobile />}</nav>

      <main>{children}</main>

      <Footer />
    </>
  )
}

export default LayoutDefault
