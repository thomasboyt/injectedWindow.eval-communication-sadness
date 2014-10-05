chrome.runtime.sendMessage({hello: 'world'}, function() {
  console.log('sent a message!!');
});
