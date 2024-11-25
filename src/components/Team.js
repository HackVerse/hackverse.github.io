import React from 'react';
import HoverEffect from './ui/card-hover-effect-2';

 /* team members info */

const teamMembers = {
  patron: [
    {
      name: "Patron Name",
      short_desc: "Patron Title",
      image: "img/person.png",
      twitter_url: "https://twitter.com/patron",
      github_url: "https://github.com/patron",
      linkedin_url: "https://linkedin.com/in/patron",
    },
  ],
  facultyAdvisors: [
    {
      name: "Faculty Advisor 1",
      short_desc: "Advisor Title",
      image: "img/person.png",
      twitter_url: "https://twitter.com/advisor1",
      github_url: "https://github.com/advisor1",
      linkedin_url: "https://linkedin.com/in/advisor1",
    },
    {
      name: "Faculty Advisor 2",
      short_desc: "Advisor Title",
      image: "img/person.png",
      twitter_url: "https://twitter.com/advisor2",
      github_url: "https://github.com/advisor2",
      linkedin_url: "https://linkedin.com/in/advisor2",
    },
    {
      name: "Faculty Advisor 3",
      short_desc: "Advisor Title",
      image: "img/person.png",
      twitter_url: "https://twitter.com/advisor3",
      github_url: "https://github.com/advisor3",
      linkedin_url: "https://linkedin.com/in/advisor3",
    },
  ],
  advisoryCommittee: [
    {
      name: "Committee Member 1",
      short_desc: "Committee Title",
      image: "img/person.png",
      twitter_url: "https://twitter.com/committee1",
      github_url: "https://github.com/committee1",
      linkedin_url: "https://linkedin.com/in/committee1",
    },
    // Add 5 more committee members here
  ],
  studentTeam: [
    {
      name: "Student Member 1",
      short_desc: "Student Title",
      image: "img/person.png",
      twitter_url: "https://twitter.com/student1",
      github_url: "https://github.com/student1",
      linkedin_url: "https://linkedin.com/in/student1",
    },
    {
        name: "Student Member 1",
        short_desc: "Student Title",
        image: "img/person.png",
        twitter_url: "https://twitter.com/student1",
        github_url: "https://github.com/student1",
        linkedin_url: "https://linkedin.com/in/student1",
      },
      {
        name: "Student Member 1",
        short_desc: "Student Title",
        image: "img/person.png",
        twitter_url: "https://twitter.com/student1",
        github_url: "https://github.com/student1",
        linkedin_url: "https://linkedin.com/in/student1",
      },
      {
        name: "Student Member 1",
        short_desc: "Student Title",
        image: "img/person.png",
        twitter_url: "https://twitter.com/student1",
        github_url: "https://github.com/student1",
        linkedin_url: "https://linkedin.com/in/student1",
      },
      {
        name: "Student Member 1",
        short_desc: "Student Title",
        image: "img/person.png",
        twitter_url: "https://twitter.com/student1",
        github_url: "https://github.com/student1",
        linkedin_url: "https://linkedin.com/in/student1",
      },
      {
        name: "Student Member 1",
        short_desc: "Student Title",
        image: "img/person.png",
        twitter_url: "https://twitter.com/student1",
        github_url: "https://github.com/student1",
        linkedin_url: "https://linkedin.com/in/student1",
      },
      {
        name: "Student Member 1",
        short_desc: "Student Title",
        image: "img/person.png",
        twitter_url: "https://twitter.com/student1",
        github_url: "https://github.com/student1",
        linkedin_url: "https://linkedin.com/in/student1",
      },
      {
        name: "Student Member 1",
        short_desc: "Student Title",
        image: "img/person.png",
        twitter_url: "https://twitter.com/student1",
        github_url: "https://github.com/student1",
        linkedin_url: "https://linkedin.com/in/student1",
      },
      {
        name: "Student Member 1",
        short_desc: "Student Title",
        image: "img/person.png",
        twitter_url: "https://twitter.com/student1",
        github_url: "https://github.com/student1",
        linkedin_url: "https://linkedin.com/in/student1",
      },
      {
        name: "Student Member 1",
        short_desc: "Student Title",
        image: "img/person.png",
        twitter_url: "https://twitter.com/student1",
        github_url: "https://github.com/student1",
        linkedin_url: "https://linkedin.com/in/student1",
      },
      {
        name: "Student Member 1",
        short_desc: "Student Title",
        image: "img/person.png",
        twitter_url: "https://twitter.com/student1",
        github_url: "https://github.com/student1",
        linkedin_url: "https://linkedin.com/in/student1",
      },
      {
        name: "Student Member 1",
        short_desc: "Student Title",
        image: "img/person.png",
        twitter_url: "https://twitter.com/student1",
        github_url: "https://github.com/student1",
        linkedin_url: "https://linkedin.com/in/student1",
      },
      {
        name: "Student Member 1",
        short_desc: "Student Title",
        image: "img/person.png",
        twitter_url: "https://twitter.com/student1",
        github_url: "https://github.com/student1",
        linkedin_url: "https://linkedin.com/in/student1",
      },
      {
        name: "Student Member 1",
        short_desc: "Student Title",
        image: "img/person.png",
        twitter_url: "https://twitter.com/student1",
        github_url: "https://github.com/student1",
        linkedin_url: "https://linkedin.com/in/student1",
      },
      {
        name: "Student Member 1",
        short_desc: "Student Title",
        image: "img/person.png",
        twitter_url: "https://twitter.com/student1",
        github_url: "https://github.com/student1",
        linkedin_url: "https://linkedin.com/in/student1",
      }
    
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
        <Section title="Faculty Advisors" members={teamMembers.facultyAdvisors} />
        <Section title="Advisory Committee" members={teamMembers.advisoryCommittee} />
        <Section title="Student Team" members={teamMembers.studentTeam} />
      </div>
    </div>
  );
}

const Section = ({ title, members }) => (
    <div className="py-10">
      <h2 className="text-5xl font-bold text-center text-white mb-8">
        <span className="bg-[#7B181D] px-4 pb-2">{title}</span>
      </h2>
      <HoverEffect items={members} className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center" />
    </div>
  );

export default Team;
