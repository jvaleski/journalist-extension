// see if there's author info in here.

var nodePossibilities = ["byline", "post-author vcard"];
var authorHREFString = "";

for (var x in nodePossibilities) {
    var elements = document.getElementsByClassName(nodePossibilities[x]);
    for (var i = 0; i < elements.length; i++) {
	var author_name = elements[i].getElementsByTagName('span');
        if (author_name.length > 0) {
          authorHREFString += author_name[0].innerText + " - ";
        }

        var anchor = elements[i].getElementsByTagName('a');
        if (anchor.length > 0) {
            authorHREFString += anchor[0].href + "\n\n\n";
        }
    }    
}

if (authorHREFString.length > 0) {
    alert(authorHREFString);
}

chrome.runtime.sendMessage({sender: "content_script", data: authorHREFString}, function(response) {
  //alert(response.farewell);
});