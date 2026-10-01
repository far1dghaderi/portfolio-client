import ReactMarkdown from "react-markdown"
import type { Components } from "react-markdown"
import remarkGfm from "remark-gfm"
import { cn } from "@/lib/utils"

const components: Components = {
  h1: ({ children }) => (
    <h1 className="font-headline-lg text-headline-lg font-semibold text-on-surface mt-space-lg mb-space-sm first:mt-0">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="font-headline-md text-headline-md font-semibold text-on-surface mt-space-lg mb-space-sm first:mt-0">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="font-headline-md text-[1.05rem] font-semibold text-on-surface mt-space-md mb-space-xs">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-md">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="list-disc pl-space-lg mb-space-md flex flex-col gap-1 text-on-surface-variant">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal pl-space-lg mb-space-md flex flex-col gap-1 text-on-surface-variant">{children}</ol>
  ),
  li: ({ children }) => <li className="font-body-md text-body-md leading-relaxed">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-primary-container pl-space-md my-space-md text-on-surface-variant italic">
      {children}
    </blockquote>
  ),
  a: ({ children, href }) => (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-primary underline decoration-primary/40 hover:decoration-primary transition-colors"
    >
      {children}
    </a>
  ),
  hr: () => <hr className="border-outline-variant my-space-lg" />,
  code: ({ children, className }) => {
    const isBlock = typeof className === "string" && className.includes("language-")
    if (isBlock) {
      return <code className="font-mono-code text-body-sm text-on-surface">{children}</code>
    }
    return (
      <code className="font-mono-code text-[0.8em] px-1.5 py-0.5 rounded bg-surface-container-highest text-primary">
        {children}
      </code>
    )
  },
  pre: ({ children }) => (
    <pre className="bg-surface-container-lowest border border-outline-variant rounded-lg p-space-md overflow-x-auto mb-space-md">
      {children}
    </pre>
  ),
  table: ({ children }) => (
    <div className="overflow-x-auto mb-space-md">
      <table className="w-full border-collapse text-body-sm">{children}</table>
    </div>
  ),
  th: ({ children }) => (
    <th className="border border-outline-variant px-space-sm py-1.5 text-left font-mono-label text-mono-label uppercase text-on-surface-variant bg-surface-container-low">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border border-outline-variant px-space-sm py-1.5 text-on-surface-variant">{children}</td>
  ),
  img: ({ src, alt }) => (
    <img src={src} alt={alt ?? ""} className="rounded-lg border border-outline-variant max-w-full my-space-md" />
  ),
}

export function MarkdownView({ content, className }: { content: string; className?: string }) {
  if (!content.trim()) {
    return (
      <p className={cn("font-body-sm text-body-sm text-outline italic", className)}>
        Nothing to preview yet. Start writing to see the rendered output.
      </p>
    )
  }

  return (
    <div className={cn("max-w-none", className)}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  )
}
