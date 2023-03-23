import TextLink, { Icon, TextLinkUnderline } from "./Link";
import { HiHeart } from "react-icons/hi";
import { FaFacebook, FaTwitter, FaGithubAlt, FaTelegram, FaTelegramPlane, FaFacebookF, FaTwitterSquare } from "react-icons/fa";

function Footer() {
  let year = new Date().getFullYear();

  return (
    // mt-64 on footer
    <footer className="bg-white dark:bg-gray-900 pb-3 pt-20 text-black border border-l-0 border-gray-300 dark:border-gray-700 relative">
      {/* Newsletter */}
      {/* <div className="absolute w-full sm:w-auto md:h-64 overflow-hidden top-[-20%] sm:left-[10%] sm:right-[10%] lg:left-[15%] lg:right-[15%] mx-auto bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-md dark:shadow-none shadow-gray-200 rounded-lg">
    <div className="flex justify-around">
      <div className="px-5 py-10">
        <h1 className="font-bold text-2xl mb-3 dark:text-white">Want more Templates?</h1>
        <p className="text-gray-500 dark:text-gray-400">Subscribe to get updated when new products arrive !!!</p>
  
        <form action="/newsletter" className="mt-5 flex" method="post">
          <input type="email" name="email" inputmode="email" enterkeyhint="send" className="outline-0 p-2 sm:p-3 border border-r-0 border-gray-300 focus:border-gray-400 dark:border-gray-700 text-black rounded-tl dark:text-gray-400 rounded-bl w-full bg-white dark:bg-gray-900 caret-orange-600"
            placeholder="Enter email here. . ." aria-label="Enter email here to receive updates from us." required>
          <button type="submit" className="bg-orange-600 px-2 text-white font-semibold rounded-tr rounded-br hover:opacity-90">Subscribe</button>
        </form>
      </div>

      <img src="/img/svg/newsletter-man.svg" alt="Vector image of a man holding a phone." className="hidden md:block w-1/4 lg:w-1/5 pt-3">
    </div>
    
  </div> */}

      {/* Add these classes to the div below when you start newsletter "pt-36 xs:pt-24 md:pt-28" */}
      <div className="grid md:flex justify-around gap-y-16 gap-x-4 mb-16 ">
        {/* Note */}
        <div className="text-center sm:text-left mx-auto mb-5 md:w-1/3">
          <h2 className="font-bold text-2xl mb-2 tracking-wide dark:text-white">
            Emmanuel
            <span className="text-primary">Sanctuary</span>
          </h2>
          <p className="text-gray-500">
            A place of power and sanctification.
          </p>

          <div className="flex flex-wrap gap-x-7 gap-y-5 text-3xl mt-7 justify-center sm:justify-start">
            <Icon icon={<FaFacebook />} />
            <Icon icon={<FaTwitterSquare className="rounded-full" />} />
            <Icon icon={<FaTelegram />} />
          </div>
        </div>

        {/* Help */}
        <div className="mx-auto">
          <h2 className="font-bold text-xl mb-4 dark:text-white">Help</h2>
          <ul className="flex flex-col items-start gap-y-2 text-left font-semibold text-gray-500 dark:text-gray-400">
            <li>
              <TextLink value="Locate Us" href='//goo.gl/maps/kN75GtrgYcDuU2Jc8' external={true} />
            </li>
            <li>
              <TextLink value="Contact" href='/contact' />
            </li>
            <li>
              <TextLink value="Project Support" href='/give' />
            </li>
          </ul>
        </div>

       {/* Desc */}
       <div className="mx-auto">
          <h2 className="font-bold text-xl mb-4 dark:text-white">Who We Are</h2>
          <ul className="flex flex-col items-start gap-y-2 text-left font-semibold text-gray-500 dark:text-gray-400">
            <li>
              <TextLink value="About" href='/about' />
            </li>
            <li>
              <TextLink value="Mission and Vision" href='/mission-and-vision' />
            </li>
            <li>
              <TextLink value="Our Beliefs" href='/our-beliefs' />
            </li>
          </ul>
        </div>
 
      </div>

      {/* Sub Footer */}
      <div className="h-1 w-full bg-gradient-to-r from-green-600 to-red-500"></div>

      <div className="flex flex-wrap justify-around mt-8 mb-4 gap-6 text-tiny px-1 font-thin leading-wide text-center">
        {/* Copyright */}
        <p className="text-gray-600 dark:text-gray-500">
          Copyright <TextLink value="Emmanuel Sanctuary" href="/" /> &copy; &nbsp;
          <span id="year">{year}</span> || All Rights Reserved
        </p>

        {/* <p className="text-gray-600 dark:text-gray-500">
          Built with <HiHeart className="inline text-red-600" /> by{" "}
          <TextLinkUnderline
            value="Abraham"
            href="//github.com/abrahamebij"
            external={true}
          />{" "}
          and Illustrations provided by{" "}
          <TextLinkUnderline
            value="Storyset"
            href="//storyset.com/online"
            external={true}
          />
        </p> */}
      </div>
    </footer>
  );
}

export default Footer;
