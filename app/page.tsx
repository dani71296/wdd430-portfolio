import ProjectList from "@/components/ProjectList";

const projects = [
  {
    title: "Eco-Tours Tacana",
    description:
      "A web application for a tourism company operating in Bolivia, offering local tours and eco-friendly travel experiences.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "APIs",
    ],
    link: "https://turijose.vercel.app",
  },
  {
    title: "SleepOutside",
    description:
      "An e-commerce team project featuring product listings, a shopping cart, and checkout workflows.",
    technologies: ["JavaScript", "HTML5", "CSS3", "Git"],
    link: "https://sleepoutside-daniel.onrender.com/",
  },
];

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6">

      {/* Hero */}
      <section className="relative py-24 md:py-32">

        {/* Decorative glow */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-72 h-72 bg-sky-500/10 blur-3xl rounded-full pointer-events-none" />

        <div className="relative max-w-3xl">
          <p className="text-sm font-medium text-sky-400 mb-5 tracking-wide">
            SOFTWARE DEVELOPER
          </p>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
            Building things
            <br />
            <span className="text-slate-400">for the web.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg md:text-xl text-slate-400 leading-relaxed">
            I&apos;m Daniel Tudela, a software development student focused on
            building modern web applications with React, Next.js and
            JavaScript.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center rounded-lg bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-sky-300 transition-colors"
            >
              View my work
              <span className="ml-2">↓</span>
            </a>

            <a
              href="/about"
              className="inline-flex items-center rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200 hover:border-slate-500 hover:bg-slate-900 transition-all"
            >
              About me
            </a>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="pb-20">

        <div className="mb-8">
          <p className="text-sm font-medium text-sky-400 mb-2">
            SELECTED WORK
          </p>

          <h2 className="text-3xl font-bold text-white">
            Recent projects
          </h2>

          <p className="mt-2 text-slate-500">
            A selection of projects I&apos;ve worked on while developing my
            skills.
          </p>
        </div>

        <ProjectList projects={projects} />

      </section>

    </main>
  );
}