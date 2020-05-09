import markdownStyles from './markdown-styles.module.css'

export default async function PostBody({ content }) {
  return (
    <div className="max-w-3xl mx-auto">
        <div
          // className={markdownStyles['markdown']}
          // dangerouslySetInnerHTML={{ __html: "await content" }}
        />  
    </div>
  )
}
