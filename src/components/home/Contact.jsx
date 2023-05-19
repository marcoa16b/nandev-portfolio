import Image from "next/image";
import SocialLinks from "../SocialLinks";
import { homeContent } from "@/utils/ContentRender";


const Contact = () => {
  return (
    <section className='section bg-[--background-secondary] dark:bg-[--background-secondary-dark]'>
        <div className='container'>
          <div className='column'>
            <div className='flex flex-col items-center bg-[--background-primary] dark:bg-[--background-primary-dark] md:grid md:grid-cols-2 md:justify-items-center'>
              <div className='flex flex-col items-center m-auto rounded-2xl max-w-[800px] p-6'>
                <h3 className='text-xl mb-5 font-bold'>{homeContent.contact.title}</h3>
                <p className='text-sm md:text-base'>{homeContent.contact.description}</p>
                <SocialLinks />
              </div>
              <figure className='p-4  md:w-[50%]'>
                <Image 
                  src={homeContent.contact.image}
                  alt='Contact image'
                  width='auto'
                  height='auto'
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
  );
}

export default Contact;