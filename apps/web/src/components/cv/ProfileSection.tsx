import type { CVProfile } from "@/types/cv"
import { Portrait } from "@/components/Portrait"

interface ProfileSectionProps {
  profile: CVProfile
  cvUrl: string
}

export function ProfileSection({ profile, cvUrl }: ProfileSectionProps) {
  return (
    <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
        <Portrait size="sm" />
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{profile.name}</h1>
          <p className="text-ink mt-1 text-base font-medium">{profile.title}</p>
          <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
            {[profile.location, profile.email].filter(Boolean).join("  ·  ")}
          </p>
        </div>
      </div>
      <a
        href={cvUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-ink inline-flex w-fit items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#214f78] print:hidden"
      >
        Download CV
      </a>
    </div>
  )
}
