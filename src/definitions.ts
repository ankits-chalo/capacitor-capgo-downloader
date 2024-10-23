export interface CapacitorDownloaderPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  download(options: { url: string; fileName: string }): Promise<{ path: string }>;
}
