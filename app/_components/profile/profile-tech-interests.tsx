import { profile } from "@/app/_data/profile";

export function ProfileTechInterests() {
  return (
    <section
      id="interests"
      aria-labelledby="interests-heading"
      className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20 sm:px-8"
    >
      <div className="relative overflow-hidden rounded-[2.5rem] border border-zinc-200 bg-white/90 p-8 shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:p-12 animate-fade-up">
        <div className="absolute -right-10 -top-12 h-48 w-48 rounded-full bg-teal-100/60 animate-float-soft" />
        <div className="absolute -bottom-16 -left-10 h-52 w-52 rounded-full bg-amber-100/60 animate-float-slower" />

        <div className="relative">
          <h2
            id="interests-heading"
            className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-500"
          >
            {profile.techInterests.title}
          </h2>
          <p className="mt-4 text-3xl font-semibold text-zinc-950 sm:text-4xl">
            {profile.techInterests.headline}
          </p>
          <p className="mt-5 max-w-3xl text-base leading-7 text-zinc-600">
            {profile.techInterests.description}
          </p>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {profile.techInterests.items.map((item) => (
              <li
                key={item.title}
                className="rounded-[1.5rem] border border-zinc-200 bg-white/80 p-5 shadow-[0_12px_30px_rgba(15,23,42,0.08)]"
              >
                <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
                  {item.title}
                </h3>
                <p className="mt-2 text-base font-semibold text-zinc-900">
                  {item.summary}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
