		var A = 13;
		var B = 1000;
		var C = 3;
		var D = 0;


		var choices = [1*A, 2*A*A , 1*B , 2*B , 1*C , 1*D, 2*A, 3*A , 3*A*A , 3*A*A*A , 3*A*A*A*A, 4*A, 4*A*A , 5*A , 5*A*A , 6*A , 7*A , 7*A*A , 7*A*A*A*A , 7*A*A*A*A , 8*A , 8*A*A];


		function clickButton1(){

			document.getElementById("story").appendChild(document.createTextNode('\n' + "You leave your computer station and walk down the hallway to the crash, as you get closer to the crash site you start to smell smoke. You were trained to alert the ship immediately but you know if you do this for a false alarm you may be fired from your position and sent back to earth. What do you do?" + '\n'));

			document.getElementById("btn1").innerHTML = "Sound the fire alarm to alert the station";
			document.getElementById("btn2").innerHTML = "Check out the smoke before sounding the alarm";
			document.getElementById("btn3").innerHTML = "";
			document.getElementById("btn4").innerHTML = "";


		}

		function clickButton2(){
			document.getElementById("btn1").innerHTML = "Succes";
			document.getElementById("btn2").innerHTML = "Succes";
			document.getElementById("btn3").innerHTML = "Succes";
			document.getElementById("btn4").innerHTML = "Succes";
		}

		function clickButton3(){
			document.getElementById("btn1").innerHTML = "Succes";
			document.getElementById("btn2").innerHTML = "Succes";
			document.getElementById("btn3").innerHTML = "Succes";
			document.getElementById("btn4").innerHTML = "Succes";
		}

		function clickButton4(){
			document.getElementById("btn1").innerHTML = "Succes";
			document.getElementById("btn2").innerHTML = "Succes";
			document.getElementById("btn3").innerHTML = "Succes";
			document.getElementById("btn4").innerHTML = "Succes";
		}
