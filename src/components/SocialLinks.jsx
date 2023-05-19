import Link from "next/link";


const SocialLinks = () => {
  return (
    <div className='flex flex-wrap items-center justify-around my-4 max-w-[400px] m-auto'>
      {/* INSTAGRAM */}
      <Link href='https://www.instagram.com/nando._.dev/' legacyBehavior>
        <a target='_blank' className='flex items-center justify-center m-2 hover:scale-110 duration-200 bg-[--primary] w-[50px] h-[50px] rounded-full'>
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_32_671)">
              <path d="M5 10C5 8.67392 5.52678 7.40215 6.46447 6.46447C7.40215 5.52678 8.67392 5 10 5H20C21.3261 5 22.5978 5.52678 23.5355 6.46447C24.4732 7.40215 25 8.67392 25 10V20C25 21.3261 24.4732 22.5978 23.5355 23.5355C22.5978 24.4732 21.3261 25 20 25H10C8.67392 25 7.40215 24.4732 6.46447 23.5355C5.52678 22.5978 5 21.3261 5 20V10Z" stroke="#FBFBFB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M11.25 15C11.25 15.9946 11.6451 16.9484 12.3483 17.6517C13.0516 18.3549 14.0054 18.75 15 18.75C15.9946 18.75 16.9484 18.3549 17.6517 17.6517C18.3549 16.9484 18.75 15.9946 18.75 15C18.75 14.0054 18.3549 13.0516 17.6517 12.3483C16.9484 11.6451 15.9946 11.25 15 11.25C14.0054 11.25 13.0516 11.6451 12.3483 12.3483C11.6451 13.0516 11.25 14.0054 11.25 15Z" stroke="#FBFBFB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M20.625 9.375V9.3875" stroke="#FBFBFB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
              <clipPath id="clip0_32_671">
                <rect width="30" height="30" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </a>
      </Link>
      
      {/* FACEBOOK */}
      <Link href='https://www.facebook.com/marco.aguero.984/' legacyBehavior>
        <a target='_blank' className='flex items-center justify-center m-2 hover:scale-110 duration-200 bg-[--primary] w-[50px] h-[50px] rounded-full'>
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.75 12.5V17.5H12.5V26.25H17.5V17.5H21.25L22.5 12.5H17.5V10C17.5 9.66848 17.6317 9.35054 17.8661 9.11612C18.1005 8.8817 18.4185 8.75 18.75 8.75H22.5V3.75H18.75C17.0924 3.75 15.5027 4.40848 14.3306 5.58058C13.1585 6.75269 12.5 8.3424 12.5 10V12.5H8.75Z" stroke="#FBFBFB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </Link>

      {/* TWITTER */}
      <Link href='https://twitter.com/nandev_16' legacyBehavior>
        <a target='_blank' className='flex items-center justify-center m-2 hover:scale-110 duration-200 bg-[--primary] w-[50px] h-[50px] rounded-full'>
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27.5 5.0125C26.25 5.625 25.025 5.87375 23.75 6.25C22.3487 4.66875 20.2712 4.58125 18.275 5.32875C16.2787 6.07625 14.9712 7.90375 15 10V11.25C10.9438 11.3538 7.33125 9.50625 5 6.25C5 6.25 -0.2275 15.5413 10 20C7.66 21.5588 5.32625 22.61 2.5 22.5C6.635 24.7538 11.1413 25.5288 15.0425 24.3963C19.5175 23.0963 23.195 19.7425 24.6062 14.7188C25.0272 13.1908 25.2363 11.6123 25.2275 10.0275C25.2275 9.71625 27.115 6.5625 27.5 5.01125V5.0125Z" stroke="#FBFBFB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </Link>

      {/* LINKEDIN */}
      <Link href='https://www.linkedin.com/in/marcoa16b/' legacyBehavior>
        <a target='_blank' className='flex items-center justify-center m-2 hover:scale-110 duration-200 bg-[--primary] w-[50px] h-[50px] rounded-full'>
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 7.5C5 6.83696 5.26339 6.20107 5.73223 5.73223C6.20107 5.26339 6.83696 5 7.5 5H22.5C23.163 5 23.7989 5.26339 24.2678 5.73223C24.7366 6.20107 25 6.83696 25 7.5V22.5C25 23.163 24.7366 23.7989 24.2678 24.2678C23.7989 24.7366 23.163 25 22.5 25H7.5C6.83696 25 6.20107 24.7366 5.73223 24.2678C5.26339 23.7989 5 23.163 5 22.5V7.5Z" stroke="#FBFBFB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 13.75V20" stroke="#FBFBFB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 10V10.0125" stroke="#FBFBFB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15 20V13.75" stroke="#FBFBFB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M20 20V16.25C20 15.587 19.7366 14.9511 19.2678 14.4822C18.7989 14.0134 18.163 13.75 17.5 13.75C16.837 13.75 16.2011 14.0134 15.7322 14.4822C15.2634 14.9511 15 15.587 15 16.25" stroke="#FBFBFB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </Link>
    </div>
  );
}

export default SocialLinks;