import PageWrapper from "@/components/PageWrapper";
import { contact } from "@/lib/data";

export default function ContactPage() {
  return (
    <PageWrapper title="Contact">
      <div className="w-full max-w-md space-y-4">
        <a
          href={`mailto:${contact.email}`}
          className="flex items-center gap-4 rounded-xl border border-purple-400/40 bg-purple-950/80 p-4 backdrop-blur-md shadow-lg transition-all hover:border-purple-400/60 hover:bg-purple-900/80"
        >
          <span className="text-2xl">✉️</span>
          <div>
            <p className="text-sm text-purple-300">Email</p>
            <p className="text-white">{contact.email}</p>
          </div>
        </a>
        <div className="flex items-center gap-4 rounded-xl border border-purple-400/40 bg-purple-950/80 p-4 backdrop-blur-md shadow-lg">
          <span className="text-2xl">📍</span>
          <div>
            <p className="text-sm text-purple-300">Location</p>
            <p className="text-white">{contact.location}</p>
          </div>
        </div>
        <a
          href={contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 rounded-xl border border-purple-400/40 bg-purple-950/80 p-4 backdrop-blur-md shadow-lg transition-all hover:border-purple-400/60 hover:bg-purple-900/80"
        >
          <span className="text-2xl">💼</span>
          <div>
            <p className="text-sm text-purple-300">LinkedIn</p>
            <p className="text-white">linkedin.com/in/Jawand</p>
          </div>
        </a>
        <a
          href={contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 rounded-xl border border-purple-400/40 bg-purple-950/80 p-4 backdrop-blur-md shadow-lg transition-all hover:border-purple-400/60 hover:bg-purple-900/80"
        >
          <span className="text-2xl">🐙</span>
          <div>
            <p className="text-sm text-purple-300">GitHub</p>
            <p className="text-white">github.com/JawandS</p>
          </div>
        </a>
      </div>
    </PageWrapper>
  );
}
