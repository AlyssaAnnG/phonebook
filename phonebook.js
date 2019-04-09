var fName;
var lName;
var email;
var phone;
var contacts =[{fName: "Frank", lName: "Sinatra", email: "fsinatra@gmail.com", phone: "123-123-4567"},{fName: "Billy", lName: "Joel", email: "pianoman@gmail.com", phone: "997-234-7654"},{fName: "Duke", lName: "Ellington", email: "dellington@gmail.com", phone: "876-124-5623"}];
var entry = {fName: "", lName: "", email: "", phone: ""};

function addEntry() {
	fName = document.getElementById("addFName").value;
	lName = document.getElementById("addLName").value;
	email = document.getElementById("addEmail").value;
	phone = document.getElementById("addNum").value;
	entry.fName = fName;
	entry.lName = lName;
	entry.email = email;
	entry.phone = phone;
	contacts.push(entry);
	display();
	alert("Entry Added");
	document.getElementById("addFName").value = "";
	document.getElementById("addLName").value = "";
	document.getElementById("addEmail").value = "";
	document.getElementById("addNum").value = "";
}

function delEntry() {
	fName = document.getElementById("delFName").value;
	lName = document.getElementById("delLName").value;
	for(i=0; i<contacts.length; i++) {
		if(contacts[i].fName == fName) {
			if(contacts[i].lName == lName) {
				contacts.splice(i,1);
				display();
				alert("Entry Deleted");
				document.getElementById("delLName").value = "";
				document.getElementById("delFName").value = "";
			}
		}
	}
}

function search() {
	fName = document.getElementById("searchFName").value;
	lName = document.getElementById("searchLName").value;
	for(i=0; i<contacts.length; i++) {
		if(contacts[i].fName == fName) {
			if(contacts[i].lName == lName) {
				document.getElementById("result").innerHTML = "<h2>Result:</h2>" + contacts[i].fName + " " + contacts[i].lName + " " + contacts[i].email + " " + contacts[i].phone;
				document.getElementById("searchLName").value = "";
				document.getElementById("searchFName").value = "";
			}
		}
	}
}

function display() {
	document.getElementById("list").innerHTML = "";
	for(i=0; i<contacts.length; i++) {
		document.getElementById("list").innerHTML += contacts[i].fName + " " + contacts[i].lName + " " + contacts[i].email + " " + contacts[i].phone + "<br>";
	}
}