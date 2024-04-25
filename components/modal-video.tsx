'use client'

import type { StaticImageData } from 'next/image'
import Image from 'next/image'

interface ModalVideoProps {
  thumb: StaticImageData
  thumbWidth: number
  thumbHeight: number
  thumbAlt: string
  video: string
  videoWidth: number
  videoHeight: number
}

export default function ModalVideo({
  thumb,
  thumbWidth,
  thumbHeight,
  thumbAlt,
  video,
  videoWidth,
  videoHeight,
}: ModalVideoProps) {

  return (
    <div>
      <div>
        <div className="relative flex justify-center items-center rounded-3xl" data-aos="fade-up" data-aos-delay="200">
          <Image src={thumb} width={thumbWidth} height={thumbHeight} alt={thumbAlt} className='rounded-xl' />
        </div>
      </div>

    </div>
  )
}