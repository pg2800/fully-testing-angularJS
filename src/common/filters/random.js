angular.module("Filters", [])
.filter("random", function (){
  // The Fisher–Yates (Ronald Fisher and Frank Yates) shuffle. -> aka. The Knuth Shuffle
	function shuffle(array) {
		var m = array.length, t, i;
  	// While there remain elements to shuffle…
  	while (m) {
    	// Pick a remaining element…
    	i = Math.floor(Math.random() * m--);
    	// And swap it with the current element.
    	t = array[m];
    	array[m] = array[i];
    	array[i] = t;
    }
    return array;
  }

  return function (inputArray){
  	return shuffle(inputArray);
  };
});