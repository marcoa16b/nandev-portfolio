import Image from "next/image";
import Link from "next/link";


const Portfolio = ({ data }) => {

  // console.log("Fixed data => ", data)
  return (
    <section className='section bg-[--background-secondary] dark:bg-[--background-secondary-dark]'>
      <div className='container'>
        <div className='column text-center'>
          <h1 className='text-2xl lg:text-3xl font-bold my-4 text-center'>Últimos proyectos</h1>
          <div className='z-0 flex flex-col items-center'>
            {data?.map((project, i) => (
              <div key={i} className='flex flex-col items-center sm:max-w-[630px] md:flex-row md:max-w-[90%] bg-[--background-primary] dark:bg-[--background-primary-dark] rounded-xl my-5'>
                <figure className='w-[90%] md:w-[40%]'>
                  <Image
                    src={project.image}
                    alt='project image'
                    width={400}
                    height={300}
                    className='w-full rounded-lg'
                  />
                </figure>
                <div className='md:w-[60%] md:px-4'>
                  <h3 className='text-md md:text-xl font-bold mt-4'>{project.name}</h3>
                  <p className='text-xs md:text-base my-4'>{project.description}</p>
                  <Link href={project.projectUrl} legacyBehavior>
                    <a target='_blank' className=''>
                      <span className="link link-underline link-underline-black font-bold hover:text-[--primary]">Ver proyecto</span>
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio