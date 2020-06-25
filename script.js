document.getElementById("choice1").addEventListener("click", choice1);
document.getElementById("choice2").addEventListener("click", choice2);
document.getElementById("choice3").addEventListener("click", choice3);
document.getElementById("station").addEventListener("click", station);
document.getElementById("store").addEventListener("click", store);
document.getElementById("bar").addEventListener("click", bar);
document.getElementById("farm").addEventListener("click", farm);

let storyStarted = false;
let gameInitiated = false;
let gamePosition = 0;
let barcheck = false;
let storecheck = false;
let guncheck = false;
let lighton = false;
let investigation = false;

function setImage(img) {
	document.getElementById("gameFrame").src="images/"+img+".png";
}

function setDialogue(text) {
	document.getElementById("dialogueBox").innerHTML = text;
}

function setChoice(id, text) {
	showButton("choice" + id);
	document.getElementById("choice" + id).innerHTML = text;
}

function hideButton(id) {
	document.getElementById(id).style.opacity = "0"; 
	document.getElementById(id).disabled = true; 
}

function showButton(id) {
	document.getElementById(id).style.opacity = "1"; 
	document.getElementById(id).disabled = false;
}



function station() {
	console.log(gamePosition)
	setImage("policeStation");
	switch (gamePosition) {
		case 0: // receive the case
			setDialogue("<b>Sheriff Frank Worden: </b>Hey, you've got that new case right? Better get on it");
			setChoice(1, "I'll start looking into it soon.");
			setChoice(2, "Exit the police station");
			setChoice(3, "I will after I get my morning coffee. Did you brew the coffee?");
			hideButton("store");
			hideButton("bar");
			gamePosition = 1;
			break;
        case 320:
            hideButton("choice2");
			setChoice(1, "You're not going to believe that I found at Gein's farm.");
			gamePosition = 500
			break;
		default:
			setDialogue("<b>Sheriff Frank Worden: </b>Made any progress on that case yet?");
			setChoice(2, "Exit the station");
			hideButton("bar");
			hideButton("store");
	}
}

function store() {
	if (barcheck == false) {
		setImage("store");
	}
	else {
		setImage("mainStore");
	}
	hideButton("station");
	hideButton("bar");
	if (storyStarted == false) { // if haven't received case yet
		setDialogue("<i>I should head to the police station to pick up that new case first so I know what I'm looking at.</i>");
		setChoice(2, "Leave the store")
	}

	// START OF STORE DIALOGUES
	switch(gamePosition) {
		case 100:
			if (barcheck == false) {
				setDialogue("<i>I need to get my coffee first.</i>");
			}
			else {
			setDialogue("<b>Sheriff Frank Worden: </b>Glad you've finally decided to come. Come take a look at this scene.");
			setChoice(1, "Examine the ground");
			setChoice(2, "Examine the counter");
			setChoice(3, "Look around the store");
			gamePosition = 200;
			}
			break;
		case 270:
			setDialogue("<i>I already investigated the store.</i>");
			setChoice(2, "Leave the store");
      break;
	}
}

function bar() {
	console.log(gamePosition);
	setImage("bar");
	hideButton("station");
	hideButton("store");
	if (storyStarted == false) { // if haven't received case yet
		setDialogue("<i>I should head to the police station to pick up that new case first.</i>");
		setChoice(2, "Leave the bar");
	}
	switch(gamePosition) {
		case 100: // after received case
			setDialogue("<i>This is where the town gossip is. I wonder if they've heard of anything that can help me.</i>")
			setChoice(1, "Ask for a coffee");
			if (barcheck == true) {
				setChoice(2, "Leave the bar");
			}
			setChoice(3, "Look around the bar");
			gamePosition = 101;
			break;
		case 270:
			hideButton("farm");
			setDialogue("<i>Now's not the time to relax and drink</i>");
			setChoice(2, "Leave the bar");
			break;

	}
}

function farm() {
	setImage("farm");
	hideButton("station")
	hideButton("store")
	hideButton("bar")
	if (storyStarted == false) { // if haven't received case yet
		setDialogue("You should head to the police station to pick up that new case first.");
	}
	switch(gamePosition) {
		case 270:
			setDialogue("<i>I would have never suspected Gein... Everyone in town says he's trustworthy.")
			setChoice(1, "Knock on the front door");
			setChoice(3, "Walk behind the house");
			gamePosition = 300;
			break;
	}
}

function choice1() {
	switch(gamePosition) {
		case 1: // Ill look into it later
			setDialogue("<b>Sheriff Frank Worden: </b>Better look into it soon. People aren't too happy about this.");
			hideButton("choice1");
			break;
		// START OF BAR DIALOGUES
		case 101:
			barcheck = true;
			setDialogue("<b>Bartender: </b>Here's your coffee sheriff, say, did you ever solve that missing bartender case?")
			setChoice(1, "Which case?");
			setChoice(2, "Stop talking to the bartender");
			setChoice(3, "No, there have been no leads since.");
			gamePosition = 102;
			break;
		case 102:
			setDialogue("The one where <i>Mary Hogan</i> went missing without a trace except for a bullet casing left by the murderer.");
			hideButton("choice3");
			hideButton("choice1");
			setChoice(2, "That one's been stumping us since.");
			gamePosition = 102;
			break;
		case 110:
			setDialogue("Well supposedly... 2 men missing")
			hideButton("choice1");
			setChoice(2, "oh yea it hasnt been solved yet");
			gamePosition = 110;
			break;
		case 120:
			setDialogue("<b>Other cop: </b> Lots of people going missing huh sheriff? The two missing girl cases are going no where.")
			setChoice(1, "What's the first case about?");
			setChoice(2, "What's the second case about?");
			hideButton("choice3");
			gamePosition = 121;
			break;
		case 121:
			hideButton("choice1");
			setDialogue("<b>Other cop: </b>The first case is about a 15 year old girl, Evelyn Hartley. She was baby-sitting then she disspeared.")
			setChoice(2, "And the second case?")
			gamePosition = 122;
			break;
		case 122:
			setDialogue("<b>Other cop: </b>The first case is about a 15 year old girl, Evelyn Hartley. She was baby-sitting then she disspeared.")
			hideButton("choice1");
			setChoice(2, "Interesting. I'll have to look into those.")
			gamePosition = 102;
			break;
		// START OF BAR DIALOGUES
			
		case 200:
			setImage("bloodyStore");
			hideButton("choice1");
			hideButton("choice3");
			setDialogue(" <i>You notice the blood on the ground. Presumably from Worden.</i> ");
			setChoice(2, "Examine the rest of the store");
			gamePosition = 299;
			break;
		case 210:
			setDialogue("<i>The reciept is made for a purchase of anti-freeze from <br>Ed Gein</br></i>")
			setChoice(2, "Examine the rest of the store");
			hideButton("choice1")
			hideButton("choice3")
			storecheck = true;
			gamePosition = 299;
			break;
		case 220:
			hideButton("choice1");
			setDialogue("<i>A gun appears to be placed back on the rack hastily. You also notice a fingerprint on the barrel of the gun.</i>")
			guncheck = true;
			if (storecheck == true) {
				hideButton("choice1");
				setChoice(3, "Finish the investigation and leave");
				gamePosition = 269;
			}
			break;

		case 300:
			setDialogue("<i>Nobody appears to be home</i>")
			hideButton("choice1");
			setChoice(2, "Try looking for a different way in")
			gamePosition = 301;
			break;
		case 320:
			if (investigation = false) {
			setImage("geinKitchen");
			setChoice(1, "Look at the table");
			setChoice(2, "Look at the chairs");
			setChoice(3, "Look in the refrigerator.");
			gamePosition = 340;
			}
			else {
				hideButton("choice1")
				hideButton("choice2")
				hideButton("choice3")
				setImage("mainMap");
				showButton("station");
				hideButton("farm");
			}
			break;
		case 330:
			setDialogue("Upon closer inspection, the bowl appears to be made out of a skull.")
			setImage("headBowl")
			hideButton("choice1");
			break;
		case 340:
			setDialogue("Upon closer inspection, there are numerous noses, pieces of bones, and masks made from human faces on the table.")
			break;
		case 500:
			setDialogue("Oh?")
			setImage("blackFrame");
			setChoice(2, "Take a look at the report")
            hideButton("choice1");
			gamePosition = 501;
			break;
	}

}

function choice2() {
	if (gameInitiated == false) { // initialize the game
		document.getElementById("station").innerHTML = "Police Station";
		document.getElementById("store").innerHTML = "Worden's Hardware Store";
		document.getElementById("bar").innerHTML = "The Bar";
		document.getElementById("farm").innerHTML = "Gein's Farm";
		gameInitiated = true;
		setDialogue("There was a new case that happened. I should go to the station and pick it up.")
		setImage("mainMap")
		hideButton("choice1");
		hideButton("choice2");
		hideButton("choice3");
		showButton("station");
		showButton("bar");
		showButton("store");
		showButton("station")
	}

	switch(gamePosition) {
		case 0:
			setImage("mainMap");
			showButton("station");
			showButton("bar");
			showButton("store");
			hideButton("choice1");
			hideButton("choice2");
			hideButton("choice3");
			break;
		case 1: // Exit the station
			setImage("mainMap");
			showButton("bar");
			showButton("store");
			showButton("station");
			hideButton("choice1");
			hideButton("choice2");
			hideButton("choice3");
			setDialogue("<i>I should start looking into that case after I get a coffee</i>");
			gamePosition = 100;
			break;
		// START OF BAR DIALOGUES
		case 100:
			setImage("mainMap");
			showButton("bar");
			showButton("store");
			showButton("station");
			hideButton("choice2");
			break;
		case 101:
			setImage("mainMap");
			setDialogue("I should start to investiage Worden");
			hideButton("choice1");
			hideButton("choice2");
			hideButton("choice3");
			showButton("bar");
			showButton("store");
			showButton("station");
			gamePosition = 100;
			break;
		case 102:
			gamePosition = 100;
			bar();
			break;
		case 110:
			gamePosition = 100;
			bar();
			break;
		case 120:
			gamePosition = 100
			bar();
			break;
		case 121:
			setDialogue("<b>Other cop: </b>The second one is about a 8 year old girl named Georgia Weckler. Dissapeared with only tire tracks left behind.");
			hideButton("choice2");
			setChoice(1, "And the first case?")
			gamePosition = 122;
			break;
		case 122:
			setDialogue("<b>Other cop: </b> The second one is about a 8 year old girl named Georgia Weckler. Dissapeared with only tire tracks left behind.");
			setChoice(2, "Interesting. I'll have to look into those.")
			gamePosition = 102;
			break;
		// END OF BAR DIALOGUES
		
		// START OF STORE DIALOGUES
		case 200:
			setImage("mainStore");
			setChoice(1, "Examine a reciept on the counter");
			setChoice(2, "Look at the cash register");
			setChoice(3, "Examine the rest of the store");
			gamePosition = 210;
			break;
		case 210:
			setDialogue("<i>The cash register appears to have been stolen.</i>")
			hideButton("choice1");
			hideButton("choice3");
			setChoice(2, "Examine the rest of the store");
			gamePosition = 299;
			break;
		case 299:
			gamePosition = 100;
			store();
			break;
		case 269:
			setDialogue("<b>Sheriff Frank Worden: </b>Yes it was Gein")
			setChoice(2, "I'll keep that in mind.")
			setDialogue("I should think about investigating Gein's farm now.")
			gamePosition = 270;
			break;
		case 270:
			setImage("mainMap");
			hideButton("choice2");
			showButton("station");
			showButton("store");
			showButton("farm");
			showButton("bar");
			break;
		case 301:
			choice3();
			setImage("rearFarm")
			break;
		case 310:
			setImage("geinKitchen");
			setChoice(1, "Explore the house more");
			if (lighton == false) {
				setDialogue("It's dark in the house. There's something large hanging fron the ceiling and the house is a mess.")
				setChoice(2, "Turn on the light")
			}
			setChoice(3, "Examine the shelf");
			gamePosition = 320;
			break;
		case 320:
			if (lighton == true) {
				setImage("goodWorden");
				setDialogue("<i>After the lights turned on, the hanging object is now visibly a <b>body</b>...<br><a href='images/realWorden.jpg'>Click here to see actual picture of Worden's body(Graphic image)</a>")
				setChoice(1, "Finish the investigation and report to the police station");
				investigation = true;
			}
			else {
				setDialogue("When the light is turned on, it is now apparent that the lampshade is made out of human skin.")
				setChoice("2", "Examine what is hanging from the ceiling.")
				lighton = true
				gamePosition = 310;
			}
			break;
		case 330:
			setImage("geinKitchen");
			setDialogue("When opened, the shoebox appears to contain <b>9 human vulvas</b>...")
			hideButton("choice2")
			break;
		case 340:
			setImage("geinKitchen");
			setDialogue("The chair looks a little odd... when felt, it feels like its made from human skin... There is also an odd belt resting on the chair... it's studded with human nipples...")
			break;
        case 501:
            hideButton("choice2");
            hideButton("station");
			setDialogue("Investigation summary: <br>On the morning of November 16, 1957, Plainfield hardware store owner Bernice Worden disappeared. Frank Worden told investigators that Ed Gein had been in the store the evening before his mother's disappearance. A sales slip for a gallon of antifreeze was the last receipt written by Worden on the morning she disappeared. In the same day, investigators searched the Gein farm to find some of the following:<br>Worde's decapitated body hanging from the ceiling<br>Human bones and fragments<br>Chair seats made from human skin<br>Several skulls, some of which were fashioned into bowls<br>A corset made from a torso<br>Leggings made of human skin<br>Masks made from female faces<br>Mary Hogan's and Bernice Worden's heads in bags<br>Nine vulvas in a box<br>A belt made from human nipples<br>Four noses<br>A lampshade made from human skin<br><br>End of summary and game.");
            break;
	}
}

function choice3() {
	switch(gamePosition) {
		case 1: // Say do we have any coffee brewed
			setDialogue("<b>Sheriff Frank Worden: </b>We just ran out. The bar has some though.");
			hideButton("choice3");
			break;
		// START OF BAR DIALOGUES
		case 101:
			setChoice(1, "Talk to other cop at the bar");
			setChoice(2, "Look back");
			setChoice(3, "Talk to guy at bar");
			gamePosition = 120;
			break;
		case 102:
			gamePosition = 100;
			bar();
			break;
		case 110:
			hideButton("choice1");
			hideButton("choice2");
			hideButton("choice3");
			hideButton("bar");
			setImage("blackFrame");
			setDialogue("Wow you actually shot the man.<br>Come on, you can't just shoot people randomly.<br> Refresh the website to restart. Try not to shoot random people this time.")
			break;
		case 120:
			setDialogue("<b>Guy: </b>Hey sheriff, you heard about those 2 guys that went missing");
			setChoice(1, "No, what happened");
			setChoice(2, "Stop talking to the guy");
			setChoice(3, "Shoot the man");
			gamePosition = 110;
			break;
		// END OF BAR DIALOGUES

		// START OF STORE DIALOGUES
		case 200:
			setImage("gunStore");
			setChoice(1, "Look at the shelves.");
			hideButton("choice2");
			gamePosition = 220;
			if (storecheck == true & guncheck == true) {
				setChoice(3, "Finish the investigation and leave.")
			}
			break;
		case 210:
			gamePosition = 100;
			store();
			break;
		case 220:
			gamePosition = 100;
			store();
			break;
		case 269:
			setImage("store");
			hideButton("choice1");
			hideButton("choice2");
			hideButton("choice3");
			setDialogue("<b>Sheriff Frank Worden: </b>Hey sheriff finish investigating?")
			setChoice(2, "Do you know who was last with Worden before she dissapeared")
			break;
		case 270:
			hideButton("choice2");
			setDialogue("I should go investigate Gein's farm")
			break;
        case 300:
            setImage("rearFarm");
            hideButton("choice1");
            setDialogue("The back door appears to be unlocked")
			setChoice(2, "Try to open the back door");
			gamePosition = 310;
		case 301:
			setDialogue("The back door appears to be unlocked")
			setChoice(2, "Try to open the back door");
			gamePosition = 310;
			break;
		case 310:
			setImage("geinKitchen");
			setChoice(1, "Explore the house more");
			setChoice(2, "Examine what is hanging from the ceiling");
			setChoice(3, "Examine the shelf");
			gamePosition = 320;
			break;
		case 320:
			setImage("geinKitchen");
			setDialogue("<i>There are numerous objects on the shelf</i>")
			setChoice(1, "Examine the cup");
			setChoice(2, "Examine the shoe box");
			setChoice(3, "Dig around the shelf more")
			gamePosition = 330;
			break;
		case 330:
			setDialogue("There appears to be a few bags.<br><i>As you open the bags, you are met with Worden's decapitated head.<br><a href='images/wordenHead.jpg'>Click here to see actual picture of Worden's decapitated head(Graphic image)</a>")
			gamePosition = 310;
			setChoice(3, "Explore the rest of the house");
			break;
		case 340:
			setDialogue("Inside the refrigerator there appear to be several human organs");
			break;
	}
}

hideButton("bar");
hideButton("station");
hideButton("store");
hideButton("farm");
hideButton("choice1");
hideButton("choice3");