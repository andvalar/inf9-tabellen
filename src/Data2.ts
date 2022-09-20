type Topic = {
  title?: string
  intro?: Entry
  content: string | Entry | Choices | (string | Entry | Choices)[]
}

type Entry = {
  title?: string
  content: string | Entry | Entry[]
  image?: string
}

type Choices = {
  prompt: string
  choices: Choice[]
}

type Choice = {
  label: string
  isCorrect?: boolean
}



const topic: Topic = {
  title: "Bla",
  intro: {
    title: "Intro",
    content: "blabla",
  },
  content: [
    {
      title: "Hefteintrag",
      content: "string",
      image: "bild.png",
    },
    "foo",
    {
      prompt: "warum?",
      choices: [
        {label: "rot", isCorrect: true},
        {label: "green"},
      ],
    },
  ],
}