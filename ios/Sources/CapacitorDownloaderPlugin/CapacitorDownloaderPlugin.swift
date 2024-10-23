import Foundation
import Capacitor
import MZDownloadManager

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(CapacitorDownloaderPlugin)
public class CapacitorDownloaderPlugin: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "CapacitorDownloaderPlugin"
    public let jsName = "CapacitorDownloader"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "download", returnType: CAPPluginReturnPromise)
    ]
    private var downloadManager: MZDownloadManager?

    override public func load() {
        downloadManager = MZDownloadManager(session: URLSession.shared, delegate: self)
    }

    @objc func download(_ call: CAPPluginCall) {
        guard let url = call.getString("url"),
              let fileName = call.getString("fileName") else {
            call.reject("URL and fileName are required")
            return
        }

        let documentsPath = FileManager.default.urls(for: .documentDirectory, in: .userDomainMask)[0]
        let destinationPath = documentsPath.appendingPathComponent(fileName).path

        downloadManager?.addDownloadTask(url, fileName: fileName, destinationPath: destinationPath)
        call.keepAlive = true
    }
}

extension CapacitorDownloaderPlugin: MZDownloadManagerDelegate {
    public func downloadRequestDidUpdateProgress(_ downloadModel: MZDownloadModel, index: Int) {
        // You can notify JS about progress here if needed
    }

    public func downloadRequestDidFinishDownloading(_ downloadModel: MZDownloadModel, index: Int) {
        if let call = bridge?.savedCall(withID: "download") {
            call.resolve(["path": downloadModel.destinationPath])
            bridge?.releaseCall(call)
        }
    }

    public func downloadRequestDidFailedWithError(_ error: NSError, downloadModel: MZDownloadModel, index: Int) {
        if let call = bridge?.savedCall(withID: "download") {
            call.reject(error.localizedDescription)
            bridge?.releaseCall(call)
        }
    }
}
