import { profile } from "@/app/_data/profile";

function ProfileVisual() {
  return (
    <aside
      className="relative overflow-hidden rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-[0_24px_80px_rgba(15,23,42,0.12)]"
      aria-label="Profile summary card"
    >
      <div className="absolute right-0 top-0 h-36 w-36 bg-teal-100" />
      <div className="absolute bottom-0 left-0 h-32 w-32 bg-amber-100" />

      <div className="relative flex min-h-[420px] flex-col justify-between">
        <div>
          <div className="flex h-24 w-24 items-center justify-center rounded-[1.75rem] bg-zinc-950 text-3xl font-semibold text-white">
            DA
          </div>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
            heydims.my.id
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
    <main className="min-h-screen bg-[#f7f4ef] text-zinc-900">
      <section
        id="landing"
        className="mx-auto grid min-h-screen w-full max-w-6xl items-center gap-12 px-6 py-12 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:py-16"
      >
        <div>
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
              Visit Website
            </a>
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-zinc-300 bg-white px-6 text-zinc-800 transition hover:border-zinc-950 hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2"
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Profile
            </a>
          </div>
        </div>

        <ProfileVisual />
      </section>
    </main>
  );
}
