import type { LinksFunction } from '@remix-run/node';
import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration, useRouteError } from '@remix-run/react';

import './styles/app.css';

export const links: LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous'
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap'
  }
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' data-theme='dark'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1' />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

// ErrorBoundary
export function ErrorBoundary() {
  const error = useRouteError();

  console.error(error);

  if (isRouteErrorResponse(error)) {
    return (
      <html lang='en'>
        <head>
          <title>{error.status} {error.statusText}</title>
          <Meta />
          <Links />
        </head>
        <body>
          <h1>{error.status} - {error.statusText}</h1>
          <p>{error.data?.message || '404 page!'}</p>
          <Scripts />
        </body>
      </html>
    );
  }

  if (error instanceof Error) {
    return (
      <html lang='en'>
        <head>
          <title>Application Error</title>
          <Meta />
          <Links />
        </head>
        <body>
          <h1>Application Error</h1>
          <p>{error.message}</p>
          {process.env.NODE_ENV === 'development' && <pre style={{ whiteSpace: 'pre-wrap' }}>{error.stack}</pre>}
          <Scripts />
        </body>
      </html>
    );
  }

  return (
    <html lang='en'>
      <head>
        <title>Unknown Error</title>
        <Meta />
        <Links />
      </head>
      <body>
        <h1>Unknown Error</h1>
        <p>An unexpected error occurred.</p>
        <Scripts />
      </body>
    </html>
  );
}
