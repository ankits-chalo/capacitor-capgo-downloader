export interface CapacitorDownloaderPlugin {
  download(options: { url: string; fileName: string }): Promise<{ path: string }>;
}
