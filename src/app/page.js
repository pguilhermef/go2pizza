import Differencial from './sections/Differencial'
import Footer from './sections/Footer'
import Forms from './sections/Forms'
import Header from './sections/Header'
import Impression from './sections/Impression'

export default function Home() {
  return (
    <main>
      <Header />
      <Impression />
      <Differencial />
      <Forms />
      <Footer />
    </main>
  )
}
