import Differencial from '@/components/Differencial'
import Footer from '@/components/Footer'
import Forms from '@/components/Forms'
import Header from '@/components/Header'
import Impression from '@/components/Impression'

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
