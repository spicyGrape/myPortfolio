import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Shuaiting",
  lastName: "Li",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "BSc Computer Science Student",
  avatar: "/images/avatar.jpg",
  location: "Europe/London", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Mandarine"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally share interesting thoughts about tech and my life.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/spicyGrape",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/shuaiting-li-7589a02b6/",
  },
  //{
  //  name: "X",
  //  icon: "x",
  //  link: "",
  //},
  {
    name: "Email",
    icon: "email",
    link: "lishuaiting2003@outlook.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>CS Student at UCL</>,
  subline: (
    <>
      I'm Shuaiting,
      <br /> a BSc computer science student at <InlineCode>UCL</InlineCode>
      <br /> where I explore diverse areas of computer science and apply them in practice.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Shuaiting is a first-year BSc Computer Science student at UCL with a wide-ranging interest in areas
        such as artificial intelligence, web development, and computer architechture. Shuaiting enjoys working on
        projects that challenge him to learn new skills and apply his knowledge in practical ways.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "UCL",
        timeframe: "September 2024 - December 2024",
        role: "Transition mentor",
        achievements: [
          <>
            Led weekly meetings to support and guide eight new students in UCL's Foundation Program,
            addressing challenges and offering tailored advice.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          //{
          //  src: "/images/projects/project-01/cover-01.jpg",
          //  alt: "Once UI Project",
          //  width: 16,
          //  height: 9,
          //},
        ],
      },
      {
        company: "Getac",
        timeframe: "July 2024 - August 2024",
        role: "Assistant Engineer Intern",
        achievements: [
          <>
            Collaborated with senior engineers with developing, testing and deploying generative AI models,
            to optimize administrative workflow for 30+ non-tech administrative staffs
          </>,
          <>
            Utilized WinForm with C# for UI and Python for backend interaction with OpenAI API and other APIs
          </>,
          <>
            Communicated with non-tech clients and about demands and translated into developing documentations
          </>,
        ],
        images: [],
      },
      {
        company: "Student Union UCL",
        timeframe: "September 2023 - June 2024",
        role: "Academic Representitive",
        achievements: [
          <>
            Collected and organized feedback from 20+ cohorts about the Mathematics course
          </>,
          <>
            Spoke at meetings every term to convey collected feedback to the UCL teaching team
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University College London",
        description: <>BSc Computer Science</>,
      },
      //{
      //  name: "Build the Future",
      //  description: <>Studied online marketing and personal branding.</>,
      //},
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Python",
        description: <>Able to prototype with Python at a fast pace.</>,
        images:[],
      },
      {
        title: "Numpy/Pandas/Matplot",
        description: <>Able to perform data analysis and visualiztion with Python.</>,
        images:[],
      },
      {
        title: "Java",
        description: <>Able to write Onject-Oriented Programs.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          //{
          //  src: "/images/projects/project-01/cover-02.jpg",
          //  alt: "Project image",
          //  width: 16,
          //  height: 9,
          //},
          //{
          //  src: "/images/projects/project-01/cover-03.jpg",
          //  alt: "Project image",
          //  width: 16,
          //  height: 9,
          //},
        ],
      },
      {
        title: "Google App Script/Chrome API",
        description: <>Able to build, test and deplop Google Cloud Apps.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          //{
          //  src: "/images/projects/project-01/cover-04.jpg",
          //  alt: "Project image",
          //  width: 16,
          //  height: 9,
          //},
        ],
      },
      {
        title: "C/C++",
        description: <>Able to write program for embeded systems.
          <br />Able to write them in OO style if necessary.</>,
        images:[],
      },
      {
        title: "html & Javascript",
        description: <>Able to build and deploy static websites.</>,
        images:[],
      },
      {
        title: "Flutter",
        description: <>Able to develop mobile apps with Flutter.</>,
        images:[],
      },
      {
        title: "Haskell",
        description: <>Have an understanding of functional programming paradigm.</>,
        images:[],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
