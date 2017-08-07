alert("loaded");
function onRequest(request, sender, sendResponse) {
  alert(request);
  chrome.pageAction.show(sender.tab.id);
  sendResponse('Jira improvements!');
}
chrome.extension.onRequest.addListener(onRequest);
