
import Image from "next/image";
import SocialLinks from "../SocialLinks";
import { homeContent } from "@/utils/ContentRender";
import { HeadingImg } from "@/assets/images";

const Header = () => {
  return (
    <section className='section min-h-screen flex flex-col items-center justify-center px-4 md:px-5 lg:px-8 bg-[--background-secondary] dark:bg-[--background-secondary-dark]'>
      <div className='container'>
        <div className='column md:grid md:grid-cols-2'>
          <div className='flex flex-col items-center justify-center'>
            <h1 className='text-2xl lg:text-3xl font-bold my-4 text-center md:text-left'>{homeContent.header.title}</h1> 
            <p className='text-sm lg:text-lg text-center md:text-left'>{homeContent.header.description}</p>
            <SocialLinks />
          </div>
          <figure>
            <Image
              src={HeadingImg}
              alt='header image'
              width='auto'
              header='auto'
              priority
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Header;