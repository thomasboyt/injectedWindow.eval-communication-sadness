## The problem

I'm creating a Chrome Dev Tools extension. Chrome has an API, `chrome.devtools.inspectedWindow.eval`, that allows a dev tools extension to run code in the context of the host page.

It appears that code run by this method *does not support* any of the messaging described in the [Message Passing](https://developer.chrome.com/extensions/messaging) doc, including `sendMessage`. Because of this, the ["Messaging from Content Scripts to the DevTools Page"](https://developer.chrome.com/extensions/devtools#content-script-to-devtools) guide doesn't work for `inspectedWindow.eval`ed scripts.

It is unclear whether `sendMessage` is intended to work within this context, and also unclear how else to communicate from an injected script to the dev tools panel.

## Steps for reproducing

1. Load this folder as an unpacked extension
2. Open the background page inspector for this extension
3. Open a new tab to `http://google.com` (or wherever else you'd like)
4. Open the dev tools in the tab and select "Broken Comm"
5. Note that in the console tab in the page's dev tools, a message has been logged indicating a message was sent
6. Note that in the console tab in the inspector's dev tools, there is no log message indicating a message was received
7. Cry
