// content.js
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if( request.message === "query_submit" ) {
            let elements = document.getElementsByTagName('BUTTON');
            for( let element of elements ){
                element.click();
            }
            let response = {
                'message': 'query_finished',
                "clicked": elements.length,
                'query': request.query
            };
            chrome.runtime.sendMessage(response);
        }
    }
);