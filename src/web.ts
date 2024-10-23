import { WebPlugin } from '@capacitor/core';

import type { CapacitorDownloaderPlugin } from './definitions';

export class CapacitorDownloaderWeb extends WebPlugin implements CapacitorDownloaderPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
