import React from 'react';
import HoverEffect from './ui/card-hover-effect-2';

 /* team members info */

 const teamMembers = {
  patron: [
    {
      name: "Prof. B Ravi",
      short_desc: "Director",
      email: "director@nitk.edu.in",
      linkedin_url: "https://www.linkedin.com/in/prof-b-ravi",
      twitter_url: "",
      image: "/team/director.jpg",
    },
    {
      name: "Prof. Subhash C. Yaragal",
      short_desc: "Deputy Director",
      email: "dydirector@nitk.edu.in",
      linkedin_url: "https://www.linkedin.com",
      twitter_url: "",
      image: "/team/deputy_director.jpeg",
    },
  ],

  facultyAdvisors: [
    {
      name: "Dr. Basavaraj Talawar",
      short_desc: "Assistant Professor",
      email: "basavaraj@nitk.edu.in",
      linkedin_url: "https://www.linkedin.com/in/basavarajtalwar/",
      twitter_url: "",
      image: "/team/basavaraj_associate.jpeg",
    },
    {
      name: "Dr. Sowmya Kamath S.",
      short_desc: "Assistant Professor",
      email: "sowmyakamath@nitk.edu.in",
      linkedin_url: "https://www.linkedin.com/in/sowmya-kamath-nitk/",
      twitter_url: "",
      image: "/team/sowmya_associate.jpg",
    },
    {
      name: "Dr. Suprabha K. R.",
      short_desc: "Assistant Professor",
      email: "suprabha@nitk.ac.in",
      linkedin_url: "",
      twitter_url: "",
      image: "/team/suprabha_associate.jpg",
    },
  ],

  advisoryCommittee: [
    {
      name: "Prof. A Chitharanjan Hegde",
      short_desc: "Dean (Students Welfare)",
      email: "deansw@nitk.edu.in",
      linkedin_url: "https://www.linkedin.com/in/prof-a-chitharanjan-hegde-4a51154b/",
      twitter_url: "",
      image: "/team/dean_student.jpg",
    },
    {
      name: "Prof. Udaya Bhat",
      short_desc: "Dean (Research & Consultancy)",
      email: "dean.rc@nitk.edu.in",
      linkedin_url: "https://www.linkedin.com/in/udaya-bhat-k-55996a71/",
      twitter_url: "",
      image: "/team/dean_research.jpg",
    },
    {
      name: "Prof. Dwarakish G S",
      short_desc: "Dean (Academic)",
      email: "deanacademic@nitk.edu.in",
      linkedin_url: "https://www.linkedin.com",
      twitter_url: "",
      image: "/team/dean_academic.jpg",
    },
    {
      name: "Prof. Shreekantha S. Rao",
      short_desc: "Dean (Alumni & Corporate Relations)",
      email: "deanaair@nitk.edu.in",
      linkedin_url: "https://www.linkedin.com/in/alumni-and-corporate-relations-dean-nitk-surathkal-02b328172/",
      twitter_url: "",
      image: "/team/dean_corporate.jpg",
    },
    {
      name: "Prof. Gangadharan K V",
      short_desc: "Dean (Planning & Development)",
      email: "deanpd@nitk.edu.in",
      linkedin_url: "https://www.linkedin.com/in/kvganga/",
      twitter_url: "",
      image: "/team/dean_planning.jpg",
    },
    {
      name: "Prof. T. Laxminidhi",
      short_desc: "Dean (Faculty Welfare)",
      email: "deanfw@nitk.edu.in",
      linkedin_url: "https://www.linkedin.com/in/laxminidhi-t-undefined-0b9159242/",
      twitter_url: "",
      image: "/team/dean_faculty.jpg",
    },
    {
      name: "Shashi Bhushan Arya",
      short_desc: "Associate Professor",
      email: "sbarya@nitk.edu.in",
      linkedin_url: "",
      twitter_url: "",
      image: "/team/shashi_associate.png",
    },
  ],

  studentTeam: [
    {
      name: "Student Member 1",
      short_desc: "Student Title",
      email: "",
      linkedin_url: "https://linkedin.com/in/student1",
      twitter_url: "https://twitter.com/student1",
      image: "/team/person.png",
    },
    {
      name: "Student Member 2",
      short_desc: "Student Title",
      email: "",
      linkedin_url: "https://linkedin.com/in/student2",
      twitter_url: "https://twitter.com/student2",
      image: "/team/person.png",
    },
    {
      name: "Student Member 3",
      short_desc: "Student Title",
      email: "",
      linkedin_url: "https://linkedin.com/in/student3",
      twitter_url: "https://twitter.com/student3",
      image: "/team/person.png",
    },
    {
      name: "Student Member 4",
      short_desc: "Student Title",
      email: "",
      linkedin_url: "https://linkedin.com/in/student4",
      twitter_url: "https://twitter.com/student4",
      image: "/team/person.png",
    },
    {
      name: "Student Member 5",
      short_desc: "Student Title",
      email: "",
      linkedin_url: "https://linkedin.com/in/student5",
      twitter_url: "https://twitter.com/student5",
      image: "/team/person.png",
    },
  ],
};


export function Team() {
  return (
    <div className="relative bg-[#080808] w-full pt-16 overflow-hidden">
      {/* Dot background with radial fade */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='dot-pattern' patternUnits='userSpaceOnUse' width='30' height='30'%3E%3Ccircle cx='15' cy='15' r='2' fill='%23666' /%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23dot-pattern)' /%3E%3C/svg%3E")`,
          maskImage: "radial-gradient(ellipse at center, black, transparent 70%)"
        }}
      ></div>
      {/* extra radial fade for the black background */}
      <div
        className="absolute inset-0 w-full h-full bg-black"
        style={{
          opacity: 0.9,
          maskImage: "radial-gradient(ellipse at center, black, transparent 70%)"
        }}
      ></div>
      <div className="relative z-10">
        <Section title="Patron" members={teamMembers.patron} />
        <Section title="Advisory Committee" members={teamMembers.advisoryCommittee} />
        <Section title="Faculty Advisors" members={teamMembers.facultyAdvisors} />
        {/* <Section title="Student Team" members={teamMembers.studentTeam} /> */}
      </div>
    </div>
  );
}

const Section = ({ title, members }) => (
    <div className="py-10">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-8">
        <span className="bg-[#7B181D] px-4 pb-2">{title}</span>
      </h2>
      <HoverEffect items={members} className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center" />
    </div>
  );

export default Team;
