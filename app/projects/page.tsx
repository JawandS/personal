import PageWrapper from "@/components/PageWrapper";
import { projects } from "@/lib/data";

export default function ProjectsPage() {
  return (
    <PageWrapper title="Projects">
      <div className="grid w-full max-w-4xl gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <div
            key={i}
            className="group rounded-xl border border-purple-500/30 bg-purple-900/20 p-6 backdrop-blur-sm transition-all hover:border-purple-400/50"
          >
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">{project.name}</h3>
              <span className="text-sm text-purple-300">{project.year}</span>
            </div>
            <p className="mb-4 text-purple-100">{project.description}</p>
            <div className="flex flex-wrap gap-4">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-purple-300 transition-colors hover:text-purple-100"
                >
                  Live Site →
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-purple-300 transition-colors hover:text-purple-100"
                >
                  GitHub →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}
