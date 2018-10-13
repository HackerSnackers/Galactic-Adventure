 var i = 0;
	var A = 1;
	var B = 2;
	var C = 3;
	var D = 4;

		function clickButton1(){

			if(i == 1){
				document.getElementById("story").appendChild(document.createElement("br"));

				document.getElementById("story").appendChild(document.createTextNode("Different"));

				document.getElementById("btn1").innerHTML = "Sound the fire alarm to alert the station";
				document.getElementById("btn2").innerHTML = "Check out the smoke before sounding the alarm";
				document.getElementById("btn3").innerHTML = "";
				document.getElementById("btn4").innerHTML = "";
				i = 3;
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
			document.getElementById("story").appendChild(document.createElement("br"));

			if (i==4){
				document.getElementById("story").appendChild(document.createTextNode("You encounter the notorious martian emperor, Marth Vader, who proceeds to use his telekinesis to make a tornado and you get hit by a flying cow. You are injured and the station is taken over. Game over, play again soon."));

				document.getElementById("btn1").innerHTML = "GAME OVER";
				document.getElementById("btn2").innerHTML = "GAME OVER";
				document.getElementById("btn3").innerHTML = "GAME OVER";
				document.getElementById("btn4").innerHTML = "GAME OVER";

			i = -1;
			}

			if (i==1){
				document.getElementById("story").appendChild(document.createElement("br"));


				document.getElementById("story").appendChild(document.createTextNode("You encounter the notorious martian emperor, Marth Vader, who proceeds to use his telekinesis to make a tornado and you get hit by a flying cow. You are injured and the station is taken over. Game over, play again soon."));

				document.getElementById("btn1").innerHTML = "GAME OVER";
				document.getElementById("btn2").innerHTML = "GAME OVER";
				document.getElementById("btn3").innerHTML = "GAME OVER";
				document.getElementById("btn4").innerHTML = "GAME OVER";
			i = -1;
			}





			if (i==0){
				document.getElementById("story").appendChild(document.createTextNode("You casually keep working telling yourself that you will check out the crash after the system is updated. Pretty soon you become tired, what do you do?"));

			document.getElementById("btn1").innerHTML = "Drink a coffee";
			document.getElementById("btn2").innerHTML = "Check out the noise";
			document.getElementById("btn3").innerHTML = "";
			document.getElementById("btn4").innerHTML = "";
			i = 2;
		}

		}

		function clickButton3(){
			document.getElementById("story").appendChild(document.createElement("br"));

			if (i == 0){
				document.getElementById("story").appendChild(document.createElement("br"));


				document.getElementById("story").appendChild(document.createTextNode("You ask George to check out the noise, but unfortunately George went to university of south carolina and was too chicken to do anything. You call him a wimp and then what do you do?"));

			document.getElementById("btn1").innerHTML = "You go and check out the crash";
			document.getElementById("btn2").innerHTML = "You ignore the crash and keep working";
			document.getElementById("btn3").innerHTML = "You send george to check out the crash";
			document.getElementById("btn4").innerHTML = "Sound the alarm to alert the station";
			i = 0;
		}
		}

		function clickButton4(){
			document.getElementById("story").appendChild(document.createElement("br"));

			document.getElementById("btn1").innerHTML = "Succes";
			document.getElementById("btn2").innerHTML = "Succes";
			document.getElementById("btn3").innerHTML = "Succes";
			document.getElementById("btn4").innerHTML = "Succes";
		}
