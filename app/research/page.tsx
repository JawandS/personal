import PageWrapper from "@/components/PageWrapper";
import { research } from "@/lib/data";

export default function ResearchPage() {
  return (
    <PageWrapper title="Research">
      <div className="w-full max-w-3xl space-y-6">
        {research.map((item, i) => (
          <div
            key={i}
            className="rounded-xl border border-blue-400/40 bg-slate-900/80 p-6 backdrop-blur-md shadow-lg transition-all hover:border-blue-400/60"
          >
            <div className="mb-2 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <span className="text-sm text-blue-300">{item.period}</span>
            </div>
            <p className="text-blue-200">{item.institution}</p>
            <p className="mb-3 text-sm text-blue-300">Advisor: {item.advisor}</p>
            <p className="text-gray-100">{item.description}</p>
            {item.links.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-3">
                {item.links.map((link, j) => (
                  <a
                    key={j}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-blue-400/50 bg-slate-800/60 px-3 py-1.5 text-sm text-gray-100 transition-all hover:border-blue-300 hover:bg-slate-700/70"
                  >
                    {link.type === "package" ? "PyPI" : "GitHub"}: {link.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
        <div className="rounded-xl border border-blue-400/40 bg-slate-900/80 p-6 backdrop-blur-md shadow-lg">
          <h3 className="mb-4 text-xl font-bold text-white">Education</h3>
          <p className="text-lg text-gray-100">B.S. Computer Science & Economics</p>
          <p className="text-blue-200">William & Mary | Aug 2023 – May 2026</p>
          <p className="mt-2 text-blue-300">GPA: 3.98/4.00</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded bg-slate-800/70 px-2 py-1 text-xs text-gray-200">Bennett Fellow</span>
            <span className="rounded bg-slate-800/70 px-2 py-1 text-xs text-gray-200">Terry Glenn Scholar</span>
            <span className="rounded bg-slate-800/70 px-2 py-1 text-xs text-gray-200">Cisco Student Success Award</span>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
