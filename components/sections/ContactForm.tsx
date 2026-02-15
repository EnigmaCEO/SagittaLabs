export function ContactForm() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
      <div className="nexus-shell mx-auto max-w-2xl p-6 sm:p-8">
        {/* Template mapping: centered, high-contrast form card follows the dedicated contact panel in the template. */}
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm text-slate-300">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              className="w-full rounded-xl border border-white/15 bg-[linear-gradient(180deg,rgba(12,23,48,0.8),rgba(8,15,31,0.8))] px-4 py-2.5 text-sm text-white outline-none placeholder:text-slate-500 focus:border-electric"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block text-sm text-slate-300">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-xl border border-white/15 bg-[linear-gradient(180deg,rgba(12,23,48,0.8),rgba(8,15,31,0.8))] px-4 py-2.5 text-sm text-white outline-none placeholder:text-slate-500 focus:border-electric"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-1 block text-sm text-slate-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Tell us about your project."
              className="w-full rounded-xl border border-white/15 bg-[linear-gradient(180deg,rgba(12,23,48,0.8),rgba(8,15,31,0.8))] px-4 py-2.5 text-sm text-white outline-none placeholder:text-slate-500 focus:border-electric"
            />
          </div>
          <button
            type="submit"
            className="nexus-button-primary w-full rounded-xl px-5 py-3 text-sm"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
