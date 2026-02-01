import PageWrapper from "@/components/PageWrapper";
import { experiences } from "@/lib/data";

export default function ExperiencePage() {
  return (
    <PageWrapper title="Experience">
      <div className="w-full max-w-3xl space-y-8">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="rounded-xl border border-purple-400/40 bg-purple-950/80 p-6 backdrop-blur-md shadow-lg transition-all hover:border-purple-400/60"
          >
            <div className="mb-2 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
              <h3 className="text-xl font-bold text-white">{exp.title}</h3>
              <span className="text-sm text-purple-300">{exp.period}</span>
            </div>
            <p className="mb-4 text-purple-200">
              {exp.company} • {exp.location}
            </p>
            <ul className="space-y-2">
              {exp.items.map((item, j) => (
                <li key={j} className="flex items-start gap-2 text-gray-100">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}
