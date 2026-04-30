import { profile } from "@/app/_data/profile";

export function ProfileProjects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-24 sm:px-8"
    >
      <div className="relative overflow-hidden rounded-[2.5rem] border border-zinc-200 bg-white/90 p-8 shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:p-12 animate-fade-up">
        <div className="absolute -left-12 top-10 h-52 w-52 rounded-full bg-amber-100/60 animate-float-soft" />
        <div className="absolute -right-10 -bottom-16 h-60 w-60 rounded-full bg-teal-100/60 animate-float-slower" />

        <div className="relative">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2
                id="projects-heading"
                className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-500"
              >
                Proyek
              </h2>
              <p className="mt-4 text-3xl font-semibold text-zinc-950 sm:text-4xl">
                Referensi dari website dan GitHub.
              </p>
            </div>
            <p className="max-w-xl text-base leading-7 text-zinc-600">
              Beberapa highlight sederhana yang merujuk ke karya di heydims.my.id
              dan GitHub.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {profile.projects.map((project) => (
              <article
                key={project.name}
                className="flex h-full flex-col justify-between rounded-[1.5rem] border border-zinc-200 bg-white/90 p-6 shadow-[0_16px_40px_rgba(15,23,42,0.1)]"
              >
                <div>
                  <h3 className="text-xl font-semibold text-zinc-950">
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition hover:text-zinc-700"
                    >
                      {project.name}
                    </a>
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-600">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
