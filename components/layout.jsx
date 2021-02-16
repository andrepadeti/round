import { useState } from 'react'

import Context from '../context/context'
import Footer from './footer'
import Navigation from './navbar'
import ContactModal from './modal'

// begin font awesome initialization
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css'
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false /* eslint-disable import/first */

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
  faHeartBroken,
  faEnvelope,
  faBuilding,
  faPhone,
  faBars,
  faTimes,
} from '@fortawesome/free-solid-svg-icons'
library.add(
  faHeartBroken,
  faEnvelope,
  faBuilding,
  faPhone,
  faBars,
  faTimes,
  fab
)
// end font awesome initialization

export default function Layout({ children, page }) {
  const [modal, setModal] = useState({ show: false, message: [] })
  return (
    <>
      <Context.Provider value={{ modal, setModal }}>
        <ContactModal />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </Context.Provider>
      <style jsx global>
        {``}
      </style>
    </>
  )
}
