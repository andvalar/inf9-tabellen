import { data } from './Data'
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import { MultipleChoice, Task } from "./Interactions"

/* H5P Test */
import { H5P } from 'h5p-standalone'; // ES6
// const { H5P } = require('h5p-standalone'); AMD
// const { H5P } = 'H5PStandalone'; // object destructuring

/*const el = document.getElementById('h5p-container');
alert(el)
const options = {
    h5pJsonPath: '/h5p/funktionen-auswerten',
    frameJs: '', // /assets/frame.bundle.js',
    frameCss: '', // /assets/styles/h5p.css',
};

new H5P(el, options);
/* H5P Test Ende */


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

  /* H5P Test *
  const el = document.getElementById('h5p-container');
  console.log(`${topic.content.title} h5p-container: ${el}`)
  const options = {
    h5pJsonPath: '/h5p/funktionen-auswerten',
    frameJs: '', // /assets/frame.bundle.js',
    frameCss: '', // /assets/styles/h5p.css',
  };

  el && new H5P(el, options);

  // NICHT VERGESSEN div ZU LÖSCHEN!

  /* H5P Test Ende */

  return (
    <div className="lesson-wrapper">
      <h1>{data.title}</h1>
      <h2>{topic.title}</h2>

      <div id='h5p-container'></div>

      <my-topic>
        <h2>{chapter.map(idx => idx + 1).join(".")}: {lesson.title}</h2>

      {/*<LessonView lesson={topic.content[currentLesson]} chapter={[...chapter, currentLesson]} />*/}
      {/*<LessonView lesson={lesson} chapter={[topicIndex, lessonIndex]} />*/}
      
        {lesson.content.map((content, index) =>
          <section key={`${topicIndex}.${lessonIndex}.${index}`}>
            <LessonSection content={content} />
          </section>
        )}
      </my-topic>
      
      <nav>
        <flex-container>
        {
          topic.content[lessonIndex - 1] &&  
            <Link to={`/lesson/${topic.name}/${topic.content[lessonIndex - 1].name}`}>&lt; Vorige Lektion</Link>
        }
        {
          topic.content[lessonIndex + 1] &&  
            <Link to={`/lesson/${topic.name}/${topic.content[lessonIndex + 1].name}`}>Nächste Lektion &gt;</Link>
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
      correctOptions={content.correctOptions}
      image={content.image} />
  }
  if (content._type === "task") {
    return <Task 
      number={content.number}
      prompt={content.prompt}
      content={content.content}
      solution={content.solution}
      image={content.image}
      file={content.file} />
  }
  return <ErorThingsBroken />
}


const IntroView = ({ intro }) => { 
  return (
    <my-intro dangerouslySetInnerHTML={{__html: intro.content}}></my-intro>
  )
}

const EntryView = ({ entry }) => {
  return (
    <my-entry class="full-width">
      <h1>{ entry.title }</h1>
      {entry.content.map(({title, content, image}, index) =>
        <div key={title+index}>
          <h2>{ title }</h2>
          <flex-container>
            {image && <img src={ `/${data.name}/${image}` } />} 
            <div dangerouslySetInnerHTML={{__html: content}} />
          </flex-container>
        </div>
      )}
    </my-entry>
  )
}

// const MultipleChoicesView = ({ choices }) => {}

// const TaskView = ({ entry }) => {}

const ErorThingsBroken = ({ message }) => {
  return <error-message>Error: {message}</error-message>
}