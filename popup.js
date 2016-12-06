function renderStatus(statusText) {
  document.getElementById('status').textContent = statusText;
}

document.addEventListener('DOMContentLoaded', function() {
  chrome.runtime.sendMessage({sender: "popup"}, function(response) {
      renderStatus(response.data);
	  });
});