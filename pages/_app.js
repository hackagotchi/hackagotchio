import '../styles/index.css'
import { PageTransition } from 'next-page-transitions'

export default function MyApp({ Component, pageProps, router}) {
  return (
    <div>
      <PageTransition timeout={150} classNames="page-transition">
        <Component {...pageProps} key={router.route} />
      </PageTransition>
      <style jsx global>{`
          .page-transition-enter {
            opacity: 0;
          }
          .page-transition-enter-active {
            opacity: 1;
            transition: opacity 300ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity 300ms;
          }
        `}</style>
    </div>

  )
}