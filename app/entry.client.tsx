import { RemixBrowser } from '@remix-run/react';
import { startTransition } from 'react';
import { hydrateRoot } from 'react-dom/client';

// URL credentials are now cleaned at the server level
startTransition(() => {
  hydrateRoot(document.getElementById('root')!, <RemixBrowser />);
});
