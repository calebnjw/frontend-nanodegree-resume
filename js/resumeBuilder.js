/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
  name: "finn human",
  role: "adventurer",
  contacts: {
    mobile: "+1 234 56789",
    email: "finn@ooo.com",
    github: "finn.github.io",
    twitter: "@finn",
    location: "Singapore",
  },
  welcomeMessage: "Hello there, I am finn the human!",
  skills: ["pancake making", "adventuring", "reading", "singing", "dancing"],
  biopic: "images/finn.png",
  // display: ,
};

var work = {
  jobs: [
    {
      employer: "Kingdom of Ooo",
      title: "Royal Adventurer",
      location: "Kingdom of Ooo",
      dates: "in progress",
      description: "Finn has the ability to mentally fight psychic abilities. The first time he shows this during the Lich's attempt to control his mind. The second time was against Goliad, as he was constantly able to manipulate his own thoughts in order to avoid revealing the plan to defeat her, allowing Princess Bubblegum to create Stormo. Finn can focus for a very long time as shown in 'Still' when he spends hours telepathically summoning an Astral Beast. As demonstrated in 'The Creeps,' Finn can lock unwanted memories in 'The Vault,' which is later seen in 'King Worm.' However, this is considered a normal human ability that occurs where certain memories are removed from consciousness if it is too painful or traumatic for them to recall. Finn also has the ability to read and write, and he can also do simple math. "
    },
    {
      employer: "Kingdom of Aaa",
      title: "Royal Adventurer",
      location: "Kingdom of Aaa",
      dates: "in progress",
      description: "Finn was, for a long time, the only confirmed human in the Land of Ooo. The reason for this is revealed in the episode 'Her Parents,' as Lady Rainicorn's dad believed that humans were extinct. "
    },
    {
      employer: "Kingdom of Eee",
      title: "Royal Adventurer",
      location: "Kingdom of Eee",
      dates: "in progress",
      description: "Finn for the first time saw large amounts of humans. Finn met his mother, Minerva while on the island. His mother is no longer a human and is now a virtual consciousness (A.I.) due to sacrificing her body in order to treat the human race from a virus. Finn was offered to live on the island but Finn decided to go home to Ooo rather than live with the rest of his species. So after the miniseries Islands, Finn being 'the last human' was completely dispelled. Though in the Islands CN Side, Adam Muto stated that Finn being the last human in the world was never the most important thing about him. "
    }
  ]
  // display: ,
};

var projects = {
  projects: [
    {
      title: "Hello World",
      dates: "1/1/2019",
      description: "Saying hello to the world.",
      images: ["https://miro.medium.com/max/1024/0*4ty0Adbdg4dsVBo3.png", "https://i.ytimg.com/vi/Yw6u6YkTgQ4/maxresdefault.jpg"]
    },
    {
      title: "Hello World",
      dates: "1/1/2019",
      description: "Saying hello to the world.",
      images: ["https://miro.medium.com/max/1024/0*4ty0Adbdg4dsVBo3.png", "https://i.ytimg.com/vi/Yw6u6YkTgQ4/maxresdefault.jpg"]
    },
    {
      title: "Hello World",
      dates: "1/1/2019",
      description: "Saying hello to the world.",
      images: ["https://miro.medium.com/max/1024/0*4ty0Adbdg4dsVBo3.png", "https://i.ytimg.com/vi/Yw6u6YkTgQ4/maxresdefault.jpg"]
    }
  ]
  // display: ,
};

var education = {
  schools: [
    {
      name: "School of Life",
      location: "Harvard University",
      degree: "Bachelors",
      majors: ["Adventuring", "Cooking", "Spell-casting"],
      dates: "20/10/2035 - 2/3/2039",
      // url: ,
    }
  ],
  onlineCourses: [
    {
      title: "Intro to Javascript",
      school: "Udacity",
      dates: "1/10/2040 - 8/10/2040",
      url: "https://classroom.udacity.com/courses/ud804",
    }
  ]
  // display: ,
};

// HTMLcontactGeneric
// HTMLmobile
// HTMLemail
// HTMLtwitter
// HTMLgithub
// HTMLblog
// HTMLlocation

// HTMLwelcomeMsg

$("#main").prepend(internationalizeButton);

var message = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").prepend(message);

var bioPicture = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").prepend(bioPicture);

var email = HTMLemail.replace("%data%", bio.contacts.email);
$("#header").prepend(email);

var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#header").prepend(mobile);

var role = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(role);

var name = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(name);

if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  bio.skills.forEach(function(skill, index) {
    var formattedSkills = HTMLskills.replace("%data%", skill);
    $("#skills").append(formattedSkills);
  });
}

if (work.jobs.length > 0) {
  work.jobs.forEach(function(job, index) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
    $(".work-entry:last").append(formattedEmployer + formattedTitle);

    var formattedDate = HTMLworkDates.replace("%data%", job.dates);
    $(".work-entry:last").append(formattedDate);

    var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
    $(".work-entry:last").append(formattedLocation);

    var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
    $(".work-entry:last").append(formattedDescription);
  });
}

// HTMLprojectStart
// HTMLprojectTitle
// HTMLprojectDates
// HTMLprojectDescription
// HTMLprojectImage

if (projects.projects.length > 0) {
  projects.projects.forEach(function(work, index) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", work.title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", work.dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDesc = HTMLprojectDescription.replace("%data%", work.description);
    $(".project-entry:last").append(formattedDesc);

    if (work.images.length > 0) {
      work.images.forEach(function(path) {
        var formattedImage = HTMLprojectImage.replace("%data%", path);
        $(".project-entry:last").append(formattedImage);
      });
    }
  });
}

$("#mapDiv").append(googleMap);
