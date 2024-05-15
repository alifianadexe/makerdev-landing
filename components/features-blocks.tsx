import Image from 'next/image'
import TestimonialImage from '@/public/images/initia.png'
import TestimonialImage1 from '@/public/images/aleo.png'
import TestimonialImage2 from '@/public/images/berachain.png'
import TestimonialImage3 from '@/public/images/celestia.png'
import TestimonialImage4 from '@/public/images/kopi.png'
import TestimonialImage5 from '@/public/images/lava.png'
import TestimonialImage6 from '@/public/images/mantra.png'
import TestimonialImage7 from '@/public/images/quasar.png'
import TestimonialImage8 from '@/public/images/warden.png'


export default function FeaturesBlocks() {
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Our Testnet</h2>
            <p className="text-xl text-gray-600">MakerDev supports many testnets by running validator node and offering community tools</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <Image className="w-16 h-16 p-1 -mt-1 mb-2 relative rounded-full" src={TestimonialImage} width={75} height={75} alt="Testimonial 01" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Initia</h4>
              <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <Image className="w-16 h-16 p-1 -mt-1 mb-2 relative rounded-full" src={TestimonialImage1} width={75} height={75} alt="Testimonial 01" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Aleo</h4>
              <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <Image className="w-16 h-16 p-1 -mt-1 mb-2 relative rounded-full" src={TestimonialImage2} width={75} height={75} alt="Testimonial 01" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Berachain</h4>
              <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <Image className="w-16 h-16 p-1 -mt-1 mb-2 relative rounded-full" src={TestimonialImage3} width={75} height={75} alt="Testimonial 01" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Celestia</h4>
              <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <Image className="w-16 h-16 p-1 -mt-1 mb-2 relative rounded-full" src={TestimonialImage4} width={75} height={75} alt="Testimonial 01" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Kopi</h4>
              <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <Image className="w-16 h-16 p-1 -mt-1 mb-2 relative rounded-full" src={TestimonialImage5} width={75} height={75} alt="Testimonial 01" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Lava</h4>
              <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <Image className="w-16 h-16 p-1 -mt-1 mb-2 relative rounded-full" src={TestimonialImage6} width={75} height={75} alt="Testimonial 01" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Mantra</h4>
              <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <Image className="w-16 h-16 p-1 -mt-1 mb-2 relative rounded-full" src={TestimonialImage7} width={75} height={75} alt="Testimonial 01" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Quasar</h4>
              <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <Image className="w-16 h-16 p-1 -mt-1 mb-2 relative rounded-full" src={TestimonialImage8} width={75} height={75} alt="Testimonial 01" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Warden</h4>
              <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>


          </div>

        </div>
      </div>
    </section>
  )
}