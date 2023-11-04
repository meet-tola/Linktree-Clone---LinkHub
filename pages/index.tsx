import { useState } from "react";
import Link from "next/link";

export default function Home() {
    const [navbarOpen, setNavbarOpen] = useState<boolean>(false);

  return (
    <div className="text-white bg-black">
      <header className="text-white body-font">
  <div className="container mx-auto flex flex-wrap p-5 md:flex-row">
    <div className="flex title-font font-medium text-white mb-4 md:mb-0 pr-4">
      <span className="ml-3 text-3xl">Linkhub</span>
    </div>
    <button
      className="text-white cursor-pointer text-xl leading-none py-1 border border-solid border-transparent rounded  block md:hidden outline-none focus:outline-none ml-auto pb-3"
      type="button"
      onClick={() => setNavbarOpen(!navbarOpen)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-menu"
      >
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
      </svg>
    </button>
    <div
      className={
        "md:flex flex-grow items-center" +
        (navbarOpen ? " flex" : " hidden")
      }
      id="example-navbar-danger"
    >
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center font-semibold pl-7">
        <Link className="mr-6 hover:text-white" href="#">
          Github
        </Link>
        <Link className="mr-6 hover:text-white" href="#">
          Twitter
        </Link>
      </nav>
    </div>
    <div className="mt-2 ml-3 lg:ml-0">
    <Link
      href="/login"
      className="px-5 py-2 text-sm font-semibold text-gray-900 bg-gray-100 transition duration-500 ease-in-out transform rounded-lg hover:text-gray-200 focus:text-gray-900 hover:bg-blue-600 focus:outline-none focus:shadow-outline no-underline"
    >
      Login
    </Link>
    </div>
    
  </div>
</header>


    <section className="sm:pt-2 text-black body-font lg:pt-20">
      <div className="container px-5 pt-8 mx-auto lg:px-4 lg:py-2">
        <div className="flex flex-col w-full mb-2 text-left md:text-center ">
          <h1 className="mb-2 text-6xl font-semibold tracking-tighter text-white lg:text-8xl md:text-7xl">
            <span>Welcome to </span>
            <br className="hidden lg:block"></br>
            LinkHub
          </h1>
          <br></br>
          <p className="mx-auto  text-xl text-center font-normal leading-relaxed text-gray-600 dark:text-gray-300 lg:w-2/3">
          Your Personalized Linktree Hub, Where Your Connections and Content Come Together
          </p>
          <div className="mt-6 flex justify-center">
          <Link
                href="/login"
                className="px-5 py-2 text-sm font-semibold text-gray-900 bg-gray-100 transition duration-500 ease-in-out transform rounded-lg hover:text-gray-200 focus:text-gray-900 hover:bg-blue-600 focus:outline-none focus:shadow-outline no-underline"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="px-4 py-2 ml-3 text-sm font-semibold text-gray-900 bg-gray-100 transition duration-500 ease-in-out transform rounded-lg hover:text-gray-200 focus:text-gray-900 hover:bg-blue-600 focus:outline-none focus:shadow-outline no-underline"
              >
                Signup
              </Link>
          </div>
          
        </div>
      </div>
      
    </section>

    <footer className="text-white body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center" href="https://twitter.com/meet-tola">
          <span className="ml-3 text-xl">Meet Tola</span>
        </a>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a href="https://facebook.com/">
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a className="ml-3" href="https://twitter.com/">
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a className="ml-3" href="https://instagram.com/">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a className="ml-3" href="https://www.linkedin.com/in/jacklatimer/">
            <svg
              fill="currentColor"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </footer>
    </div>
  );
}
