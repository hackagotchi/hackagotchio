import Avatar from '../components/avatar'
import DateFormater from '../components/date-formater'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'

export default function PostHeader({ title, coverImage, date, author, excerpt, categories, emoji }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>


      <p className="my-12 md:w-2/5">
        {excerpt}
      </p>
      

      <div className="hidden md:block md:mb-12">
      
        <div className="flex items-center">
          <img src={author.picture} className="w-12 h-12 rounded-full mr-4" alt={author.name} />
          <div class="inline">
            <div className="text-xl font-bold">{author.name}</div>
            <DateFormater dateString={date} emoji={emoji} />
          </div>
        </div>
      </div>
      <div className="mb-8 md:mb-16 -mx-5 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
    </>
  )
}
