interface SkillCardProps {
    category: string;
    skills: string[];
}

export default function SkillCard({ category, skills }: SkillCardProps) {
    return (
        <div className="group rounded-2xl border border-slate-800 bg-[#111827] p-6 transition-all duration-300 hover:border-slate-700 hover:bg-[#151e2d]">

            <h3 className="text-lg font-bold text-white mb-5">
                {category}
            </h3>

            <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                    <span
                        key={index}
                        className="rounded-md border border-slate-700 bg-slate-900/60 px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors group-hover:border-slate-600"
                    >
                        {skill}
                    </span>
                ))}
            </div>

        </div>
    );
}