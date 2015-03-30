var awesomeThoughts = "Accomplished, results-driven technology management professional with proven record of success in product development and management, business development, and program leadership. Highly adept at directing product planning, design, engineering, and delivery. Special expertise in strategic planning, change management, risk mitigation, and sales. Able to lead complete product life cycles, build and supervise effective teams, and administer budgets. Familiar with venture fund acquisition. International experience in product design management. Experienced at founding and running companies.";

var bio = {
	"name" : "Craig Williams",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "209-608-7088",
		"email" : "craigwll2@gmail.com",
		"github" : "https://github.com/craigwll2/",
		"twitter" : "@CraigWll2",
		"location" : "Stockton, California"
	},
	"welcomeMessage" : awesomeThoughts,
	"skills" : ["Technology Operations", "Program/Project Management", "Product Development", "Conceptualization", "Strategic Planning", "Entrepreneurship", "Software Development", "Product Launch Management", "Sales Partnership Relations", "Process Management", "Budget/Cost Control", "Product Lifecycle Management", "New Product Introduction", "Risk Mitigation", "Business Development", "Venture Funding", "Innovation"],
	"bioPic" : "images/craig_100k.jpg"
}

var work = {
	"jobs": [
		{
			"employer": "AT&T",
			"title": "Area Manager New Technology Product Development",
			"location": "Redmond, Washington",
			"dates": "2010 - Present",
			"description": "Manage teams that execute business and technical implementation strategies and ensure successful product delivery across multiple platforms using AT&T process guidelines. These responsibilities include developing requirements, managing project scope, schedule, and cost, identifying and mitigating risks across diverse cross-functional teams."
		},
		{
			"employer": "frog design",
			"title": "Executive Director / Client Partner",
			"location": "San Francisco, California",
			"dates": "2003 - 2010",
			"description": "Oversaw large, complex product development projects for Fortune 100 company clients of $90M consulting company. Clients included Intel, Disney, Microsoft, AT&T, Cisco, and others. Carried out project planning, tracking, budgeting, and product design and delivery management. Supervised project teams of up to 100 at sites worldwide. Built and maintained client relationships at senior executive level. Developed and delivered documentation and presentations."
		}
	]
}

var projects = {
	"projects": [
		{
			"title": "craigwilliamsonline.com",
			"dates": "2010",
			"description": "Personal site for my resume.",
			"images": [""]
		},
		{
			"title": "Bear Creek Reserve",
			"dates": "2015",
			"description": "Bear Creek Reserve; a hidden jewel in the heart of Georgia. Located approximately 20 miles East of Macon in the town of Dry Branch; Totaling 2,400 acres, this wildlife sanctuary has recently been acquired by a father and son hoping to entertain business clients and personal acquaintances with quality outdoor experiences.",
			"images": [""]
		},
		{
			"title": "Trigger & Trebble",
			"dates": "2014",
			"description": "Outdoors blog built for a friend.",
			"images": [""]
		}
	]
}

var education = {
	"schools": [
		{
			"name": "Ohio University",
			"location": "Athens, Ohio",
			"degree": "Bachelors of Science",
			"major": ["Biology", "Chemistry"],
			"dates": 1982,
			"url": "http://www.ohio.edu"
		},
		{
			"name": "Denver University",
			"location": "Denver, Colorado",
			"degree": "Masters",
			"major": ["Business Administration"],
			"dates": 1997,
			"url": "http://www.du.edu"
		}
	],
	"onlineCourses": [
		{
			"title": "FrontEnd Web Development",
			"school": "Udacity",
			"dates": 2015,
			"url": "http://www.udacity.com"
		}
	]
}

var formattedheaderName = HTMLheaderName.replace("%data%", bio.name);
var formattedheaderRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedBioLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);

$("#header").prepend(formattedheaderRole);
$("#header").prepend(formattedheaderName);

$("#topContacts").append(formattedMobile)
	.append(formattedEmail)
	.append(formattedGithub)
	.append(formattedTwitter)
	.append(formattedBioLocation);

$("#footerContacts").append(formattedMobile)
	.append(formattedEmail)
	.append(formattedGithub)
	.append(formattedTwitter)
	.append(formattedBioLocation);


$("#header").append(formattedBioPic);
$("#header").append(formattedMessage);

if (bio.skills.length > 0) {
		$('#header').append(HTMLskillsStart);
		for(skill in bio.skills) {
			var formattedSkills = HTMLskills.replace("%data%",bio.skills[skill]);
			$("#skills").append(formattedSkills);
};
};

for (job in work.jobs){
	$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

		var formattedEmployerTitle = formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription;

		$(".work-entry:last").append(formattedEmployerTitle);
};

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
};
projects.display();

education.display = function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		$(".education-entry:last").append(formattedSchoolName);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedSchoolLocation);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedSchoolDegree);
		if (education.schools[school].major.length > 0) {
			for (degree in education.schools[school].major) {
				var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major[degree]);
				$(".education-entry:last").append(formattedSchoolMajor);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedSchoolDates);
			}
		}
	}
	if (education.onlineCourses.length > 0) {
		$(".education-entry:last").append(HTMLonlineClasses);
		for (courses in education.onlineCourses) {
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[courses].title);
			$(".education-entry:last").append(formattedOnlineTitle);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[courses].school);
			$(".education-entry:last").append(formattedOnlineSchool);
			var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[courses].dates);
			$(".education-entry:last").append(formattedOnlineDates);
			var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[courses].url);
			$(".education-entry:last").append(formattedOnlineURL);
		}
	}
};
education.display();

	function inName(name) {
		console.log(name);
		name = name.trim().split(" ");
		name[1] = name[1].toUpperCase();
		name[0] = name[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
		return name[0] +" "+name[1];
};

$('#main').append(internationalizeButton);
$("#mapDiv").append(googleMap);