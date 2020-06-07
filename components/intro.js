// import { CMS_NAME } from '../lib/constants'

// export default function Intro() {

//   return (
//     <>
//     <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
//       <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
//         Hackagotchi
//       </h1>
//       <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
//         The cutest Slack Bot. Built by and for Hack Club.
//       </h4>
//     </section>
//     <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
//     </section>
//     </>
//   )
// }
import { usePalette } from 'react-palette';
import Link from 'next/link';
// import Typing from 'react-typing-animation'

export default function Intro() {
  const searchTerms = ["dinosaurs", "dinosaur"].join(",")
  const { data } = usePalette(`https://source.unsplash.com/1600x900/?${searchTerms}`)

  const items = ["🌿", "⚛️", "💭", "🌍"]

  const emoji = items[Math.floor(Math.random() * items.length)];

  console.log(data)
  return (

    <section style={{
      backgroundImage: `url('https://source.unsplash.com/1600x900/?${searchTerms}')`,
      backgroundAttachment: 'fixed',
      color: data.lightVibrant,
      filter: "blur"
    }} className=" bg-no-repeat bg-cover mb-5">
      <div>
        <div className="mx-24 h-screen flex-col md:flex-row flex items-center md:justify-between mb-16 md:mb-12">
          <div className="flex-col">
            <div style={{ backgroundColor: data.darkMuted }} className="p-2 tracking-tighter leading-tight md:pr-8">
              <h1 className="text-12xl md:text-8xl" >
                Hackagotchi! {emoji}
              </h1>

            </div>
            <div style={{ backgroundColor: data.darkMuted }} className="p-5 mt-2 tracking-tighter flex-col leading-tight md:pr-8">
              You've always wanted to use that sweet, sweet GP. <br/>

              You've always wanted a pet dino of your own. <br/>

              You (may) have always wanted a farm.
            </div>

            <div style={{ backgroundColor: data.lightVibrant, color: data.darkMuted }} className=" py-12 text-xl p-2 mt-2 text-center tracking-tighter leading-tight md:pr-8">
              Whoever you are, we welcome you <br/> to the wonderful world of Hackagotchi!
            </div>
            <div>

            </div>
          </div>

          <h4 style={{ backgroundColor: data.darkMuted }} className="text-center md:text-left text-lg mt-5 p-3">
            Built by <Link href="https://hackclub.com"><a>Hack Clubbers</a></Link> for Hack Club.
          </h4>
        </div>
      </div>
    </section>

  )
}
