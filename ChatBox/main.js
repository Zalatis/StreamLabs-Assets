// Please use event listeners to run functions.
document.addEventListener('onLoad', function(obj) {
	// obj will be empty for chat widget
	// this will fire only once when the widget loads
  document.documentElement.setAttribute("lang", 'fr-FR');
});

document.addEventListener('onEventReceived', function(obj) {
  	// obj will contain information about the event
    console.log(obj)
    var height = window.innerHeight;
    var heightOnScreen = document.querySelector("#log").clientHeight;
    while (height < heightOnScreen) {
        // delete first element in #log
      	console.log("On supprime un message");
        var first = document.querySelector("#log").firstChild;
        console.log(first)
        first.remove();
      var height = window.innerHeight;
      	var heightOnScreen = document.querySelector("#log").clientHeight;
    }
});