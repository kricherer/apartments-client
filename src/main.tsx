// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App.tsx';
// import './index.css';
// import { CssVarsProvider } from '@mui/joy';
// import theme from './theme.ts';

// const siteLanguage = import.meta.env.VITE_SITE_LANGUAGE;
// if (siteLanguage === 'HEB') {
//   document.documentElement.setAttribute('dir', 'rtl');
// }

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <CssVarsProvider theme={theme}>
//       <App />
//     </CssVarsProvider>
//   </React.StrictMode>
// );

import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createRouter } from '@tanstack/react-router';

import './index.css';
import { CssVarsProvider } from '@mui/joy';
import theme from './theme.ts';

const siteLanguage = import.meta.env.VITE_SITE_LANGUAGE;
if (siteLanguage === 'HEB') {
  document.documentElement.setAttribute('dir', 'rtl');
}

// Import the generated route tree
import { routeTree } from './routeTree.gen';

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

// Render the app
const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <CssVarsProvider theme={theme}>
        <RouterProvider router={router} />
      </CssVarsProvider>
    </StrictMode>
  );
}
