// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "CapgoCapacitorDownloader",
    platforms: [.iOS(.v13)],
    products: [
        .library(
            name: "CapgoCapacitorDownloader",
            targets: ["CapacitorDownloaderPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", branch: "main"),
        .package(url: "https://github.com/mzeeshanid/MZDownloadManager.git", from: "3.3.0")
    ],
    targets: [
        .target(
            name: "CapacitorDownloaderPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm"),
                "MZDownloadManager"
            ],
            path: "ios/Sources/CapacitorDownloaderPlugin"),
        .testTarget(
            name: "CapacitorDownloaderPluginTests",
            dependencies: ["CapacitorDownloaderPlugin"],
            path: "ios/Tests/CapacitorDownloaderPluginTests")
    ]
)
