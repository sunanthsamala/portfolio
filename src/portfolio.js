/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello ",
  title2: "Sunanth",
  logo_name: "{Sunanth Samala}",
  // nickname: "harry / picleric",
  full_name: "Sunanth Samala",
  subTitle:
    "Full Stack Developer,  Mobile App Developer.",
  resumeLink:
    "https://drive.google.com/file/d/1aJGF8Nvi0q5ovjZ7nHCHMpKcYZxxd5Ov/view?usp=sharing",
  mail: "mailto:sunanth.samala1999@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  linkedin: "https://www.linkedin.com/in/sunanth-samala-818b2b169?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B0a8OG9NKSYizJO1W4j39ug%3D%3D",
  gmail: "sunanth.samala1999@gmail.com",
  facebook: "https://www.facebook.com/sunanthsamala/",
  instagram: "https://www.instagram.com/sunanthsamala/",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive User Interfaces and Backend for web applications",
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Creating application backend in Node, Express, Flask and Django",
        "⚡ Integration of third party services such as Firebase",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#563d7c",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        
       
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            color: "#0c4b33",
          },
        },
       
         {
           skillName: "Android",
          fontAwesomeClassname: "simple-icons:android",
           style: {
            color: "#3DDC84",
           },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },
         {
           skillName: "Flutter",
           fontAwesomeClassname: "simple-icons:flutter",
           style: {
             color: "#02569B",
           },
         },
         {
           skillName: "Dart",
           fontAwesomeClassname: "simple-icons:dart",
           style: {
             color: "#29B0EE",
           },
         },
        
         {
           skillName: "Wordpress",
           fontAwesomeClassname: "simple-icons:wordpress",
           style: {
             color: "#207297",
           },
         },
        
        
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing websites",
        "⚡ Experience with Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
       
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#5b77ef",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Anurag group of institutions",
      subtitle: "Bachelors in Computer Science and Engineering",
      logo_path: "anurag.jpeg",
      alt_name: "",
      duration: "2017 - 2021",
      descriptions: [
        
         "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
         "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
         "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
      ],
      website_link: "https://anurag.edu.in",
    },
  ],
};


// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "I've completed three internship during my 4 years of B.Tech and worked as an full stack developer . I've mostly done projects on my own and I am actively looking for full time job. ",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Full stack developer",
          company: "Allied Technologies",
          company_url: "https://www.alliedtechnologies.io",
          logo_path: "allogo.png",
          duration: "Aug 2021 - Nov 2021",
          location: "Remote",
          description: "my role as a full stack developer was to interact with clients and develop websites and mobile applications where i used react js , wordpress, shopify and react native to develope web and mobile applications",
          color: "#0071C5",
        },
        {
          title: "web developer Intern",
          company: "Farming For All",
          company_url: "http://farmingforall.in",
          logo_path: "logo.png",
          duration: "Aug 2020 - Sept 2020",
          location: "Remote",
          description: `Developed responsive website for the company to showcase the products which they are manufacturing using HTML, CSS, javascript and bootstrap
          `,
          color: "#ee3c26",
        },
        
        {
          title: "web developer Intern",
          company: "Amarpushp educational and welfare society",
          company_url: "https://amarpushp.org",
          logo_path: "amarpushp-logo.png",
          duration: "Aug 2018 - Sept 2018",
          location: "Remote",
          description: `Developed responsive website for the company  using HTML, CSS, javascript and bootstrap
          `,
          color: "#ee3c26",
        },
      ],
    },
    ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create React Frontend Projects. Below are some of my projects.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact ",
    profile_image_path: "me.jpeg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "",
    subtitle:
      "",
    link: "",
    avatar_image_path: "",
  },
};
const certifications = { 
certifications: [
    {
      title: "Google Cloud",
      subtitle: "Google Cloud Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1r0hYt8Pp0N0u_4Tg-poMF1Qv3LkoKVAP/view",
      alt_name: "MongoDB University",
      // color_code: "#2AAFED",
      color_code: "#2AAFED",
    },
    {
      title: "Hackathon",
      subtitle: "Backyard Hacks 2.0",
      logo_path: "hackathon1.png",
      // certificate_link:
      //   "https://drive.google.com/file/d/1Y-HT1flWDfeyfnfqVr3ubNgGIcnuUEYt/view?usp=sharing",
      alt_name: "hackathon",
      color_code: "#f47e2c",
    },
    {
      title: "Hackathon",
      subtitle: "HyperHacks",
      logo_path: "hackathon2.png",
      // certificate_link:
      //   "https://drive.google.com/file/d/1Y-HT1flWDfeyfnfqVr3ubNgGIcnuUEYt/view?usp=sharing",
      alt_name: "hackathon",
      color_code: "#E2405F",
    },
    // {
    //   title: "A300: Atlas Security",
    //   subtitle: "MongoDB University",
    //   logo_path: "mongo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/12u_tkvhgB-K2TIm-RDdJOwYbQ9ccqiqA/view?usp=sharing",
    //   alt_name: "MongoDB University",
    //   // color_code: "#F6B808",
    //   color_code: "#47A048",
    // },
    {
      title: "Contributor's Hack",
      subtitle: "Hakin Codes",
      logo_path: "HakinCodes.jfif",
      certificate_link:
        "https://drive.google.com/file/d/1xvyy1M05lQN-s2VKw_Qvz6E7rPwrK2qm/view?usp=sharing",
      alt_name: "Opensource Event",
      color_code: "#fefd7b",
    },
    // {
    //   title: "MLH Local Hack Day: Build",
    //   subtitle: "Major League Hacking",
    //   logo_path: "mlh-logo.svg",
    //   certificate_link:
    //     "https://drive.google.com/file/d/1ws7g2Oepu76vDFir6SvR_emFAMSkB2ZQ/view?usp=sharing",
    //   alt_name: "Google",
    //   color_code: "#fe0037",
    // },
    {
      title: "Olympiad",
      subtitle: "Ramanujan Mathematics Olympiad",
      logo_path: "Olympiad.png",
      certificate_link:
        "https://drive.google.com/file/d/1SAKHjKisJIY3-FRZQGKLusdsGDusXAjX/view",
      alt_name: "Postman",
      // color_code: "#f36c3d",
      color_code: "#fffbf3",
    },
    {
      title: "Competitive Programming",
      subtitle: "Reply Challenges",
      logo_path: "Reply.jfif",
      certificate_link:
        "https://drive.google.com/file/d/1KamrXJPTrF3zfMuEerbSnFUjOkt-agKT/view",
      alt_name: "Reply",
      color_code: "#2AAFED",
    },
    {
      title: "Competitive Programming",
      subtitle: "Google Hash Code",
      logo_path: "google_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1sD6GS8f2Fh5MHMWlf5DhXoMhu4mykW-f/view",
      alt_name: "Reply",
      color_code: "#2AAFED",
    },
    {
      title: "Training",
      subtitle: "30 Days of Open Source",
      logo_path: "CFC.jfif",
      certificate_link:
        "https://drive.google.com/file/d/1SAKHjKisJIY3-FRZQGKLusdsGDusXAjX/view",
      alt_name: "Postman",
      // color_code: "#f36c3d",
      color_code: "#a60000",
    },
    {
      title: "Training",
      subtitle: "Git Learning",
      logo_path: "Progate.png",
      certificate_link:
        "https://drive.google.com/file/d/1sD6GS8f2Fh5MHMWlf5DhXoMhu4mykW-f/view",
      alt_name: "Reply",
      color_code: "#88e7ce",
    },
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};
const projects = {
  data: [
    {
      id: "0",
      name: "messaging app",
      url: "#",
      description:
        "This  web application  helps people to create groups and chat with each other and is developed using react js , Styled Components and firebase .",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
       {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
     {
      id: "1",
      name: "music app",
      url: "#",
      description:
        "This  web application is same as that of spotify which lets people access all the music files and has all the functionalities of spotify and is developed using react js , Styled Components, spotify apk and firebase .",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
       {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
         {
      id: "2",
      name: "To Do app",
      url: "#",
      description:
        "This  Mobile Application is a To-Do app which lets users note down things which they want to do and delete the task after completion of the task. this is developed using react native and firebase it can run on both android and ios devices .",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
       {
          name: "ReacNative",
          iconifyClass: "logos-react",
        },
      ],
    },
         {
      id: "3",
      name: "Amazon Clone",
      url: "#",
      description:
        "This  web application is same as that of Amazon which lets people view products , checkout to cart and has all the functionalities of Amazon and is developed using react js , Styled Components and firebase .",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
       {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
         
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  experience,
  projectsHeader,
  certifications,
  contactPageData,
  projects,
};
