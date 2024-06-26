"use client";

import "../globals.css";
import React from "react";

import { useMDXComponents } from "../../mdx-components";
import MDXContent from "./content.mdx";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Page() {
  const components = useMDXComponents({});
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 800,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center pb-10 pt-6">
      <div
        className="bg-gradient-to-r from-gray-900 via-gray-950 to-black border border-cyan-700 flex shadow-lg shadow-cyan-600 mx-20 justify-left opacity-98 
        px-4 py-6
      "
        data-aos="fade-down"
        data-aos-delay="200"
      >
        <article
          className="prose mx-5 text-left text-white prose-headings:text-white prose-code:text-white"
          data-aos="fade-down"
          data-aos-delay="400"
        >
          <MDXContent components={components} />
        </article>
      </div>
    </div>
  );
}
