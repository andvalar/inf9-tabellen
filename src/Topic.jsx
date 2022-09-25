import { data } from './Data'
import { useParams } from "react-router"


export const LessonPage = () => {

  const { topic: topicName, lesson: lessonName } = useParams()

  // const topic = data.find(topic => topic.name === topicName)
  const topicIndex = data.findIndex(topic => topic.name === topicName)
  const topic = data[topicIndex]
  if(!topic) return "Kein Thema"

  // const lesson = topic.content.find(lesson => lesson.name === lessonName)
  const lessonIndex = topic.content.findIndex(lesson => lesson.name === lessonName)
  const lesson = topic[lessonIndex]
  if(!topic) return "Keine Lesson"

  // const [currentLesson, setCurrentLesson] = useState(0)

  return (
    <div className="lesson-wrapper">
      lesson

      {/*<LessonView lesson={topic.content[currentLesson]} chapter={[...chapter, currentLesson]} />*/}
      {/*<LessonView lesson={lesson} chapter={[topicIndex, lessonIndex]} />*/}
      <div>
        {lesson.content.map(content =>
          <section>
            <h1>{chapter.map(idx => idx + 1).join(".")}: {lesson.title}</h1>
            <LessonSection content={content} />
          </section>
        )}
      </div>
      
      <nav>
        <Link to={`lesson/{topic.name}/topic[lessonIndex + 1].name}`}>Next</Link>
        {/*<button
          onClick={() => setCurrentLesson(n => n + 1)}
        >Next</button>*/}
      </nav>

    </div>
  )
}

// const LessonView = ({ lesson, chapter }) =>
//   <div>
//     {lesson.content.map(content =>
//       <section>
//         <h1>{chapter.map(idx => idx + 1).join(".")}: {lesson.title}</h1>
//         <LessonSection content={content} />
//       </section>
//     )}
//   </div>


const LessonSection = ({ content }) => {
  if (content._type === "entry") {
    return <EntryView entry={content} />
  }
  if (content._type === "choices") {
    return <ChoicesView choices={content} />
  }
  // if (...)
  return <ErorThingsBroken />
}


const EntryView = ({ entry }) => {}

const ChoicesView = ({ choices }) => {}

const ErorThingsBroken = () => {}