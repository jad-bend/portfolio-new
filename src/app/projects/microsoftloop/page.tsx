"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect } from "react";
import loopHero from "../../../../public/microsoftloop/loophero.png";

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
        className="embla flex overflow-hidden w-full border-[#161616] border-[1px]"
        ref={emblaRef}
      >
        <div className="embla__container">
          <div className="embla__slide">
            <Image
              loading="lazy"
              src={loopHero}
              objectFit="cover"
              objectPosition="center center"
              alt="image 3"
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

export default function MicrosoftLoopPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeOut", duration: 1 }}
    >
      <div className="pt-[11px]">
        <EmblaCarousel />
        <div className="flex font-azeret pt-[25px] text-[13px]">
          <div className="w-3/6 h-12">
            <div>Microsoft Loop</div>

            <ul className="pt-[24px] underline">
              <li>
                <Link
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
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href="https://techcommunity.microsoft.com/t5/microsoft-365-insider-blog/streamline-your-workflow-with-file-uploads-to-loop-workspaces/ba-p/4235685?ocid=usoc_LINKEDIN_M365_spl100006260973029"
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
                    File Uploads
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href="https://x.com/MicrosoftLoop/status/1699501035985809614"
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
                    Homepage Tabs
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-1/2 pr-4">
            <div>Summer 2022-2024</div>
            <div className="pt-[10px] text-[#B13535]">
              <div>* Software development</div>
              <div>* Fullstack / Web dev</div>
              <div>* Product management</div>
              <div>* UI/UX design</div>
            </div>
          </div>

          <div className="w-4/5 h-12 font-thin">
            From Summer 2022-24 I was a software engineering intern at Microsoft
            working on the Loop App, a newly released Office tool designed to
            enable live, AI-powered, collaborative productivity. I've worked at
            the intersection of engineering, design, and product to build
            accessible, performant, and delightful user experiences for the Loop
            App. Below are some features I’ve worked on and/or shipped.
            <br />
            <br />
            <div className="underline font-normal italic">
              File Uploads (Fullstack, API Integration, UX)
            </div>
            Developed and rolled out new file upload feature to the Loop App, a
            Top 15 customer-requested feature and grounding work for enabling
            Copilot agents to perform more context-aware tasks on behalf of
            users. Integrated MS Graph API in backend packages, built new toast
            notification UX, edited core data models for file representation,
            and supervised feature across reviews for security, accessibility,
            and cross-platform compatibility.
            <br />
            <br />
            <div className="underline font-normal italic">
              Home Page Tabs (Frontend, UX, Performance, Telemetry)
            </div>
            Developed and shipped performant and accessible entry points and
            navigation for the Loop App homepage, boosting connected features’
            usage by 50%. Performed thorough testing and telemetry, created
            dashboards in Kusto to track performance metrics and updated
            diagnostic data inventories to more contextually log user engagement
            and optimize cross-functional workflows. 
            <br />
            <br />
            <span className="pb-[100px]">
              <div className="underline font-normal italic">
                Live Cursor Chat (Product Management, Frontend, UX)
              </div>{" "}
              Conducted user research, competitive analysis, and utilized OKRs
              to produce a functional specification for the development of a
              synchronous, in-document chat feature. Developed animations and
              frontend experience to emphasize multiplayer presence, digital
              expression, and feelings of community.
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
