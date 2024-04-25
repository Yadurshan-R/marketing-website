import Image from 'next/image'

import FeatImage01 from '@/public/images/Feature.png'
import FeatImage02 from '@/public/images/Feature2.png'
import FeatImage03 from '@/public/images/Feature3.png'

export default function Zigzag() {
  return (
    <section id='features'>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4 capitalize">Reach goals that matter</div>
            <h1 className="h2 mb-4">Explore Unlimited Oppurunities</h1>
            <p className="text-xl text-gray-400 capitalize">Aspiring students can now explore academic opportunities with the help of Campus Navigator's state-of-the-art machine learning algorithms and technologies along with constant support from our team</p>
          </div>

          <div className="grid gap-20">
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none rounded-2xl h-auto" src={FeatImage01} width={540} height={405} alt="Features 01" />
              </div>
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <h3 className="h3 mb-4">Personal Recommendations</h3>
                  <p className="text-xl text-justify text-gray-400 mb-4 capitalize ">Students can fill out the questionnaire provided to them by the web application. Based on the student's responses, the revelutionary Machine Learning algorithms provide the students with the relevant academic or career options</p>
                </div>
              </div>
            </div>
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none rounded-2xl h-auto" src={FeatImage02} width={540} height={405} alt="Features 02" />
              </div>
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <h3 className="h3 mb-4">Customer Support Chatbot</h3>
                  <p className="text-xl text-justify capitalize text-gray-400 mb-4">Students can answer their questions and doubts on while using the web application with the built-in support chatbot. The chatbot tries to solve user questions and doubts ensuring the user experience is seamless and intuitive</p>
                </div>
              </div>
            </div>
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto rounded-2xl" src={FeatImage03} width={540} height={405} alt="Features 03" />
              </div>
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <h3 className="h3 mb-3">Dynamic Newsletter</h3>
                  <p className="text-xl text-justify capitalize text-gray-400 mb-4">Students can sign up to the newsletter provided by the web application to be updated on the latest news articles about the academic and career fields assisting the students to decide on carefully considered and well planned decisions</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
