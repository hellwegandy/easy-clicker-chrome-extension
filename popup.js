// popup.js
function clickyClick(){
    chrome.tabs.query({active: true, currentWindow: true}, findQueryMatch);
}
function findQueryMatch(tabs) {
    let activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "click_query"});
}

let myFunctionButton = document.getElementById("myFunctionButton");
myFunctionButton.onclick = clickyClick;

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if( request.message === "query_finished" ) {
            alert('clicked: ' + request.clicked);
        }
    }
);
