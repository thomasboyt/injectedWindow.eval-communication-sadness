var injectDebugger = function() {
  // load injected script
  var xhr = new XMLHttpRequest();
  xhr.open('GET', chrome.extension.getURL('/injected.js'), false);
  xhr.send();
  var script = xhr.responseText;

  // inject into inspectedWindow
  chrome.devtools.inspectedWindow.eval(script);
};

// Create a connection to the background page
var backgroundPageConnection = chrome.runtime.connect({
  name: 'panel'
});

backgroundPageConnection.postMessage({
  name: 'init',
  tabId: chrome.devtools.inspectedWindow.tabId
});

backgroundPageConnection.onMessage.addListener(function(msg) {
  alert(msg);
});

injectDebugger();
