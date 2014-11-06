var awesomeThoughts = "I am Ingi Kim and I am AWESOME!";
var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
//$("#main").append(funThoughts);

/* var name = "Ingi Kim";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName); */

// var skills = ["awesomeness", "programming", "teaching", "JS"];

/*$("#main").append(skills);

$("#main").append(skills[0]);

$("#main").append(skills.length); */

var bio = {
	"name" : "Ingi Kim",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "+82-10-6629-0365",
		"email" : "gokim365@gmail.com",
		"github" : "ingikim",
		"twitter" : "@kogim",
		"location" : "Seoul"
	},
	"welcomeMsg" : "Hello, I'm a Front-End Ninja.",
	"skills" : [
		"HTML", "CSS", "Javascript", "Ruby On Rails"
	],
	"bioPic" : "images/profile.jpg"
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMsg);


$("#header").prepend(formattedName);
$("#header").prepend(formattedRole);

$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedLocation);

$("#footerContacts").append(formattedMobile + formattedEmail + formattedGithub + formattedTwitter + formattedLocation);

$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

$("#header").append(HTMLskillsStART);
for (i = 0; i < bio.skills.length; i++) {
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
	$("#skills").append(formattedSkill);
}


var work = {};
work.position = "CEO";
work.employer = "Jayingeeks";
work.years = "October 2014 ~ Current";
work.city = "Seoul";

var formattedWorkPosition = HTMLworkTitle.replace("%data%", work.position);
$("#workExperience").prepend(formattedWorkPosition);


var education = {};
education["name"] = "Kyunghee University";
education["years"] = "March 2011 ~";
education["city"] = "Seoul";

var formattedEducationName = HTMLschoolName.replace("%data%", education["name"]);
$("#workExperience").prepend(formattedEducationName);


var education = {
	"schools": [
		{
			"name": "Kyung Hee University",
			"location": "Seoul",
			"degree": "BA",
			"majors": ["Cultural Tourism Contents"],
			"dates": 2017,
			"url": "http://khu.ac.kr"
		}
	],
	"onlineCourses": [
		{
			"title": "OneMonthRails",
			"school": "OneMonth",
			"dates": 2013,
			"url": "http://onemonthrails.com"
		},
		{
			"title": "Front-End Web Developer Nanodegree",
			"school": "Udacity",
			"dates": 2014,
			"url": "http://udacity.com"
		}
	]
};





