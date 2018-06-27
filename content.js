// content.js
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if( request.message === "query_submit" ) {
            let elements = [];
            if( request.selector === 'tag' ){
                elements = document.getElementsByTagName(request.query);
            } else if( request.selector === 'class' ){
                elements = document.getElementsByClassName(request.query);
            } else if( request.selector === 'id' ){
                let element = document.getElementById(request.query);
                if( element !== null){
                    elements.push(element);
                }
            }
            for( let element of elements ){
                element.click();
            }
            let response = {
                'message': 'query_finished',
                'clicked': elements.length,
                'query': request.query
            };
            chrome.runtime.sendMessage(response);
        }
    }
);