import { useEffect, useState } from "react"
import { api } from "@/lib/api"
import { toWritingPost } from "@/lib/posts"
import type { WritingPost } from "@/data/writing"
import type { Post } from "@/types/blog"

// One request per page load, shared by the header, home section and writing page.
let request: Promise<WritingPost[]> | undefined

function loadPosts() {
  request ??= api
    .get<Post[]>("/posts")
    .then((posts) => (Array.isArray(posts) ? posts.map(toWritingPost) : []))
    .catch(() => [])
  return request
}

export function usePosts() {
  const [posts, setPosts] = useState<WritingPost[] | null>(null)

  useEffect(() => {
    let active = true
    loadPosts().then((data) => {
      if (active) setPosts(data)
    })
    return () => {
      active = false
    }
  }, [])

  return posts
}
