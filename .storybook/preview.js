import { RouterContext } from 'next/dist/shared/lib/router-context'; // next 12
// import { RouterContext } from "next/dist/shared/lib/router-context"; // next 11.1
// import { RouterContext } from "next/dist/next-server/lib/router-context"; // next < 11.1

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
      nextRouter: {
        Provider: RouterContext.Provider,
      },
    },
  },
};

export default preview;

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// import '/src/index.scss';

// Only import this if you want to use Bootstrap's
// JQuery helpers
import 'bootstrap/dist/js/bootstrap.bundle';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: true,
    hideNoControlsWarning: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

import { withThemeByDataAttribute } from '@storybook/addon-styling';

// snipped for brevity

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
    attributeName: 'data-bs-theme',
  }),
];
