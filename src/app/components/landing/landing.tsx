import Image from 'next/image'

export  function Landing() {
  return (
      <div className={"w-full h-screen relative flex items-center flex-col"}>
        <div className={"absolute top-0 left-[-50px] rotate-[-45deg]"}>
          <Image src={"poster.svg"} width={300} height={300} alt={"poster"}/>
        </div>
        <div className={"absolute top-0 right-[-50px] rotate-[45deg]"}>
          <Image src={"poster.svg"} width={300} height={300} alt={"poster"}/>
        </div>
        <div className={'absolute top-1/3 flex flex-col gap-y-8 items-center '}>
          <h1 className={"text-3xl text-[#103362] font-bold"}> Joyeux Anniversaire Manon</h1>
          <h2 className={"text-xl text-[#103362]"}>May all your wishes came true   </h2>
        </div>
        <div className={'absolute  bottom-1/4'}>
          <Image src={"/cake.png"} width={100} height={100} alt={"cake"}/>
        </div>

      </div>
  )
}