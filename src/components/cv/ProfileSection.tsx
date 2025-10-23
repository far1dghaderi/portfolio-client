import type { CVProfile } from "@/types/cv"

interface ProfileSectionProps {
  profile: CVProfile
}

export function ProfileSection({ profile }: ProfileSectionProps) {
  return (
    <div className="flex w-full flex-col items-center gap-4 p-4">
      <div className="flex flex-col items-center gap-4">
        <img
          src={profile.image}
          alt={profile.name}
          className="h-32 w-32 rounded-full object-cover"
        />
        <div className="flex flex-col items-center justify-center">
          <p className="text-center text-[22px] leading-tight font-bold tracking-tight">
            {profile.name}
          </p>
          <p className="text-muted-foreground text-center text-base leading-normal font-normal">
            {profile.title}
          </p>
        </div>
      </div>
    </div>
  )
}

