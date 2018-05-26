// popup.js

// Function ran on query submit button click
function clickyClick(){
    sendQueryMessage()
}

// finds the active tab and runs the query against that tab
function sendQueryMessage(){
    chrome.tabs.query({active: true, currentWindow: true}, (tabs)=>{
        let activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"message": "click_query", "query": 'blah blah'});
    });
}

// set on click of query submit button
let myFunctionButton = document.getElementById("myFunctionButton");
myFunctionButton.onclick = clickyClick;

// event listener to tell us how many items were clicked
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if( request.message === "query_finished" ) {
            console.log('clicked: ' + request.clicked);
        }
    }
);
