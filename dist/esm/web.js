import { WebPlugin } from '@capacitor/core';
export class CapacitorDownloaderWeb extends WebPlugin {
    async download(options) {
        console.log('DOWNLOAD', options);
        throw new Error('Method not implemented.');
    }
    async pause(id) {
        console.log('PAUSE', id);
        throw new Error('Method not implemented.');
    }
    async resume(id) {
        console.log('RESUME', id);
        throw new Error('Method not implemented.');
    }
    async stop(id) {
        console.log('STOP', id);
        throw new Error('Method not implemented.');
    }
    async checkStatus(id) {
        console.log('CHECK STATUS', id);
        throw new Error('Method not implemented.');
    }
    async getFileInfo(path) {
        console.log('GET FILE INFO', path);
        throw new Error('Method not implemented.');
    }
}
//# sourceMappingURL=web.js.map