import { WebPlugin } from '@capacitor/core';

import type { CapacitorDownloaderPlugin } from './definitions';

export class CapacitorDownloaderWeb extends WebPlugin implements CapacitorDownloaderPlugin {
  async download(options: { url: string; fileName: string }): Promise<{ path: string }> {
    console.log('DOWNLOAD', options);
    return { path: options.fileName };
  }
}
