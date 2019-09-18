var Games = document.getElementsByClassName("game");
	var Websites = document.getElementsByClassName("web");
	var Apps = document.getElementsByClassName("app");
	var i;
	
	function All(){
		for(i = 0; i < Games.length; i++){
			Games[i].style.display = "block";
		}
		for(i = 0; i < Games.length; i++){
			Websites[i].style.display = "block";
		}
		for(i = 0; i < Games.length; i++){
			Apps[i].style.display = "block";
		}
	}
	function Game(){
		for(i = 0; i < Games.length; i++){
			Games[i].style.display = "block";
		}
		for(i = 0; i < Games.length; i++){
			Websites[i].style.display = "none";
		}
		for(i = 0; i < Games.length; i++){
			Apps[i].style.display = "none";
		}
	}
	function Web(){
		for(i = 0; i < Games.length; i++){
			Games[i].style.display = "none";
		}
		for(i = 0; i < Games.length; i++){
			Websites[i].style.display = "block";
		}
		for(i = 0; i < Games.length; i++){
			Apps[i].style.display = "none";
		}
	}
	function App(){
		for(i = 0; i < Games.length; i++){
			Games[i].style.display = "none";
		}
		for(i = 0; i < Games.length; i++){
			Websites[i].style.display = "none";
		}
		for(i = 0; i < Games.length; i++){
			Apps[i].style.display = "block";
		}
	}