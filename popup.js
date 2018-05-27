// popup.js

// Function ran on query submit button click
function submitQuery(){
    let query_text = getQueryText();
    sendQueryMessage(query_text);
}

// gets the query text from the queryText input
function getQueryText(){
    return document.getElementById('queryText').value;
}

// finds the active tab and runs the query against that tab
function sendQueryMessage(query){
    chrome.tabs.query({active: true, currentWindow: true}, (tabs)=>{
        let activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"message": "query_submit", "query": query});
    });
}

// set on click of query submit button
let myFunctionButton = document.getElementById("myFunctionButton");
myFunctionButton.onclick = submitQuery;

// event listener to tell us how many items were clicked
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if( request.message === "query_finished" ) {
            console.log(request);
        }
    }
);

let dd = document.getElementById("myDropdown");
let ddOpen = false;
let ddItemSelected = null;
function dropdownClick(){
    dd.classList.toggle('dropdown-show');
    ddOpen = dd.classList.contains('dropdown-show');
}

function dropdownItemClick(){

}

// set on click dropdown
let myDropdownButton = document.getElementById("dropdownButton");
myDropdownButton.onclick = dropdownClick;
