import type { Experience } from "@/types/cv"

// White tile: most company logos are drawn for light backgrounds.
export function CompanyLogo({ experience }: { experience: Experience }) {
  return (
    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white sm:h-14 sm:w-14">
      <div className="text-surface absolute inset-0 grid place-items-center text-lg font-bold">
        {experience.company.charAt(0)}
      </div>
      {experience.logo ? (
        <img
          src={experience.logo}
          alt={`${experience.company} logo`}
          className="relative h-full w-full bg-white object-contain p-2"
          onError={(event) => {
            event.currentTarget.style.display = "none"
          }}
        />
      ) : null}
    </div>
  )
}
