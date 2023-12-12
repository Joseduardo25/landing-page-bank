import Image from 'next/image'

export const BackgroundRadialLeft = () => {
  return (
    <div className=' left-0 absolute -z-50 top-0'>
      <Image src='/assets/background-floated-left.png' alt='Circle Left' width={850} height={650}/>
    </div>
  )
}
