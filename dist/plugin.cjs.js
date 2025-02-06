'use strict';

var core = require('@capacitor/core');

const CapacitorDownloader = core.registerPlugin('CapacitorDownloader', {
    web: () => Promise.resolve().then(function () { return web; }).then((m) => new m.CapacitorDownloaderWeb()),
});

class CapacitorDownloaderWeb extends core.WebPlugin {
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

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    CapacitorDownloaderWeb: CapacitorDownloaderWeb
});

exports.CapacitorDownloader = CapacitorDownloader;
//# sourceMappingURL=plugin.cjs.js.map
