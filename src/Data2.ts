type Topic = {
  _type: string
  title?: string
  intro?: string
  content: string | Lesson[]
}

type Lesson = {
  _type: string
  title?: string
  intro?: string
  content: string  | Entry | Choices | (string | Entry | Choices)[]
}

type Entry = {
  _type: string
  title?: string
  content: string | Entry | Entry[]
  image?: string
}

type Choices = {
  _type: string
  prompt: string
  choices: Choice[]
}

type Choice = {
  label: string
  isCorrect?: boolean
}



const topic: Topic = {
  title: "Tabellenkalkulation",
  intro: `Ein Tabellenkalkulationsprogramm ist eine Software, mit der man Tabellen erstellen und verwalten kann. 
        In diesem Tabellen kann der Computer automatische Berechnungen durchführen.`,
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