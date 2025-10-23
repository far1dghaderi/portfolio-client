/**
 * Example Component
 *
 * This is a template showing best practices for creating components
 * in this project. Copy and modify this for your own components!
 */

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart } from "lucide-react"

interface ExampleComponentProps {
  title?: string
  description?: string
}

export function ExampleComponent({
  title = "Example Component",
  description = "This is an example",
}: ExampleComponentProps) {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{title}</CardTitle>
          <Badge>New</Badge>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm">This component demonstrates:</p>
        <ul className="mt-2 list-inside list-disc space-y-1 text-sm">
          <li>TypeScript interfaces for props</li>
          <li>Default prop values</li>
          <li>shadcn/ui components</li>
          <li>Tailwind CSS classes</li>
          <li>Lucide icons</li>
        </ul>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button>
          <Heart className="h-4 w-4" />
          Primary Action
        </Button>
        <Button variant="outline">Secondary</Button>
      </CardFooter>
    </Card>
  )
}
