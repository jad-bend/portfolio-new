"use client";

import Image from "next/image";
import Link from "next/link";
import frontpic from "../../../../public/theswarmgarden/front.png";
import { Carousel } from "@material-tailwind/react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect } from "react";

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
        className="embla h-96 flex overflow-hidden w-full  border-[#161616] border-[1px]"
        ref={emblaRef}
      >
        <div className="embla__container">
          <div className="embla__slide">
            <Image
              loading="lazy"
              src="/theswarmgarden/front.png"
              width={5248}
              height={3560}
              alt="image 2"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="embla__slide">
            <Image
              loading="lazy"
              src="/theswarmgarden/inkyung.png"
              width={5248}
              height={3560}
              alt="image 3"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="embla__slide">
            <Image
              loading="lazy"
              src="/theswarmgarden/crowd.png"
              width={5248}
              height={3560}
              alt="image 2"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="embla__slide">
            {" "}
            <iframe
              className="h-full w-full object-cover"
              src="https://drive.google.com/file/d/1H96n_wRVx0tJnvW8-PixyAr46RjfCeaK/preview"
              allowFullScreen={true}
            ></iframe>
          </div>
          {/* <div className="embla__slide">
            <iframe
              className="h-full w-full object-cover"
              src="https://drive.google.com/file/d/1MgpAwgDdbixkbtuLSWkSYw1YOmRdcBoC/preview"
              allowFullScreen={true}
            ></iframe>
          </div> */}
        </div>
      </div>
      <div className="margin-auto w-[50%]">
        <button
          className="embla_prev hover:opacity-50 active:underline"
          onClick={scrollPrev}
        >
          {"<<"}
        </button>
        <span className="p-[10px]"> </span>
        <button
          className="embla__next hover:opacity-50 active:underline"
          onClick={scrollNext}
        >
          {">>"}
        </button>
      </div>
    </div>
  );
}

export default function SwarmGardenPage() {
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
            <div>The Swarm Garden</div>

            <ul className="pt-[24px] underline">
              <li>
                <Link
                  target="_blank"
                  href="/theswarmgarden/bendarkawi_jad_thesis.pdf"
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
                    Full Thesis Paper
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href="https://mediacentral.princeton.edu/media/The+Swarm+GardenA+A+Human-Swarm+Interactive+Platform+for+Self-Adaptive+Art%2C+Architecture+and+Dance+Performance%2C+Jad+Bendarkawi%2C+UG+%2724%2C+Yenet+Tafesse%2C+UG%2724+%28F258874D%29/1_89tso2zu/338387702"
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
                    Overview Video
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href="https://research.princeton.edu/news/princeton-research-day-spotlights-collaborations-across-campus"
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
                    PRD 2024 Article
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href="https://creativexproject.org/projects/swarm-garden"
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
                    CreativeX Website
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-1/5 pr-4">
            <div>April 2024</div>
            <div className="opacity-20 pt-[10px]">
              <div>#research,</div>
              <div>#hci,</div>
              <div>#robotics,</div>
              <div>#software,</div>
              <div>#hardware,</div>
              <div>#fabrication</div>
            </div>
          </div>

          <div className="w-4/5 h-12 font-thin">
            As a senior thesis researcher @ the{" "}
            <Link
              className={"underline hover:opacity-50"}
              target="_blank"
              href={"https://ssr.princeton.edu/research"}
            >
              Self-Organizing Swarms & Robotics Lab (SSR Lab)
            </Link>
            , I designed, fabricated, and programmed novel human-swarm
            interactions in application to a self-adaptive, robotic
            architectural display. The project culminated in a public exhibition
            at Princeton’s Lewis Center for the Arts on April 9, 2024. <br />
            <br />
            The Swarm Garden demonstrates an experimental, nature-inspired
            interactive architecture exhibit where 36 robotic flower modules
            bloom in response to human presence and can exhibit complex
            long-range and real-time responses through self-organization. Each
            module exploits the bistability of confinement – or the ability for
            a flexible sheet to buckle into flower-like patterns when pulled
            through a ring. Through direct interaction with the flower modules’
            sensors and a wearable device for capturing dance gestures and
            movement, visitors are empowered to discover emergent behaviors in
            the swarm through various modalities. We envision futures where
            dancers, artists, and performers can utilize architectural swarms
            like The Swarm Garden as extensions of their artistic works and
            employ swarm intelligence to create embodied experiences with
            technology. The Swarm Garden serves as a beacon for us to speculate
            a joyous future of coexistence between humans, machines, and nature
            through artistic and architectural robotic swarm applications.{" "}
            <br />
            <br />{" "}
            <span className="italic">
              **The Swarm Garden was awarded Outstanding Presentation at
              Princeton Research Day 2024. A journal publication is in
              production and the team has submitted latest work to ICRA@40.**
            </span>{" "}
            <br />
            <br />
            <span className="pb-[100px]">
              Made in collaboration with Yenet Tafesse, Merihan Alhafnawi,
              Radhika Nagpal, Lucia Stein-Montalvo, Vicky Chow, Sigrid
              Adriaenssens, and Azi Jones.
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
