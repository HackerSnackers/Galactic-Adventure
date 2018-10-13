 var i = 0;



		function clickButton1(){

			if(i == 1){
				document.getElementById("story").appendChild(document.createElement("br"));
				document.getElementById("story").appendChild(document.createTextNode("Different"));

				document.getElementById("btn1").innerHTML = "Sound the fire alarm to alert the station";
				document.getElementById("btn2").innerHTML = "Check out the smoke before sounding the alarm";
				document.getElementById("btn3").innerHTML = "THESE";
				document.getElementById("btn4").innerHTML = "ARE";
				i = 2;
			}

			if (i == 0){
				document.getElementById("story").appendChild(document.createElement("br"));
				document.getElementById("story").appendChild(document.createTextNode("You leave your computer station and walk down the hallway to the crash, as you get closer to the crash site you start to smell smoke. You were trained to alert the ship immediately but you know if you do this for a false alarm you may be fired from your position and sent back to earth. What do you do?"));

				document.getElementById("btn1").innerHTML = "Sound the fire alarm to alert the station";
				document.getElementById("btn2").innerHTML = "Check out the smoke before sounding the alarm";
				document.getElementById("btn3").innerHTML = "";
				document.getElementById("btn4").innerHTML = "";
				i = 1;
			}


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
