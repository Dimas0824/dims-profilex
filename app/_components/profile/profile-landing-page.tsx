import { profile } from "@/app/_data/profile";

function ProfileVisual() {
  return (
    <aside
      className="relative overflow-hidden rounded-4xl border border-zinc-200 bg-white p-8 shadow-[0_24px_80px_rgba(15,23,42,0.12)] animate-fade-up"
      aria-label="Profile summary card"
    >
      <div className="absolute right-0 top-0 h-36 w-36 bg-teal-100 animate-float-soft" />
      <div className="absolute bottom-0 left-0 h-32 w-32 bg-amber-100 animate-float-slower" />

      <div className="relative flex min-h-105 flex-col justify-between">
        <div>
          <div className="flex h-24 w-24 items-center justify-center rounded-[1.75rem] bg-zinc-950 text-3xl font-semibold text-white">
            DA
          </div>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
            Tugas Cloud Computing
          </p>
        </div>

        <div className="rounded-[1.75rem] bg-zinc-950 p-6 text-white">
          <p className="max-w-sm text-3xl font-semibold leading-tight">
            {profile.name}
          </p>
          <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5 text-sm text-zinc-300">
            <span>{profile.role}</span>
            <span>{profile.location}</span>
          </div>
        </div>
      </div>
    </aside>
  );
}

export function ProfileLandingPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-[#fdf7f0] via-[#f7f4ef] to-[#f1ece4] text-zinc-900">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute -left-40 top-16 h-72 w-72 rounded-full bg-teal-100/50 blur-3xl animate-float-soft" />
        <div className="absolute -right-28 top-1/2 h-80 w-80 rounded-full bg-amber-100/60 blur-3xl animate-float-slower" />
      </div>
      <section
        id="landing"
        className="relative z-10 mx-auto grid min-h-screen w-full max-w-6xl items-center gap-12 px-6 py-12 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:py-16"
      >
        <div className="animate-fade-up">
          <div className="inline-flex rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-800">
            {profile.role}
          </div>

          <div className="mt-8 max-w-4xl">
            <h1 className="text-5xl font-semibold leading-[1.02] text-zinc-950 sm:text-6xl lg:text-7xl">
              {profile.name}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
              {profile.summary}
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 text-sm font-semibold sm:flex-row">
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-zinc-950 px-6 text-white transition hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2"
              href={profile.siteUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Website
            </a>
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-zinc-300 bg-white px-6 text-zinc-800 transition hover:border-zinc-950 hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2"
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        <ProfileVisual />
      </section>

      <section
        id="about"
        aria-labelledby="about-heading"
        className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20 sm:px-8"
      >
        <div className="relative overflow-hidden rounded-[2.5rem] border border-zinc-200 bg-white/90 p-8 shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:p-12 animate-fade-up">
          <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-teal-100/70 animate-float-soft" />
          <div className="absolute -bottom-24 -left-16 h-60 w-60 rounded-full bg-amber-100/70 animate-float-slower" />

          <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <h2
                id="about-heading"
                className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-500"
              >
                {profile.about.title}
              </h2>
              <p className="mt-4 text-3xl font-semibold text-zinc-950 sm:text-4xl">
                {profile.about.headline}
              </p>
              <p className="mt-5 text-base leading-7 text-zinc-600">
                {profile.about.description}
              </p>
            </div>

            <dl className="grid gap-4">
              {profile.about.highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.5rem] border border-zinc-200 bg-white/80 p-5 shadow-[0_12px_30px_rgba(15,23,42,0.08)]"
                >
                  <dt className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
                    {item.label}
                  </dt>
                  <dd className="mt-2 text-lg font-semibold text-zinc-900">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}
