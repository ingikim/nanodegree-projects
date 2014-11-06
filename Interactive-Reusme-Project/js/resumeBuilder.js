var bio = {
	"name": "Ingi Kim",
	"role": "Web Developer",
	"contacts": {
		"mobile": "+82-10-6629-0365",
		"email": "gokim365@gmail.com",
		"github": "ingikim",
		"twitter": "@kogim",
		"location": "Seoul"
	},
	"welcomeMessage": "Hello, I'm a Front-End Ninja.",
	"skills": [
		"HTML", "CSS", "Javascript", "Ruby On Rails"
	],
	"bioPic": "images/profile.jpg"
};

var education = {
	"schools": [
		{
			"name": "Kyung Hee University",
			"location": "Seoul",
			"degree": "BA",
			"majors": ["Cultural Tourism Contents"],
			"dates": "March 2011 ~",
			"url": "http://khu.ac.kr"
		}
	],
	"onlineCourses": [
		{
			"title": "OneMonthRails",
			"school": "OneMonth",
			"dates": "October 2013 ~ November 2013",
			"url": "http://onemonthrails.com"
		},
		{
			"title": "Front-End Web Developer Nanodegree",
			"school": "Udacity",
			"dates": "October 2014 ~",
			"url": "http://udacity.com"
		}
	]
};


var work = {
	"jobs": [
		{
			"employer": "Jayingeeks",
			"title": "Co-Founder",
			"location": "Seoul",
			"dates": "October 2014 ~",
			"description": "Jayingeeks is a shopping mall which sells clothes, sticker and 3D printed objects for IT geeks." 
		},
		{
			"employer": "9flava",
			"title": "Marketing Intern",
			"location": "Seoul",
			"dates": "January 2013 ~ March 2013",
			"description": "9Flava is the Kroean developer of Wepass, a mobile card service that provides target marketing to businesses through its point card system and data analysis. I was a marketing intern."
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "Wearable Weekly",
			"dates": "March 2014 ~",
			"description": "Ingi Kim and David Lee talks about Google Glass, Smart Watches and Wearable Technology.",
			"images": ["images/wearable_weekly.jpg"]
		},
		{
			"title": "Wearable 2048",
			"dates": "May 2014",
			"description": "Modified by Ingi Kim and designed by Jay Jin, based on 2048 by Gabriele Cirulli, which was in turn based on 1024 by Veewo Studio and conceptually similar to Threes by Asher Vollmer.",
			"images": ["images/wearable2048.jpg"]
		},
		{
			"title": "Portfolio Mockup to Website",
			"dates": "October 2014",
			"description": "Udacity Front-End Web Developer Nanodegree Project 1 associated with Intro to HTML and CSS course",
			"images": ["images/portfolio_mockup.jpg"]
		}
	]
};


if(bio.skills.length > 0) {

	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);

};

function displayWork() {
	for(job in work.jobs) {
		// create new div for work experience
		$("#workExperience").append(HTMLworkStart);
		// concat employer and title
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	};	
};

displayWork();



/* function locationizer(work_obj) {
	var locationArray = [];

	for (job in work_obj.jobs) {
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}

	return locationArray;
} */


/* function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice[1].toLowerCase();

	return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton); */


projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

projects.display();


$("#mapDiv").append(googleMap);












