import VideoThumb from '@/public/images/hero-image-01.jpg'
import ModalVideo from '@/components/modal-video'
import Link from 'next/link'

export default function Hero() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="absolute left-0 bottom-0 -ml-20 hidden lg:block pointer-events-none" aria-hidden="true" data-aos="fade-up" data-aos-delay="400">
        </div>
        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">

          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h1 mb-4 text-white tracking-wide" data-aos="fade-up">Campus Navigator</h1>
            <p className="text-xl text-slate-200 capitalize mb-8" data-aos="fade-up" data-aos-delay="200">Your personalized companion for academic and career related queries</p>
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div data-aos="fade-up" data-aos-delay="400">
                <Link href="https://sdgp-se-4.vercel.app/"><p className="btn text-black font-semibold bg-white rounded-full hover:bg-slate-200 w-full mb-4 sm:w-auto sm:mb-0">Get Started</p></Link>
              </div>
              <div data-aos="fade-up" data-aos-delay="600">
                <Link href="#features"><p className="btn text-white font-semibold bg-gray-800 hover:bg-gray-700 rounded-full capitalize w-full sm:w-auto sm:ml-4">Learn more</p></Link>
              </div>
            </div>
          </div>

          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={1024}
            thumbHeight={576}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080} />

        </div>

      </div>
    </section>
  )
}
