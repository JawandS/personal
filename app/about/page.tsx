import PageWrapper from "@/components/PageWrapper";
import { aboutData } from "@/lib/data";

export default function AboutPage() {
  const { languages, tools, certificates, courses, quickFacts } = aboutData;

  return (
    <PageWrapper title="About Me">
      <div className="w-full max-w-3xl space-y-6">
        <div className="rounded-xl border border-purple-400/40 bg-purple-950/80 p-6 backdrop-blur-md shadow-lg">
          <p className="text-lg leading-relaxed text-gray-100">
            Software engineer with a background in economics and DoD secret clearance.
            Experienced in rapidly developing end-to-end software solutions leveraging
            LLMs and creating LLM-powered applications. Currently pursuing a B.S. in Computer Science & Economics at William & Mary
            with a 3.98 GPA.
          </p>
        </div>

        <div className="rounded-xl border border-purple-400/40 bg-purple-950/80 p-6 backdrop-blur-md shadow-lg">
          <h3 className="mb-4 text-xl font-bold text-white">Languages</h3>
          <div className="space-y-4">
            {languages.map((group, i) => (
              <div key={i}>
                <p className="mb-2 text-sm font-medium text-purple-300">{group.level}</p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item, j) => (
                    <span
                      key={j}
                      className="rounded-lg border border-purple-400/50 bg-purple-900/60 px-3 py-1 text-sm text-gray-100"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-purple-400/40 bg-purple-950/80 p-6 backdrop-blur-md shadow-lg">
          <h3 className="mb-4 text-xl font-bold text-white">Tools & Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool, i) => (
              <span
                key={i}
                className="rounded-lg border border-purple-400/50 bg-purple-900/60 px-3 py-1 text-sm text-gray-100"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-purple-400/40 bg-purple-950/80 p-6 backdrop-blur-md shadow-lg">
          <h3 className="mb-4 text-xl font-bold text-white">Certificates</h3>
          <div className="flex flex-wrap gap-3">
            {certificates.map((cert, i) => (
              <span
                key={i}
                className="rounded-lg border border-purple-400/50 bg-purple-900/60 px-3 py-1.5 text-sm text-gray-100"
              >
                {cert.name} ({cert.year})
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-purple-400/40 bg-purple-950/80 p-6 backdrop-blur-md shadow-lg">
          <h3 className="mb-4 text-xl font-bold text-white">Relevant Coursework</h3>
          <div className="space-y-3">
            <div>
              <p className="mb-2 text-sm font-medium text-purple-300">Computer Science</p>
              <div className="flex flex-wrap gap-2">
                {courses.cs.map((course, i) => (
                  <span key={i} className="rounded bg-purple-900/70 px-2 py-1 text-xs text-gray-200">{course}</span>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-2 text-sm font-medium text-purple-300">Economics</p>
              <div className="flex flex-wrap gap-2">
                {courses.econ.map((course, i) => (
                  <span key={i} className="rounded bg-purple-900/70 px-2 py-1 text-xs text-gray-200">{course}</span>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-2 text-sm font-medium text-purple-300">Mathematics</p>
              <div className="flex flex-wrap gap-2">
                {courses.math.map((course, i) => (
                  <span key={i} className="rounded bg-purple-900/70 px-2 py-1 text-xs text-gray-200">{course}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-purple-400/40 bg-purple-950/80 p-6 backdrop-blur-md shadow-lg">
          <h3 className="mb-4 text-xl font-bold text-white">Quick Facts</h3>
          <ul className="space-y-2 text-gray-100">
            {quickFacts.map((fact, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="text-purple-400">▸</span> {fact}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PageWrapper>
  );
}
