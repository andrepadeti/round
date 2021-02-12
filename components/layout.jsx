import { useState } from 'react'

import globalStyles from '../styles/global'

import Context from '../context/context'
import Head from 'next/head'
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
        {`
          /* @import url('https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@300;700&family=Alegreya:wght@400;700&family=Montserrat:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap'); */
          @import url('https://fonts.googleapis.com/css2?family=Alegreya+Sans:ital,wght@0,100;0,300;0,400;0,500;0,700;0,800;0,900;1,100;1,300;1,400;1,500;1,700;1,800;1,900&display=swap');
          /* @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap'); */
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

          /* begin bootstrap */
          $primary: hsl(243, 100%, 69%);
          $secondary: hsl(277, 15%, 44%);
          $success: hsl(159, 28%, 46%);
          $info: hsl(240, 33%, 25%);
          $warning: hsl(28, 60%, 55%);
          $danger: hsl(4, 90%, 58%);
          $light: hsl(51, 21%, 94%);
          $dark: hsl(240, 33%, 25%);

          @import 'node_modules/bootstrap/scss/functions';
          @import 'node_modules/bootstrap/scss/variables';
          @import 'node_modules/bootstrap/scss/mixins';

          // $lighter: hsl(51, 21%, 96%);
          $darker: hsla(51, 21%, 94%, 0.663);

          $custom-colors: (
            'lighter': hsl(51, 21%, 96%),
            'darker': hsla(51, 21%, 94%, 0.663),
          );

          $spacers: (
            0: 0,
            1: $spacer / 4,
            2: $spacer / 2,
            3: $spacer,
            4: $spacer * 1.5,
            5: $spacer * 3,
            6: $spacer * 6,
            7: $spacer * 12,
          );

          $theme-colors: map-merge($theme-colors, $custom-colors);

          $font-sizes: (
            1: $h1-font-size,
            2: $h2-font-size,
            3: $h3-font-size,
            4: $h4-font-size,
            5: $h5-font-size,
            6: $h6-font-size,
            7: 0.875rem,
          );

          $font-family-sans-serif: 'Inter', sans-serif, system-ui;
          $font-weight-base: $font-weight-light;
          // same hue as the color theme but darker (avoid black!):
          $body-color: hsl(243, 100%, 12%);
          $body-bg: $light;

          @import 'node_modules/bootstrap/scss/bootstrap.scss';
          /* end bootstrap */

          body {
            max-width: 900px;
            margin: 0 auto;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: 'Montserrat', sans-serif;
            color: $primary;
          }

          .white-space {
            &-top {
              margin-top: 7rem;
            }
            &-bottom {
              margin-bottom: 7rem; // error
            }
          }

          .btn-primary {
            @include button-variant(
              $background: $primary,
              $border: $primary,
              $color: $light,
              $hover-color: $light
            );
            font-weight: 600;
          }

          .btn-outline-primary {
            @include button-outline-variant(
              $color: $primary,
              $color-hover: $light,
              $active-color: $light
            );
            font-weight: 600;
          }

          .container-small {
            @include make-container();
            max-width: 600px;
          }
        `}
      </style>
    </>
  )
}
