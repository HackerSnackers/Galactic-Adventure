 var i = 0;
	var A = 1;
	var B = 2;
	var C = 3;
	var D = 4;

		function clickButton1(){

			if (i == 7){
				document.getElementById("story").appendChild(document.createElement("br"));
				document.getElementById("story").appendChild(document.createTextNode("You go on many adventures with the captain and eventually end up being promoted to the fleet commander. You explore vast areas of space, surviving black holes, winning space wars, and developing new space technologies.Congratulations on your success in the space force!!!"));

				document.getElementById("btn1").innerHTML = "CONGRATULATIONS!!!";
				document.getElementById("btn2").innerHTML = "CONGRATULATIONS!!!";
				document.getElementById("btn3").innerHTML = "CONGRATULATIONS!!!";
				document.getElementById("btn4").innerHTML = "CONGRATULATIONS!!!";
				i = 8;
			}


			if (i == 6){
				document.getElementById("story").appendChild(document.createElement("br"));
				document.getElementById("story").appendChild(document.createTextNode("George starts to work on the ship but does it very slowly. The captain notices the difference between your work ethic and george's. You receive a medal for your motivation. You see the captain and he wants to talk, he pulls you aside and asks you if you want to go visit the martian ranch, what do you say?"));

				document.getElementById("btn1").innerHTML = "Yes I want to visit the ranch of our martian friends!!!";
				document.getElementById("btn2").innerHTML = "No I do not want to explore mars, I feel much safer on the ship";
				document.getElementById("btn3").innerHTML = "";
				document.getElementById("btn4").innerHTML = "";
				i = 7;
			}

			if (i == 5){
				document.getElementById("story").appendChild(document.createElement("br"));
				document.getElementById("story").appendChild(document.createTextNode("George objects saying that it doesn’t matter if we pitch in, he then prompts you to join him. What do you do?"));

				document.getElementById("btn1").innerHTML = "Tell George to work again, maybe he will come about his senses.";
				document.getElementById("btn2").innerHTML = "Join George in slacking off on your iphone 20000000XV";
				document.getElementById("btn3").innerHTML = "";
				document.getElementById("btn4").innerHTML = "";
				i = 6;
			}

			if (i == 4){
				document.getElementById("story").appendChild(document.createElement("br"));
				document.getElementById("story").appendChild(document.createTextNode("You go party with the martians and they don’t seem to mind that you just captured the ship. They invite you to their martian ranch if you ever want to visit, you get leave every weekend so this is a potential adventure. It is time to go back to the ship so you return, it is the next day and you need to help repair the station. You see George from USC lazing about with his iphone 5000XV. There is a lot of work to do, what do you do?"));

				document.getElementById("btn1").innerHTML = "Tell George to get to work";
				document.getElementById("btn2").innerHTML = "Ignore George and focus on your own job";
				document.getElementById("btn3").innerHTML = "";
				document.getElementById("btn4").innerHTML = "";
				i = 5;
			}

			if (i == 3){
				document.getElementById("story").appendChild(document.createElement("br"));
				document.getElementById("story").appendChild(document.createTextNode("While going through the captured ship, you encounter the martians intricate rooms in their space station. While exploring the captured ships zoo, you realize there is a martian wedding going on. What do you do?"));

				document.getElementById("btn1").innerHTML = "Join the martian wedding to hopefully have a good time";
				document.getElementById("btn2").innerHTML = "Capture everyone at the wedding";
				document.getElementById("btn3").innerHTML = "";
				document.getElementById("btn4").innerHTML = "";
				i = 4;
			}

			if (i == 2){
				document.getElementById("story").appendChild(document.createElement("br"));
				document.getElementById("story").appendChild(document.createTextNode("You make it to the battle station and after an intense battle with the martians you and your station are victorious but have taken heavy damage. You have taken over the imperial martian ship and have chased marth vader away in an escape pod. What do you do next?"));

				document.getElementById("btn1").innerHTML = "Go through the captured ship to make sure everything is secure.";
				document.getElementById("btn2").innerHTML = "Call for backup to secure the ship.";
				document.getElementById("btn3").innerHTML = "";
				document.getElementById("btn4").innerHTML = "";
				i = 3;
			}

			if(i == 1){
				document.getElementById("story").appendChild(document.createElement("br"));
				document.getElementById("story").appendChild(document.createTextNode("You run to the nearest alarm and trigger the alert system. At first everyone is confused but as they start their alarm procedure, learned in training, they realize the station is under attack by the imperial martian empire. You are able to shut down the cyber attacks but the station is now being boarded by the infamous marth vader. What do you do?"));

				document.getElementById("btn1").innerHTML = "Report to battle station, the force is with me";
				document.getElementById("btn2").innerHTML = "call for space force backup";
				document.getElementById("btn3").innerHTML = "abandon ship to save yourself";
				document.getElementById("btn4").innerHTML = "";
				i = 2;
			}

			document.getElementById("story").appendChild(document.createElement("br"));

			if(i == 1){
				document.getElementById("story").appendChild(document.createTextNode("Different"));

				document.getElementById("btn1").innerHTML = "Sound the fire alarm to alert the station";
				document.getElementById("btn2").innerHTML = "Check out the smoke before sounding the alarm";
				document.getElementById("btn3").innerHTML = "";
				document.getElementById("btn4").innerHTML = "";
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
			document.getElementById("story").appendChild(document.createElement("br"));

		
				if (i == 8){
				document.getElementById("story").appendChild(document.createElement("br"));
				document.getElementById("story").appendChild(document.createTextNode("You go on many adventures with the captain and eventually end up being promoted to the fleet commander. You explore vast areas of space, surviving black holes, winning space wars, and developing new space technologies.Congratulations on your success in the space force!!!"));

				document.getElementById("btn1").innerHTML = "CONGRATULATIONS!!!";
				document.getElementById("btn2").innerHTML = "CONGRATULATIONS!!!";
				document.getElementById("btn3").innerHTML = "CONGRATULATIONS!!!";
				document.getElementById("btn4").innerHTML = "CONGRATULATIONS!!!";
				i = 9;
			}


			if (i == 7){
				document.getElementById("story").appendChild(document.createElement("br"));
				document.getElementById("story").appendChild(document.createTextNode("George starts to work on the ship but does it very slowly. The captain notices the difference between your work ethic and george's. You receive a medal for your motivation. You see the captain and he wants to talk, he pulls you aside and asks you if you want to go visit the martian ranch, what do you say?"));

				document.getElementById("btn1").innerHTML = "";
				document.getElementById("btn2").innerHTML = "Yes I want to visit the ranch of our martian friends!!!";
				document.getElementById("btn3").innerHTML = "No I do not want to explore mars, I feel much safer on the ship";
				document.getElementById("btn4").innerHTML = "";
				i = 8;
			}

			if (i == 6){
				document.getElementById("story").appendChild(document.createElement("br"));
				document.getElementById("story").appendChild(document.createTextNode("George objects saying that it doesn’t matter if we pitch in, he then prompts you to join him. What do you do?"));

				document.getElementById("btn1").innerHTML = "";
				document.getElementById("btn2").innerHTML = "Tell George to work again, maybe he will come about his senses.";
				document.getElementById("btn3").innerHTML = "Join George in slacking off on your iphone 20000000XV";
				document.getElementById("btn4").innerHTML = "";
				i = 7;
			}

			if (i == 5){
				document.getElementById("story").appendChild(document.createElement("br"));
				document.getElementById("story").appendChild(document.createTextNode("You go party with the martians and they don’t seem to mind that you just captured the ship. They invite you to their martian ranch if you ever want to visit, you get leave every weekend so this is a potential adventure. It is time to go back to the ship so you return, it is the next day and you need to help repair the station. You see George from USC lazing about with his iphone 5000XV. There is a lot of work to do, what do you do?"));

				document.getElementById("btn1").innerHTML = "";
				document.getElementById("btn2").innerHTML = "Tell George to get to work";
				document.getElementById("btn3").innerHTML = "Ignore George and focus on your own job";
				document.getElementById("btn4").innerHTML = "";
				i = 6;
			}

			if (i == 4){
				document.getElementById("story").appendChild(document.createElement("br"));
				document.getElementById("story").appendChild(document.createTextNode("While going through the captured ship, you encounter the martians intricate rooms in their space station. While exploring the captured ships zoo, you realize there is a martian wedding going on. What do you do?"));

				document.getElementById("btn1").innerHTML = "";
				document.getElementById("btn2").innerHTML = "Join the martian wedding to hopefully have a good time";
				document.getElementById("btn3").innerHTML = "Capture everyone at the wedding";
				document.getElementById("btn4").innerHTML = "";
				i = 5;
			}

			if (i == 3){
				document.getElementById("story").appendChild(document.createElement("br"));
				document.getElementById("story").appendChild(document.createTextNode("You make it to the battle station and after an intense battle with the martians you and your station are victorious but have taken heavy damage. You have taken over the imperial martian ship and have chased marth vader away in an escape pod. What do you do next?"));

				document.getElementById("btn1").innerHTML = "";
				document.getElementById("btn2").innerHTML = "Go through the captured ship to make sure everything is secure.";
				document.getElementById("btn3").innerHTML = "Call for backup to secure the ship.";
				document.getElementById("btn4").innerHTML = "";
				i = 4;
			}

			if(i == 2){
				document.getElementById("story").appendChild(document.createElement("br"));
				document.getElementById("story").appendChild(document.createTextNode("You run to the nearest alarm and trigger the alert system. At first everyone is confused but as they start their alarm procedure, learned in training, they realize the station is under attack by the imperial martian empire. You are able to shut down the cyber attacks but the station is now being boarded by the infamous marth vader. What do you do?"));

				document.getElementById("btn1").innerHTML = "";
				document.getElementById("btn2").innerHTML = "Report to battle station, the force is with me";
				document.getElementById("btn3").innerHTML = "call for space force backup";
				document.getElementById("btn4").innerHTML = "abandon ship to save yourself";
				i = 3;
			}

		

		




			if (i == 1){
				document.getElementById("story").appendChild(document.createTextNode("You leave your computer station and walk down the hallway to the crash, as you get closer to the crash site you start to smell smoke. You were trained to alert the ship immediately but you know if you do this for a false alarm you may be fired from your position and sent back to earth. What do you do?"));

			document.getElementById("btn1").innerHTML = "Check out the smoke before sounding the alarm";
			document.getElementById("btn2").innerHTML = "Sound the fire alarm to alert the station";
			document.getElementById("btn3").innerHTML = "";
			document.getElementById("btn4").innerHTML = "";
			i = 2;
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
			
			if (i == 6){
				document.getElementById("story").appendChild(document.createElement("br"));
				document.getElementById("story").appendChild(document.createTextNode("You go on many adventures with the captain and eventually end up being promoted to the fleet commander. You explore vast areas of space, surviving black holes, winning space wars, and developing new space technologies.Congratulations on your success in the space force!!!"));

				document.getElementById("btn1").innerHTML = "CONGRATULATIONS!!!";
				document.getElementById("btn2").innerHTML = "CONGRATULATIONS!!!";
				document.getElementById("btn3").innerHTML = "CONGRATULATIONS!!!";
				document.getElementById("btn4").innerHTML = "CONGRATULATIONS!!!";
				i = 7;
			}


			if (i == 5){
				document.getElementById("story").appendChild(document.createElement("br"));
				document.getElementById("story").appendChild(document.createTextNode("George starts to work on the ship but does it very slowly. The captain notices the difference between your work ethic and george's. You receive a medal for your motivation. You see the captain and he wants to talk, he pulls you aside and asks you if you want to go visit the martian ranch, what do you say?"));

				document.getElementById("btn1").innerHTML = "";
				document.getElementById("btn2").innerHTML = "";
				document.getElementById("btn3").innerHTML = "No I do not want to explore mars, I feel much safer on the ship";
				document.getElementById("btn4").innerHTML = "Yes I want to visit the ranch of our martian friends!!!";
				i = 6;
			}

			if (i == 4){
				document.getElementById("story").appendChild(document.createElement("br"));
				document.getElementById("story").appendChild(document.createTextNode("George objects saying that it doesn’t matter if we pitch in, he then prompts you to join him. What do you do?"));

				document.getElementById("btn1").innerHTML = "";
				document.getElementById("btn2").innerHTML = "";
				document.getElementById("btn3").innerHTML = "Join George in slacking off on your iphone 20000000XV";
				document.getElementById("btn4").innerHTML = "Tell George to work again, maybe he will come about his senses.";
				i = 5;
			}

			if (i == 3){
				document.getElementById("story").appendChild(document.createElement("br"));
				document.getElementById("story").appendChild(document.createTextNode("You go party with the martians and they don’t seem to mind that you just captured the ship. They invite you to their martian ranch if you ever want to visit, you get leave every weekend so this is a potential adventure. It is time to go back to the ship so you return, it is the next day and you need to help repair the station. You see George from USC lazing about with his iphone 5000XV. There is a lot of work to do, what do you do?"));

				document.getElementById("btn1").innerHTML = "";
				document.getElementById("btn2").innerHTML = "";
				document.getElementById("btn3").innerHTML = "Ignore George and focus on your own job";
				document.getElementById("btn4").innerHTML = "Tell George to get to work";
				i = 4;
			}

			if (i == 2){
				document.getElementById("story").appendChild(document.createElement("br"));
				document.getElementById("story").appendChild(document.createTextNode("While going through the captured ship, you encounter the martians intricate rooms in their space station. While exploring the captured ships zoo, you realize there is a martian wedding going on. What do you do?"));

				document.getElementById("btn1").innerHTML = "";
				document.getElementById("btn2").innerHTML = "";
				document.getElementById("btn3").innerHTML = "Capture everyone at the wedding";
				document.getElementById("btn4").innerHTML = "Join the martian wedding to hopefully have a good time";
				i = 3;
			}

			if (i == 1){
				document.getElementById("story").appendChild(document.createElement("br"));
				document.getElementById("story").appendChild(document.createTextNode("You make it to the battle station and after an intense battle with the martians you and your station are victorious but have taken heavy damage. You have taken over the imperial martian ship and have chased marth vader away in an escape pod. What do you do next?"));

				document.getElementById("btn1").innerHTML = "";
				document.getElementById("btn2").innerHTML = "";
				document.getElementById("btn3").innerHTML = "Call for backup to secure the ship.";
				document.getElementById("btn4").innerHTML = "Go through the captured ship to make sure everything is secure.";
				i = 2;
			}

			if(i == 0){
				document.getElementById("story").appendChild(document.createElement("br"));
				document.getElementById("story").appendChild(document.createTextNode("You run to the nearest alarm and trigger the alert system. At first everyone is confused but as they start their alarm procedure, learned in training, they realize the station is under attack by the imperial martian empire. You are able to shut down the cyber attacks but the station is now being boarded by the infamous marth vader. What do you do?"));

				document.getElementById("btn1").innerHTML = "";
				document.getElementById("btn2").innerHTML = "";
				document.getElementById("btn3").innerHTML = "call for space force backup";
				document.getElementById("btn4").innerHTML = "Report to battle station, the force is with me";
				i = 1;
			}

			document.getElementById("story").appendChild(document.createElement("br"));
		}
