interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    link?: string;
}

export default function ProjectCard({
    title,
    description,
    technologies,
    link,
}: ProjectCardProps) {
    return (
        <article className="group relative rounded-2xl border border-slate-800 bg-[#111827] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-slate-700 hover:bg-[#151e2d]">

            {/* Project number */}
            <div className="flex items-start justify-between mb-6">
                <span className="text-xs font-medium tracking-widest text-slate-600">
                    PROJECT
                </span>

                <span className="text-slate-600 group-hover:text-sky-400 transition-colors">
                    ↗
                </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-white tracking-tight mb-3">
                {title}
            </h3>

            {/* Description */}
            <p className="text-sm text-slate-400 leading-relaxed mb-7">
                {description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-7">
                {technologies.map((technology) => (
                    <span
                        key={technology}
                        className="rounded-md border border-slate-700/80 bg-slate-900/60 px-2.5 py-1 text-xs text-slate-400"
                    >
                        {technology}
                    </span>
                ))}
            </div>

            {/* Link */}
            {link && (
                <a
                    href={link.startsWith("http") ? link : `https://${link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors"
                >
                    View project
                    <span className="ml-2 transition-transform group-hover:translate-x-1">
                        →
                    </span>
                </a>
            )}
        </article>
    );
}