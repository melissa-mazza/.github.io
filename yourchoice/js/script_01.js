function insertLink1(page){

	if(page == 1){
		//notice I've added a SPAN tag with the CSS class RESPONSE below
		//you can look in your CSS file what the RESPONSE class is
		document.getElementById("demo3").innerHTML = "<span class='response'>nervous about the virus.</span>"
		document.getElementById("start").innerHTML = "<a href='html/nervous.html'>nervous!</a>" //changed word here
	} else if(page == 0){
		//notice I've added a P tag with the CSS class RESPONSE below
		//you can look in your CSS file what the RESPONSE class is
		document.getElementById("demo3").innerHTML = "<span class='response'>excited about seeing your friends.</span>";
		document.getElementById("start").innerHTML = "<a href='html/wheretogo.html'>excited!</a>" //changed word here
	}
}


function insertLink2(page){
	/*
		the line of code below converts whatever the user types to lower-case
		the reason for this is that the user much type in all upper-case
		or in mixed case
	
		upper-case and lower-case characters are totally different characters
		and if you want to find out if one thing or another was typed,
		it makes it easier if all characters are sent to lower-case
	*/
	page = page.toLowerCase();
	
	
	/*
		the if statement asks if what was typed is 'lunch' or 'house'
		or if it was neither;
		if it was neither, then it tells the user to try again.
	*/
	if(page == "house"){
		document.getElementById("demo4").innerHTML = "house";
		//in line of code below, notice that there is text between the <a></a> tags so the user can click on something
		document.getElementById("start").innerHTML = "<a href='hmask.html'>message sent! <br/> click here to go to their house</a>";
	} else if(page == "lunch"){
		document.getElementById("demo4").innerHTML = "lunch";
		//in line of code below, notice that there is text between the <a></a> tags so the user can click on something
		document.getElementById("start").innerHTML = "<a href='lmask.html'>message sent! <br/> click here to get ready for lunch</a>";
	} else {
		document.getElementById("start").innerHTML= "try again: text the group 'house' or 'lunch'";
	}
}