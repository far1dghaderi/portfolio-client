import { MdDownload } from "react-icons/md"
import { FaGithub } from "react-icons/fa"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <p className="text-primary font-mono text-sm font-semibold tracking-wider uppercase">
              &gt; HELLO WORLD
            </p>
            <h1 className="text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl">
              Software Engineer &amp; Problem Solver
            </h1>
            <p className="text-muted-foreground justify-justify font-mono text-lg">
              I’m an engineering student and full-stack developer who specializes in building
              reliable, scalable systems with clean, efficient code. While I focus on backend
              architecture and system design, I’m comfortable handling frontend work when needed.
              Passionate about solving complex problems, optimizing workflows, and using technology
              to create meaningful, high-impact solutions.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button size="lg" className="shadow-md">
                <MdDownload className="mr-2 h-5 w-5" />
                <a
                  href="https://uc32b642ba2c6088e4ae386de06b.dl.dropboxusercontent.com/cd/0/get/CzybSxoB3nszji9bQ1DEA88RdMx17I5YifL0ukx1R9asI_twUDrHxxthmhK2F6pTQRfr-ch6I8YyL4cT36KoM6TG6IXaR8zAAHct9S1q8c-RgNT5KVB-xr7FddM-VpNIXDgfVKK3hn7mf60c2mMV9TkmI47OpXQgGUP8zwIdxaQGlA/file"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download CV
                </a>
              </Button>
              <Button variant="outline" size="lg" className="shadow-md" asChild>
                <FaGithub />
                <a href="http://github.com/far1dghaderi/" target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </a>
              </Button>
            </div>
          </div>

          <div className="bold relative text-center">
            Placeholder, waiting for a picture as awesome as my skills.
          </div>
        </div>
      </div>
    </section>
  )
}
