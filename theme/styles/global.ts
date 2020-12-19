import { css } from '@emotion/core';

import theme from '..';

export default css`
  &::selection {
  }

  html {
    background: ${theme.colors.white};
  }

  body {
    background: ${theme.colors.white};
    font-family: ${theme.fonts.sans};
  }

  b,
  strong {
    font-weight: ${theme.weights.bold};
  }

  code {
    font-family: ${theme.fonts.monospace};
  }

  /* remove drift widget on mobile */

  ${theme.medias.lteMedium} {
    .drift-conductor-item iframe,
    .drift-frame-controller {
      display: none !important;
    }
  }
`;
