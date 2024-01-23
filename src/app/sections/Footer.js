import Image from 'next/image'
import Link from 'next/link'
import logo_gopizza from '../../images/logo_gopizza.png'

function Footer() {
  return(
    <div className="h-32 flex justify-center items-center bg-go2pizza-yellow">
      <div className='flex justify-center items-center'>
        <Link href='#top' className='flex justify-center items-center' >
          <Image className='w-5/6' src={logo_gopizza}/>
        </Link>
      </div>
    </div>
  )
}

export default Footer