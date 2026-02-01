import PageWrapper from "@/components/PageWrapper";
import { research } from "@/lib/data";

export default function ResearchPage() {
  return (
    <PageWrapper title="Research">
      <div className="w-full max-w-3xl space-y-6">
        {research.map((item, i) => (
          <div
            key={i}
            className="rounded-xl border border-purple-500/30 bg-purple-900/20 p-6 backdrop-blur-sm transition-all hover:border-purple-400/50"
          >
            <div className="mb-2 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <span className="text-sm text-purple-300">{item.period}</span>
            </div>
            <p className="text-purple-200">{item.institution}</p>
            <p className="mb-3 text-sm text-purple-300">Advisor: {item.advisor}</p>
            <p className="text-purple-100">{item.description}</p>
            {item.links.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-3">
                {item.links.map((link, j) => (
                  <a
                    key={j}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-purple-400/50 bg-purple-800/30 px-3 py-1.5 text-sm text-purple-200 transition-all hover:border-purple-300 hover:bg-purple-700/40"
                  >
                    {link.type === "package" ? "PyPI" : "GitHub"}: {link.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
        <div className="rounded-xl border border-purple-500/30 bg-purple-900/20 p-6 backdrop-blur-sm">
          <h3 className="mb-4 text-xl font-bold text-white">Education</h3>
          <p className="text-lg text-purple-100">B.S. Computer Science & Economics</p>
          <p className="text-purple-200">William & Mary | Aug 2023 – May 2026</p>
          <p className="mt-2 text-purple-300">GPA: 3.98/4.00</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded bg-purple-800/40 px-2 py-1 text-xs text-purple-200">Bennett Fellow</span>
            <span className="rounded bg-purple-800/40 px-2 py-1 text-xs text-purple-200">Terry Glenn Scholar</span>
            <span className="rounded bg-purple-800/40 px-2 py-1 text-xs text-purple-200">Cisco Student Success Award</span>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
