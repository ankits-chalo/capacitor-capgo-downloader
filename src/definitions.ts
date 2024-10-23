export interface CapacitorDownloaderPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
