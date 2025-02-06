import { WebPlugin } from '@capacitor/core';
import type { CapacitorDownloaderPlugin, DownloadTask, DownloadOptions } from './definitions';
export declare class CapacitorDownloaderWeb extends WebPlugin implements CapacitorDownloaderPlugin {
    download(options: DownloadOptions): Promise<DownloadTask>;
    pause(id: string): Promise<void>;
    resume(id: string): Promise<void>;
    stop(id: string): Promise<void>;
    checkStatus(id: string): Promise<DownloadTask>;
    getFileInfo(path: string): Promise<{
        size: number;
        type: string;
    }>;
}
