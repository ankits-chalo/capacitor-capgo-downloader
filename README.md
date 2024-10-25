# @capgo/capacitor-downloader
 <a href="https://capgo.app/"><img src='https://raw.githubusercontent.com/Cap-go/capgo/main/assets/capgo_banner.png' alt='Capgo - Instant updates for capacitor'/></a>

<div align="center">
  <h2><a href="https://capgo.app/?ref=plugin"> ➡️ Get Instant updates for your App with Capgo 🚀</a></h2>
  <h2><a href="https://capgo.app/consulting/?ref=plugin"> Fix your annoying bug now, Hire a Capacitor expert 💪</a></h2>
</div>


Download file in background or foreground

WIP: the plugin is not yet ready for production

## Install

```bash
npm install @capgo/capacitor-downloader
npx cap sync
```

## API

<docgen-index>

* [`download(...)`](#download)
* [`pause(...)`](#pause)
* [`resume(...)`](#resume)
* [`stop(...)`](#stop)
* [`checkStatus(...)`](#checkstatus)
* [`getFileInfo(...)`](#getfileinfo)
* [`addListener('downloadProgress', ...)`](#addlistenerdownloadprogress-)
* [`addListener('downloadCompleted', ...)`](#addlistenerdownloadcompleted-)
* [`addListener('downloadFailed', ...)`](#addlistenerdownloadfailed-)
* [`removeAllListeners()`](#removealllisteners)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### download(...)

```typescript
download(options: DownloadOptions) => any
```

| Param         | Type                                                        |
| ------------- | ----------------------------------------------------------- |
| **`options`** | <code><a href="#downloadoptions">DownloadOptions</a></code> |

**Returns:** <code>any</code>

--------------------


### pause(...)

```typescript
pause(id: string) => any
```

| Param    | Type                |
| -------- | ------------------- |
| **`id`** | <code>string</code> |

**Returns:** <code>any</code>

--------------------


### resume(...)

```typescript
resume(id: string) => any
```

| Param    | Type                |
| -------- | ------------------- |
| **`id`** | <code>string</code> |

**Returns:** <code>any</code>

--------------------


### stop(...)

```typescript
stop(id: string) => any
```

| Param    | Type                |
| -------- | ------------------- |
| **`id`** | <code>string</code> |

**Returns:** <code>any</code>

--------------------


### checkStatus(...)

```typescript
checkStatus(id: string) => any
```

| Param    | Type                |
| -------- | ------------------- |
| **`id`** | <code>string</code> |

**Returns:** <code>any</code>

--------------------


### getFileInfo(...)

```typescript
getFileInfo(path: string) => any
```

| Param      | Type                |
| ---------- | ------------------- |
| **`path`** | <code>string</code> |

**Returns:** <code>any</code>

--------------------


### addListener('downloadProgress', ...)

```typescript
addListener(eventName: 'downloadProgress', listenerFunc: (progress: { id: string; progress: number; }) => void) => any
```

| Param              | Type                                                                  |
| ------------------ | --------------------------------------------------------------------- |
| **`eventName`**    | <code>'downloadProgress'</code>                                       |
| **`listenerFunc`** | <code>(progress: { id: string; progress: number; }) =&gt; void</code> |

**Returns:** <code>any</code>

--------------------


### addListener('downloadCompleted', ...)

```typescript
addListener(eventName: 'downloadCompleted', listenerFunc: (result: { id: string; }) => void) => any
```

| Param              | Type                                              |
| ------------------ | ------------------------------------------------- |
| **`eventName`**    | <code>'downloadCompleted'</code>                  |
| **`listenerFunc`** | <code>(result: { id: string; }) =&gt; void</code> |

**Returns:** <code>any</code>

--------------------


### addListener('downloadFailed', ...)

```typescript
addListener(eventName: 'downloadFailed', listenerFunc: (error: { id: string; error: string; }) => void) => any
```

| Param              | Type                                                            |
| ------------------ | --------------------------------------------------------------- |
| **`eventName`**    | <code>'downloadFailed'</code>                                   |
| **`listenerFunc`** | <code>(error: { id: string; error: string; }) =&gt; void</code> |

**Returns:** <code>any</code>

--------------------


### removeAllListeners()

```typescript
removeAllListeners() => any
```

**Returns:** <code>any</code>

--------------------


### Interfaces


#### DownloadOptions

| Prop              | Type                                     |
| ----------------- | ---------------------------------------- |
| **`id`**          | <code>string</code>                      |
| **`url`**         | <code>string</code>                      |
| **`destination`** | <code>string</code>                      |
| **`headers`**     | <code>{ [key: string]: string; }</code>  |
| **`network`**     | <code>'cellular' \| 'wifi-only'</code>   |
| **`priority`**    | <code>'high' \| 'normal' \| 'low'</code> |


#### DownloadTask

| Prop           | Type                                                                 |
| -------------- | -------------------------------------------------------------------- |
| **`id`**       | <code>string</code>                                                  |
| **`progress`** | <code>number</code>                                                  |
| **`state`**    | <code>'PENDING' \| 'RUNNING' \| 'PAUSED' \| 'DONE' \| 'ERROR'</code> |


#### PluginListenerHandle

| Prop         | Type                      |
| ------------ | ------------------------- |
| **`remove`** | <code>() =&gt; any</code> |

</docgen-api>

### Credit

This plugin was inspired from: https://github.com/kesha-antonov/react-native-background-downloader
