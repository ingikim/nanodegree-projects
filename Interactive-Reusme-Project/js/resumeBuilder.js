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
	"bioPic": "images/profile.jpg",
	display: function () {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
		var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

		$("#header").prepend(formattedName + formattedRole);
		$("#topContacts").append(formattedMobile + formattedEmail + formattedTwitter + formattedGithub + formattedLocation);
		$("#footerContacts").append(formattedMobile + formattedEmail + formattedTwitter + formattedGithub + formattedLocation);	
		$("#header").append(formattedBioPic);	
		$("#header").append(formattedWelcomeMsg);
		$("#header").append(HTMLskillsStart);
		for (skill in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}
	}
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
		},
		{
			"name": "University of Central Florida",
			"location": "Orlando, FL",
			"degree": "Studying Abroad Program",
			"majors": ["Hotel & Tourism"],
			"dates": "July 2012 ~ August 2012",
			"url": "http://www.ucf.edu"
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
	],
	displayschools: function() {
		for (school in education.schools) {
			$("#education").append(HTMLschoolStart);
			var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
			formattedName = formattedName.replace("#", education.schools[school].url);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);			
			$(".education-entry:last").append(formattedName + formattedDegree);
			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			$(".education-entry:last").append(formattedDates);
			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			$(".education-entry:last").append(formattedLocation);
			var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
			$(".education-entry:last").append(formattedMajors);
		}
	},
	displayOnlineCourses: function() {
		if (education.onlineCourses.length > 0 ) {
			$("#education").append(HTMLonlineClasses);
			for (course in education.onlineCourses) {
				$("#education").append(HTMLschoolStart);
				var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
				formattedTitle = formattedTitle.replace("#", education.onlineCourses[course].url);
				var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
				$(".education-entry:last").append(formattedTitle + formattedSchool);
				var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
				$(".education-entry:last").append(formattedDates);
				var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
				formattedURL = formattedURL.replace("#", education.onlineCourses[course].url);
				$(".education-entry:last").append(formattedURL);
			}			
		}
	}
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
	],
	display: function() {
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
		}
	}
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
	],
	display: function() {
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
};


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


bio.display();
work.display();
projects.display();
education.displayschools();
education.displayOnlineCourses();
$("#mapDiv").append(googleMap);