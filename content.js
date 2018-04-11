// content.js
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if( request.message === "click_query" ) {
            let elements = document.getElementsByTagName('BUTTON');
            for( let element of elements ){
                element.click();
            }
            chrome.runtime.sendMessage({'message': 'query_finished',"clicked": elements.length});
        }
    }
);