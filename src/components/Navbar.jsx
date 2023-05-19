import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from '@/assets/images/logo.png'
import "@theme-toggles/react/css/Around.css"
import { Around } from "@theme-toggles/react"
import { useTheme } from 'next-themes'
import { routes } from "../utils/ContentRender";

const LinkItem = ({ link, name, target }) => {
  return (
    <Link href={link} legacyBehavior>
      <a target={target} className={`px-2 py-1 relative mx-0 my-2 md:mx-2 md:my-0 max-w-[150px] text-xl hover:font-bold duration-200`}>
        {name}
      </a>
    </Link>
  );
}

export default function Navbar () {
  const [isToggled, setToggle] = useState(true)
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <div className='fixed h-[60px] top-0 left-0 w-full md:h-[80px] flex items-center justify-between px-5 bg-[--background-primary] dark:bg-[--background-primary-dark] z-50'>
      <figure>
        <Image 
          src={Logo}
          alt='logo'
          width='auto'
          height='auto'
          className='w-[70px] md:w-[100px]'
        />
      </figure>
      <div onClick={() => setOpen(!open)} className='w-[40px] h-[40px] bg-[--primary] hover:bg-[--secondary] cursor-pointer duration-300 rounded-xl flex items-center justify-center md:hidden'>
        <svg className='w-[25px] fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
        </svg>
      </div>

      <nav className='hidden md:flex items-center'>
        {
          routes.map((item, i) => (
            <LinkItem 
              key={i}
              link={item.path}
              name={item.name}
              target={item.target}
            />
          ))
        }
      </nav>

      <nav className={`${
        open ? 'translate-x-[0]' : 'translate-x-[110%]'
      } fixed md:hidden right-0 top-[60px] min-w-[80%] dark:text-[--font-primary] md:text-[--font-secondary] p-5 bg-[--secondary] duration-500 rounded-bl-3xl flex flex-col`}>
        {
          routes.map((item) => (
            <div
              key={item.name}
              onClick={() => setOpen(!open)}
              className='my-1'
            >
              <LinkItem 
                link={item.path}
                name={item.name}
                target={item.target}
              />
            </div>
          ))
        }
        <div className='flex items-center'>
          <Link href='/#contacto' legacyBehavior>
            <a 
              className={`bg-[--primary] dark:text-[--font-primary] mr-5 text-center md:text-[--font-secondary] rounded-xl px-3 py-1
                relative mx-0 my-2 md:mx-2 md:my-0 max-w-[150px] text-xl hover:font-bold duration-200
              `}
            >
              Contacto
            </a>
          </Link>
        </div>
      </nav>

      <div className='hidden md:flex'>
        <Link href='/#contacto' legacyBehavior>
          <a 
            className={`bg-[--primary] text-center text-[--font-secondary] rounded-xl px-3 py-1
              relative mx-0 my-2 md:mx-2 md:my-0 max-w-[150px] text-xl hover:font-bold duration-200
            `}
          >
            Contacto
          </a>
        </Link>
      </div>

      <div onClick={() => {
          if (theme == 'light'){
            setTheme('dark');
            setToggle(false)
          } else if (theme == 'dark') {
            setTheme('light');
            setToggle(true)
          }
        }} className='fixed bottom-3 right-3 w-[40px] h-[40px] bg-[--primary] flex items-center justify-center rounded-xl text-white dark:text-[#f5d775] text-3xl'>
          <Around duration={750} reversed toggled={isToggled} toggle={setToggle} />
      </div>
    </div>
  );
}