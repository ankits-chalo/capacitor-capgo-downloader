import { registerPlugin } from '@capacitor/core';

import type { CapacitorDownloaderPlugin } from './definitions';

const CapacitorDownloader = registerPlugin<CapacitorDownloaderPlugin>('CapacitorDownloader', {
  web: () => import('./web').then((m) => new m.CapacitorDownloaderWeb()),
});

export * from './definitions';
export { CapacitorDownloader };
