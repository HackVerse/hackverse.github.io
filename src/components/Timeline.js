import { Timeline } from "./ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: (
        <div>
          <p className="mb-2">
            11 January 2025
          </p>
          <p className="text-white dark:text-neutral-400 text-lg md:text-2xl">
            08:30 AM
          </p>
        </div>
      ),
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xl md:text-3xl font-normal mb-4">
            Participants Check-in
          </p>
        </div>
      ),
    },
    {
      title: (
        <div>
          <p className="mb-2">
            11 January 2025
          </p>
          <p className="text-white dark:text-neutral-400 text-lg md:text-2xl">
            09:30 AM
          </p>
        </div>
      ),
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xl md:text-3xl font-normal mb-4">
            Opening Ceremony
          </p>
        </div>
      ),
    },
    {
      title: (
        <div>
          <p className="mb-2">
            11 January 2025
          </p>
          <p className="text-white dark:text-neutral-400 text-lg md:text-2xl">
            10:30 AM
          </p>
        </div>
      ),
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xl md:text-3xl font-normal mb-4">
            Opening Announcement
          </p>
        </div>
      ),
    },
    {
      title: (
        <div>
          <p className="mb-2">
            11 January 2025
          </p>
          <p className="text-white dark:text-neutral-400 text-lg md:text-2xl">
            11:00 AM
          </p>
        </div>
      ),
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xl md:text-3xl font-normal mb-4">
            Talk/Speaker Session
          </p>
        </div>
      ),
    },
    {
      title: (
        <div>
          <p className="mb-2">
            11 January 2025
          </p>
          <p className="text-white dark:text-neutral-400 text-lg md:text-2xl">
            12:00 PM
          </p>
        </div>
      ),
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xl md:text-3xl font-normal mb-4">
            Coding Begins
          </p>
        </div>
      ),
    },
    {
      title: (
        <div>
          <p className="mb-2">
            11 January 2025
          </p>
          <p className="text-white dark:text-neutral-400 text-lg md:text-2xl">
            03:00 PM
          </p>
        </div>
      ),
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xl md:text-3xl font-normal mb-4">
            Talk 1
          </p>
        </div>
      ),
    },
    {
      title: (
        <div>
          <p className="mb-2">
            11 January 2025
          </p>
          <p className="text-white dark:text-neutral-400 text-lg md:text-2xl">
            05:00 PM
          </p>
        </div>
      ),
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xl md:text-3xl font-normal mb-4">
            Networking Session
          </p>
        </div>
      ),
    },
    {
      title: (
        <div>
          <p className="mb-2">
            11 January 2025
          </p>
          <p className="text-white dark:text-neutral-400 text-lg md:text-2xl">
            11:00 PM
          </p>
        </div>
      ),
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xl md:text-3xl font-normal mb-4">
            Midnight Evaluations
          </p>
        </div>
      ),
    },
    {
      title: (
        <div>
          <p className="mb-2">
            12 January 2025
          </p>
          <p className="text-white dark:text-neutral-400 text-lg md:text-2xl">
            12:00 AM
          </p>
        </div>
      ),
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xl md:text-3xl font-normal mb-4">
            Midnight Evaluations
          </p>
        </div>
      ),
    },
    {
      title: (
        <div>
          <p className="mb-2">
            12 January 2025
          </p>
          <p className="text-white dark:text-neutral-400 text-lg md:text-2xl">
            12:00 PM
          </p>
        </div>
      ),
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xl md:text-3xl font-normal mb-4">
            Coding Ends and Judging Begins
          </p>
        </div>
      ),
    },
    {
      title: (
        <div>
          <p className="mb-2">
            12 January 2025
          </p>
          <p className="text-white dark:text-neutral-400 text-lg md:text-2xl">
            01:00 PM
          </p>
        </div>
      ),
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xl md:text-3xl font-normal mb-4">
            Live Exhibitions
          </p>
        </div>
      ),
    },
    {
      title: (
        <div>
          <p className="mb-2">
            12 January 2025
          </p>
          <p className="text-white dark:text-neutral-400 text-lg md:text-2xl">
            05:00 PM
          </p>
        </div>
      ),
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xl md:text-3xl font-normal mb-4">
            Announcement of top 10 teams
          </p>
        </div>
      ),
    },
    {
      title: (
        <div>
          <p className="mb-2">
            12 January 2025
          </p>
          <p className="text-white dark:text-neutral-400 text-lg md:text-2xl">
            05:00 PM
          </p>
        </div>
      ),
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xl md:text-3xl font-normal mb-4">
            Live Judging of Top 10 Teams
          </p>
        </div>
      ),
    },
    {
      title: (
        <div>
          <p className="mb-2">
            12 January 2025
          </p>
          <p className="text-white dark:text-neutral-400 text-lg md:text-2xl">
            05:30 PM
          </p>
        </div>
      ),
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xl md:text-3xl font-normal mb-4">
            Results Announcement and Closing Ceremony
          </p>
        </div>
      ),
    },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center bg-black text-white overflow-hidden">
      {/* dot background */}
      <div className="absolute inset-0 w-full h-full bg-[#080808]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3Cpattern id=\'dot-pattern\' patternUnits=\'userSpaceOnUse\' width=\'30\' height=\'30\'%3E%3Ccircle cx=\'15\' cy=\'15\' r=\'2\' fill=\'%23666\' /%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\'100\' height=\'100\' fill=\'url(%23dot-pattern)\' /%3E%3C/svg%3E")' }}></div>

      {/* Mobile timeline background */}
      <div 
        className="absolute inset-0 w-full h-full bg-right bg-cover md:hidden" 
        style={{ backgroundImage: 'url("backgrounds/bg-timeline-mobile.png")' }}
      ></div>

      {/* Desktop timeline background */}
      <div 
        className="absolute inset-0 w-full h-full bg-right bg-cover hidden md:block" 
        style={{ backgroundImage: 'url("backgrounds/bg-timeline.png")' }}
      ></div>

      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto pt-10 pb-[-5] px-4 md:px-8 lg:px-0">
        <h2 className="text-4xl md:text-6xl mt-4 -mb-44 font-bold text-white dark:text-white max-w-4xl">
          HEIST <span className="bg-[#7B181D] px-4 pb-2">TIMELINE</span>
        </h2>
      </div>

      <Timeline data={data} />
    </section>
  );
}