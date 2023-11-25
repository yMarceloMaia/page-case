import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'
import SectionMiddle from '@/components/sectionmiddle/sectionmiddle'
import SectionTop from '@/components/sectiontop/sectiontop'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col justify-between'>
      <Header></Header>
      <main className='w-4/5 flex flex-col m-auto h-screen max-w-screen-xl h-full'>
        <SectionTop />
        <SectionMiddle />
      </main>
      <Footer />
    </div>
  )
}
