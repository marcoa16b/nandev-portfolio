
import Image from "next/image";
import Link from "next/link";
import { homeContent} from "@/utils/ContentRender";
import { FaDownload } from 'react-icons/fa'


const About = () => {
  return (
    <section className='section'>
      <div className='container'>
        <div className='column'>
          <h1 className='text-2xl lg:text-3xl font-bold my-4 text-center'>{homeContent.about.title}</h1>
          <div className='flex flex-col items-center md:flex-row'>
            <figure className='max-w-[400px] md:max-w-full'>
              <Image 
                src={homeContent.about.image}
                alt='about image'
                width='auto'
                height='auto'
                className='max-w-[256px] border-8 border-[--primary] md:max-w-[350px]'
              />
            </figure>
            <div className='p-4'>
              <h1 className='text-xl font-bold'>Mi nombre es Marco Agüero</h1>
              <p className='text-sm max-w-[600px] md:max-w-full lg:text-base md:text-left mt-3'>{homeContent.about.description}</p>
              <div className='text-sm flex flex-col items-center md:flex-row'>
                <div className='my-2 w-full'>
                  {
                    homeContent.about.tags.map((tag, i) => (
                      <p key={i}><b>{tag.title}</b> <span>{tag.content}</span></p>
                    ))
                  }
                  <Link href={homeContent.about.cvLink} legacyBehavior>
                    <a target='_blank' className='flex border-[3px] border-[--primary] items-center justify-center max-w-[170px] py-2 my-2'>Descargar CV <span><FaDownload /></span></a>
                  </Link>
                </div>
                <div className='p-2 w-full'>
                {
                    homeContent.about.experience.map((tag, i) => (
                      <p key={i} className='bg-[--primary] py-4 flex flex-col items-center justify-center text-[--font-secondary] dark:text-[--font-secondary-dark] my-2'>
                        <b className='text-xl'>{tag.title}</b> 
                        <span>{tag.content}</span>
                      </p>
                    ))
                  }
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;