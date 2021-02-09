import css from 'styled-jsx/css'

export default css.global`
  /* @import url('https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@300;700&family=Alegreya:wght@400;700&family=Montserrat:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap'); */
  /* @import url('https://fonts.googleapis.com/css2?family=Alegreya+Sans:ital,wght@0,100;0,300;0,400;0,500;0,700;0,800;0,900;1,100;1,300;1,400;1,500;1,700;1,800;1,900&family=Vollkorn:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'); */
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  /* begin bootstrap */
  $primary: hsl(243, 100%, 69%); // this is the color of the svg files
  $secondary: hsl(277, 15%, 44%);
  $success: hsl(159, 28%, 46%);
  $info: hsl(240, 33%, 25%);
  $warning: hsl(28, 60%, 55%);
  $danger: hsl(4, 90%, 58%);
  $light: hsl(51, 21%, 94%);
  $darker: hsla(51, 21%, 94%, 0.663);
  $dark: hsl(240, 33%, 25%);

  $custom-colors: (
    'darker': $darker,
  );

  @import 'node_modules/bootstrap/scss/functions';
  @import 'node_modules/bootstrap/scss/variables';
  @import 'node_modules/bootstrap/scss/mixins';

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
  /* $font-family-sans-serif:      'Montserrat', system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; */
  $font-weight-base: $font-weight-light;
  $body-color: hsl(
    243,
    100%,
    15%
  ); // same hue as the color theme but darker (avoid black!)
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
`