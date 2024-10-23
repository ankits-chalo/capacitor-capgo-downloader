package ee.forgr.capacitor.plugin.downloader;

import android.content.Context;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.tonyodev.fetch2.Download;
import com.tonyodev.fetch2.Error;
import com.tonyodev.fetch2.Fetch;
import com.tonyodev.fetch2.FetchConfiguration;
import com.tonyodev.fetch2.FetchListener;
import com.tonyodev.fetch2.NetworkType;
import com.tonyodev.fetch2.Priority;
import com.tonyodev.fetch2.Request;
import org.jetbrains.annotations.NotNull;

@CapacitorPlugin(name = "CapacitorDownloader")
public class CapacitorDownloaderPlugin extends Plugin {

    private Fetch fetch;

    @Override
    public void load() {
        Context context = getContext();
        FetchConfiguration fetchConfiguration = new FetchConfiguration.Builder(context)
                .setDownloadConcurrentLimit(3)
                .build();
        fetch = Fetch.Impl.getInstance(fetchConfiguration);
    }

    @PluginMethod(returnType = PluginMethod.RETURN_PROMISE)
    public void download(PluginCall call) {
        String url = call.getString("url");
        String fileName = call.getString("fileName");

        if (url == null || fileName == null) {
            call.reject("URL and fileName are required");
            return;
        }

        String filePath = getContext().getFilesDir() + "/" + fileName;
        Request request = new Request(url, filePath);
        request.setPriority(Priority.HIGH);
        request.setNetworkType(NetworkType.ALL);

        fetch.enqueue(request, updatedRequest -> {
            call.setKeepAlive(true);
        }, error -> {
            call.reject("Failed to enqueue download: " + error.toString());
        });

        fetch.addListener(new FetchListener() {
            @Override
            public void onCompleted(@NotNull Download download) {
                JSObject ret = new JSObject();
                ret.put("path", download.getFile());
                call.resolve(ret);
            }

            @Override
            public void onError(@NotNull Download download, @NotNull Error error, @org.jetbrains.annotations.Nullable Throwable throwable) {
                call.reject("Download failed: " + error.toString());
            }

            @Override
            public void onProgress(@NotNull Download download, long etaInMilliSeconds, long downloadedBytesPerSecond) {
                // You can notify JS about progress here if needed
            }
        });
    }

    @Override
    protected void handleOnDestroy() {
        super.handleOnDestroy();
        fetch.close();
    }
}
