import { useEffect, useState } from "react"
import { Icon } from "@/components/common/Icon"
import { MarkdownView } from "@/components/common/MarkdownView"
import { cn } from "@/lib/utils"

type Mode = "write" | "preview"

const DEFAULT_PLACEHOLDER =
  "# Start writing your essay\n\nSupports **Markdown**, lists, tables and code blocks."

function TabBar({
  mode,
  onChange,
  fullscreen,
  onToggleFullscreen,
}: {
  mode: Mode
  onChange: (mode: Mode) => void
  fullscreen: boolean
  onToggleFullscreen: () => void
}) {
  const tabClass = (active: boolean) =>
    cn(
      "inline-flex items-center gap-space-xs rounded px-space-md py-1.5 font-mono-label text-mono-label transition-colors",
      active
        ? "bg-surface-container-highest text-primary"
        : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high"
    )

  return (
    <div className="flex items-center justify-between gap-space-sm border-b border-outline-variant bg-surface-container-lowest px-space-sm py-1.5">
      <div className="flex items-center gap-1">
        <button type="button" className={tabClass(mode === "write")} onClick={() => onChange("write")}>
          <Icon name="edit" className="text-[14px]" />
          <span>Write</span>
        </button>
        <button type="button" className={tabClass(mode === "preview")} onClick={() => onChange("preview")}>
          <Icon name="visibility" className="text-[14px]" />
          <span>Preview</span>
        </button>
      </div>

      <div className="flex items-center gap-space-sm">
        <span className="hidden font-mono-label text-[10px] uppercase tracking-wider text-outline sm:inline">
          Markdown supported
        </span>
        <button
          type="button"
          onClick={onToggleFullscreen}
          title={fullscreen ? "Exit full screen (Esc)" : "Full screen"}
          aria-label={fullscreen ? "Exit full screen" : "Enter full screen"}
          className="inline-flex items-center gap-space-xs rounded border border-outline-variant px-space-sm py-1 font-mono-label text-mono-label text-on-surface-variant transition-colors hover:border-primary-container hover:text-primary"
        >
          <Icon name={fullscreen ? "fullscreen_exit" : "fullscreen"} className="text-[14px]" />
          <span className="hidden sm:inline">{fullscreen ? "Exit" : "Full screen"}</span>
        </button>
      </div>
    </div>
  )
}

export function MarkdownEditor({
  value,
  onChange,
  placeholder,
}: {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}) {
  const [mode, setMode] = useState<Mode>("write")
  const [fullscreen, setFullscreen] = useState(false)

  useEffect(() => {
    if (!fullscreen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setFullscreen(false)
    }
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKeyDown)

    return () => {
      window.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [fullscreen])

  const resolvedPlaceholder = placeholder ?? DEFAULT_PLACEHOLDER

  if (fullscreen) {
    return (
      <div className="fixed inset-0 z-[100] flex flex-col bg-surface">
        <TabBar
          mode={mode}
          onChange={setMode}
          fullscreen
          onToggleFullscreen={() => setFullscreen(false)}
        />
        <div className="flex min-h-0 flex-1">
          {mode === "write" ? (
            <textarea
              autoFocus
              value={value}
              onChange={(event) => onChange(event.target.value)}
              placeholder={resolvedPlaceholder}
              spellCheck={false}
              className="h-full w-full resize-none bg-surface-container-lowest p-space-md font-mono-code text-mono-code text-on-surface placeholder:text-outline focus:outline-none lg:p-space-lg"
            />
          ) : (
            <div className="h-full w-full overflow-y-auto">
              <div className="mx-auto max-w-3xl p-space-lg">
                <MarkdownView content={value} />
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="overflow-hidden rounded-lg border border-outline-variant bg-surface-container-low">
      <TabBar
        mode={mode}
        onChange={setMode}
        fullscreen={false}
        onToggleFullscreen={() => setFullscreen(true)}
      />

      {mode === "write" ? (
        <textarea
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={resolvedPlaceholder}
          spellCheck={false}
          className="min-h-[420px] w-full resize-y bg-surface-container-lowest p-space-md font-mono-code text-mono-code text-on-surface placeholder:text-outline focus:outline-none"
        />
      ) : (
        <div className="min-h-[420px] p-space-md">
          <MarkdownView content={value} />
        </div>
      )}
    </div>
  )
}
