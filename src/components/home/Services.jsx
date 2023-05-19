import Image from "next/image";
import SocialLinks from "../SocialLinks";
import { homeContent } from "@/utils/ContentRender";

const Services = () => {
  return (
    <section className='section'>
      <div className='container'>
        <div className='column text-center'>
          <h1 className='text-3xl font-bold'>Mis servicios</h1>
          <div className='my-10'>
            <h2 className='text-xl mb-5 font-bold'>{homeContent.services.title}</h2>
            <p className='text-sm md:text-base'>{homeContent.services.description}</p>
          </div>
          
          <div className='flex flex-wrap items-center justify-around text-[--font-secondary] dark:text-[--font-secondary-dark]'>
            <div className='bg-[--primary] h-full m-3 flex flex-col items-center rounded-xl p-2 py-6 max-w-[300px]'>
              <figure>
                <Image 
                  src={homeContent.services.design.image}
                  alt='cardIcon'
                  width='auto'
                  height='auto'
                />
              </figure>
              <h3 className='text-lg my-4 font-bold'>{homeContent.services.design.title}</h3>
              <p className='text-sm'>{homeContent.services.design.description}</p>
            </div>
            <div className='bg-[--primary] h-full m-3 flex flex-col items-center rounded-xl p-2 py-6 max-w-[300px]'>
              <figure>
                <Image 
                  src={homeContent.services.development.image}
                  alt='cardIcon'
                  width='auto'
                  height='auto'
                />
              </figure>
              <h3 className='text-lg my-4 font-bold'>{homeContent.services.development.title}</h3>
              <p className='text-sm'>{homeContent.services.development.description}</p>
            </div>
            <div className='bg-[--primary] h-full m-3 flex flex-col items-center rounded-xl p-2 py-6 max-w-[300px]'>
              <figure>
                <Image 
                  src={homeContent.services.seo.image}
                  alt='cardIcon'
                  width='auto'
                  height='auto'
                />
              </figure>
              <h3 className='text-lg my-4 font-bold'>{homeContent.services.seo.title}</h3>
              <p className='text-sm'>{homeContent.services.seo.description}</p>
            </div>
          </div>

          <div className='mt-10'>
            <div className='flex flex-col items-center m-auto rounded-2xl bg-[--background-secondary] dark:bg-[--background-secondary-dark] max-w-[800px] p-6'>
              <h3 className='text-xl mb-5 font-bold'>{homeContent.contact.title}</h3>
              <p className='text-sm md:text-base'>{homeContent.contact.description}</p>
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;