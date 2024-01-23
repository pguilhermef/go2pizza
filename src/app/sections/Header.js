import Image from "next/image"

import logoPizzaHeader from '@/images/logo_pizza_header.png'

function Header() {
  return(
    <div id='top' className="flex justify-center items-center h-40 sm:h-52 lg:h-64 bg-yellow-600">
      <div className="bg-red-600 flex justify-center items-center lg:justify-end lg:pr-10 w-2/6 lg:w-7/12 h-full">
        <Image className="p-3 sm:p-4 w-full max-w-[15rem]" src={ logoPizzaHeader }/>
      </div>
      <div className="w-4/6 h-full flex-col justify-center items-center">
        <div className="flex bg-white items-center font-goToPizza font-bold text-2xl sm:text-3xl lg:text-[3rem] pl-5 h-1/2 text-red-600 leading-6 lg:leading-[2.75rem] xl:leading-10">
          A SUA <br/> OPORTUNIDADE <br/> DE SER UM
        </div>
        <div className="flex-col h-1/2">
          <div className="flex items-center bg-red-600 text-yellow-500 font-goToPizza font-bold text-4xl md:text-5xl lg:text-[4.2rem] p-5 h-1/2">
            FRANQUEADO
          </div>
          <div className="flex items-center bg-red-600 font-goToPizza font-bold text-[2.4rem] md:text-[3.3rem] lg:text-7xl p-5 h-1/2">
            DE SUCESSO!
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header