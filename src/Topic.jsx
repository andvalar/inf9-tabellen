import { data } from './Data'
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import { MultipleChoice, Task } from "./Interactions"



export const LessonPage = () => {

  const { topic: topicName, lesson: lessonName } = useParams()

  // const topic = data.find(topic => topic.name === topicName)
  const topicIndex = data.content.findIndex(topic => topic.name === topicName)
  const topic = data.content[topicIndex]
  const msg = data.title+" "+topicIndex+" "+topic+" Kein Topic: "+topicName
  if(!topic) return <ErorThingsBroken message={msg} />

  // const lesson = topic.content.find(lesson => lesson.name === lessonName)
  const lessonIndex = topic.content.findIndex(lesson => lesson.name === lessonName)
  const lesson = topic.content[lessonIndex]
  if(!lesson) return <ErorThingsBroken message="Keine Lesson" />

  const chapter = [topicIndex, lessonIndex]

  // const [currentLesson, setCurrentLesson] = useState(0)

  return (
    <div className="lesson-wrapper">
      <h1>{data.title}</h1>

      <my-topic>
        <h2>{chapter.map(idx => idx + 1).join(".")}: {lesson.title}</h2>

      {/*<LessonView lesson={topic.content[currentLesson]} chapter={[...chapter, currentLesson]} />*/}
      {/*<LessonView lesson={lesson} chapter={[topicIndex, lessonIndex]} />*/}
      
        {lesson.content.map((content, index) =>
          <section key={index}>
            <LessonSection content={content} />
          </section>
        )}
      </my-topic>
      
      <nav>
        <flex-container>
        {
          topic.content[lessonIndex - 1] &&  
            <Link to={"/lesson/"+topic.name+"/"+topic.content[lessonIndex - 1].name}>Vorige Lektion</Link>
        }
        {
          topic.content[lessonIndex + 1] &&  
            <Link to={"/lesson/"+topic.name+"/"+topic.content[lessonIndex + 1].name}>Nächste Lektion</Link>
        }
        
        {/*<button
          onClick={() => setCurrentLesson(n => n + 1)}
        >Next</button>*/}
        </flex-container>
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
  if (content._type === "intro") {
    return <IntroView intro={content} />
  }
  if (content._type === "entry") {
    return <EntryView entry={content} />
  }
  if (content._type === "multipleChoice") {
    return <MultipleChoice 
      prompt={content.prompt} 
      options={content.options} 
      correctOptions={content.correctOptions} />
  }
  if (content._type === "task") {
    return <Task 
      number={content.number}
      prompt={content.prompt}
      content={content.content}
      image={content.image} />
  }
  // if (...)
  return <ErorThingsBroken />
}


const IntroView = ({ intro }) => { 
  return (
    <div>{intro.content}intro</div>
  )
}

const EntryView = ({ entry }) => {
  return (
    <my-entry>
      <h1>Tabellendokumente</h1>
      {entry.content.map(({title, content, image}, index) =>
        <div key={title+index}>
          <h2>{ title }</h2>
          <flex-container>
            <img src={ `/${data.name}/${image}` } /> 
            <div dangerouslySetInnerHTML={{__html: content}} />
          </flex-container>
        </div>
      )}
    </my-entry>
  )
}

// const MultipleChoicesView = ({ choices }) => {}

const TaskView = ({ entry }) => {}

const ErorThingsBroken = ({ message }) => {
  return <error-message>Error: {message}</error-message>
}