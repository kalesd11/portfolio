import React from "react";
import { FaGithub, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact rounded-md w-full md:w-1/2">
      <div className="flex flex-wrap gap-4 justify-start mx-8 my-2 place-items-center">
        <h3 className="text-blue-600 text-2xl font-bold underline py-1 rounded-md">
          Suresh D. Kale
        </h3>
        {/* <div className="flex gap-x-3 h-fit px-2 py-1 nav rounded-md">
          <a target="_blank" href="/">
            <FaGithub className="hover:text-gray-600" />
          </a>
          <a target="_blank" href="/">
            <FaFacebook className="hover:text-blue-700 rounded-sm" />
          </a>
          <a target="_blank" href="/">
            <FaInstagram className="hover:text-red-600" />
          </a>
          <a target="_blank" href="/">
            <FaWhatsapp className="hover:text-green-700" />
          </a>
        </div> */}
      </div>
      <div className="mx-8 my-12 text-center">
        <p className="font-bold text-blue-600">
          Mobile No : <a target="_blank" href="tel:+917219737119" className="text-white underline hover:text-green-600">+91 7219737119</a>
        </p>
      </div>
      <hr className="mx-8" />
      <div className="mx-8 my-12 text-center">
        <p className="font-bold text-blue-600">
          Email ID :{" "}
          <a target="_blank" href="mailto:surajkales@outlook.com" className="text-white underline hover:text-green-600">surajkales@outlook.com</a>
        </p>
      </div>
      <hr />
      <div className="flex justify-center gap-x-14 h-fit px-2 py-1 mt-2 rounded-md">
          <a target="_blank" href="/">
            <FaGithub className="hover:text-gray-600" />
          </a>
          <a target="_blank" href="/">
            <FaFacebook className="hover:text-blue-700 rounded-sm" />
          </a>
          <a target="_blank" href="/">
            <FaInstagram className="hover:text-red-600" />
          </a>
          <a target="_blank" href="/">
            <FaWhatsapp className="hover:text-green-700" />
          </a>
        </div>
    </div>
  );
};

export default Contact;
