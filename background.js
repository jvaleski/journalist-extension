var author_info = "";

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
  if (message.sender == "content_script") {
    // if the message is from the content script, store the data here for later popup script retrieval
    author_info = message.data;
  }
  sendResponse({farewell: "goodbye", data: author_info});
});