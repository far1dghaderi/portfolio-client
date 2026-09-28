export interface Hobby {
  id: string
  name: string
  description: string
  icon: string
}

export const hobbies: Hobby[] = [
  {
    id: "1",
    name: "Coding",
    description:
      "Building side projects, mastering backend systems, and exploring new technologies",
    icon: "Code2",
  },
  {
    id: "2",
    name: "Sport",
    description:
      "Playing Football, a big fan of FC Barcelona, strength training, running, and maintaining overall fitness",
    icon: "BicepsFlexed",
  },
  {
    id: "3",
    name: "Reading",
    description:
      "I enjoy reading a variety of books, including programming and technology, self-improvement, psychology, and history",
    icon: "BookOpen",
  },
  {
    id: "4",
    name: "Video Games",
    description: "FPS and football games, enjoying competitive and immersive experiences",
    icon: "Gamepad2",
  },
  {
    id: "5",
    name: "Music",
    description: "Listening to music and discovering new artists",
    icon: "Music",
  },
]
