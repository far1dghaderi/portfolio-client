import type { Experience } from "@/types/cv"

export function CompanyLogo({ experience, size = "md" }: { experience: Experience; size?: "md" | "lg" }) {
  const box = size === "lg" ? "h-14 w-14" : "h-12 w-12"
  const initial = size === "lg" ? "text-xl" : "text-lg"

  return (
    <div
      className={`relative ${box} shrink-0 overflow-hidden rounded-lg border border-outline-variant bg-surface-container-high`}
    >
      <div className={`absolute inset-0 grid place-items-center font-bold text-primary ${initial}`}>
        {experience.company.charAt(0)}
      </div>
      {experience.logo ? (
        <img
          src={experience.logo}
          alt={`${experience.company} logo`}
          className="relative h-full w-full object-contain p-1.5"
          onError={(event) => {
            event.currentTarget.style.display = "none"
          }}
        />
      ) : null}
    </div>
  )
}
