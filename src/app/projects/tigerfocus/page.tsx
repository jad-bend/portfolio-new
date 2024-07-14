"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect } from "react";
import tigerHero from "../../../../public/tigerfocus/tigerfocushero.png";

function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div>
      <div
        className="embla h-96 flex overflow-hidden w-full border-[#161616] border-[1px]"
        ref={emblaRef}
      >
        <div className="embla__container">
          <div className="embla__slide">
            <Image
              loading="lazy"
              src={tigerHero}
              objectFit="cover"
              objectPosition="center"
              alt="image 3"
              className="scale-[1.15]"
            />
          </div>
        </div>
      </div>
      <div className="margin-auto w-[50%] opacity-0">
        <button className="embla_prev opacity-0 active:underline">
          {"<<"}
        </button>
        <span className="p-[10px]"> </span>
        <button className="embla__next hover:opacity-50 active:underline">
          {">>"}
        </button>
      </div>
    </div>
  );
}

export default function TigerFocusPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeOut", duration: 1 }}
    >
      <div className="pt-[11px]">
        <EmblaCarousel />
        <div className="flex font-azeret pt-[25px]">
          <div className="w-2/6 h-12">
            <div>TigerFocus</div>

            <ul className="pt-[24px] text-[15px] font-thin italic ">
              <li>
                {/* <Link
                  target="_blank"
                  href="https://loop.cloud.microsoft/learn"
                  className="hover:opacity-50"
                >
                  <span className="flex items-center ">
                    <span className="pr-[10px]">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    Loop App
                  </span>
                </Link> */}
              </li>
            </ul>
          </div>
          <div className="w-1/5 pr-4">
            <div>March 2023</div>
            <div className="opacity-20 pt-[10px]">
              <div>#software,</div>
              <div>#databases,</div>
              <div>#webdev,</div>
              <div>#ui/ux,</div>
              <div>#branding,</div>
            </div>
          </div>

          <div className="w-4/5 h-12 font-thin">
            A project for{" "}
            <span className="underline">
              COS333: Advanced Programming Techniques
            </span>
            ; I worked on the user research, end-to-end design, and software
            development of a productivity tool for Princeton students.
            <br></br>
            <br></br>
            In response to the need for more organization expressed by Princeton
            students, our team designed TigerFocus -- a web-based,
            individualized study tool meant to facilitate better habits through
            tracking assignments and the Pomodoro study method. This method uses
            a patterned cycle of work and break to maximize concentration.
            Students are able to create their own course entries and assignment
            lists to track due dates, but can also import assignment lists
            created and made public by fellow students and instructors to save
            the hassle of creating your own.
            <br></br>
            <br></br>
            TigerFocus is a three-tier web application deployed on Render. The
            server was developed using Python Flask, utilizing the Jinja2
            template engine for page routing / rendering. Our database runs on
            PostgreSQL, with SQLAlchemy for effective object-relational mapping.
            Frontend development was done in HTML/CSS and JavaScript, with AJAX
            for dynamic content updates + real-time searching through public
            course listings without page re-renders.
            <br></br>
            <br></br>
            <span className="pb-[100px]">
              Made in collaboration with Ashley Ponce & Howard Wang.
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
