import { LoaderCircle } from 'lucide-react'
import React from 'react'

const Loader = () => {
  return (
    <div className='w-full h-[40vh] flex items-center justify-center animate-spin'>
      <LoaderCircle size={28}/>
    </div>
  )
}

export default Loader
