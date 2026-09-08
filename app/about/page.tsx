import SkillCard from "@/components/SkillCard";

export default function About() {
    return (
        <main className="max-w-6xl mx-auto px-6">

            {/* Introduction */}
            <section className="py-20 md:py-28">
                <div className="max-w-3xl">

                    <p className="text-sm font-medium text-sky-400 mb-4 tracking-wide">
                        ABOUT ME
                    </p>

                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight mb-8">
                        Engineering mindset.
                        <br />
                        <span className="text-slate-400">
                            Software solutions.
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
                        I am a software development student with a background in
                        engineering, currently expanding my expertise in full-stack web
                        development using modern technologies such as Next.js, React, and
                        TypeScript.
                    </p>

                    <p className="mt-5 text-lg text-slate-400 leading-relaxed">
                        I enjoy solving practical problems, learning new technologies, and
                        turning ideas into functional and reliable applications.
                    </p>

                </div>
            </section>

            {/* Skills */}
            <section className="pb-20">

                <div className="mb-10">
                    <p className="text-sm font-medium text-sky-400 mb-2 tracking-wide">
                        WHAT I USE
                    </p>

                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Technical skills
                    </h2>

                    <p className="mt-3 max-w-2xl text-slate-500">
                        Technologies and tools I&apos;ve been working with throughout my
                        development journey.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">

                    <SkillCard
                        category="Frontend Development"
                        skills={[
                            "React",
                            "Next.js",
                            "TypeScript",
                            "Tailwind CSS",
                            "HTML/CSS",
                        ]}
                    />

                    <SkillCard
                        category="Backend & Tools"
                        skills={[
                            "Node.js",
                            "Express",
                            "PostgreSQL",
                            "MongoDB",
                            "Git & GitHub",
                        ]}
                    />

                </div>

            </section>

        </main>
    );
}