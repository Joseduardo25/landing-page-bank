import Image from 'next/image'

const BackgroundRadialLeft = () => {
  return (
    <div className=' left-0 absolutea -z-50 top-0'>
      <Image src='/public/assets/background-floated-left.png' alt='Circle Left' width={850} height={650}/>
    </div>
  )
}

export default BackgroundRadialLeft