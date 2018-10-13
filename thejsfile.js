		var choices = new Array[1A, 2AA , 1B , 2B , 1C , 1D, 2A, 3A , 3AA , 3AAA , 3AAAA, 4A, 4AA , 5A , 5AA , 6A , 7A , 7AA , 7AAAA , 7AAAA , 8A , 8AA];

		var A = 13;

		var B = 1000;

		var C = 3;

		var D = 0;


		function clickButton() {
				document.getElementById("btn1").innerHTML="sound alarm";
				document.getElementById("btn2").innerHTML="check out the smoke";
				document.getElementById("btn3").innerHTML="";
				document.getElementById("btn4").innerHTML="";


				document.getElementById("story-text-box").innerHTML = "You leave your computer station and walk down the hallway to the crash, as you get closer to the crash site you start to smell smoke. You were trained to alert the ship immediately but you know if you do this for a false alarm you may be fired from your position and sent back to earth. What do you do?";

			}




		document.getElementById("btn1").innerHTML = choices
