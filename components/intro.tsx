"use client";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link";
import React from "react"
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { getYearsExperience } from "@/lib/utils";

export default function Intro() {
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
    const { ref } = useSectionInView("Home", 0.5);

    
  return (
    <section ref={ref}
        className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]" id="home">
        <div className="flex items-center justify-center">
            <div className='relative'>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        type:"tween",
                        duration: 0.2
                    }}
                >
                    <Image 
                        src="/pfp.png" 
                        alt="Riley Portrait" 
                        width="192" 
                        height="192"
                        quality="95"
                        priority={true}
                        className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl'
                    />
                    </motion.div>

                    <motion.span className='absolute bottom-0 right-0 text-4xl'
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type:"spring",
                            stiffness: 125,
                            delay: 0.1,
                            duration:0.7
                        }}
                    >
                        👋
                    </motion.span>
            </div>
        </div>

        <motion.h1 className="mb-10 mt-4 px-4 text-2xl font-medium leading-[1.5] sm:text-4xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <span className="font-bold">Hello, I&apos;m Riley!</span> I&apos;m a <span className="font-bold">full-stack developer</span> based in Canada with over <span className="font-bold">{getYearsExperience()} years</span> of experience. I&apos;m passionate about developing software, IT operations, automating processes, improving collaboration, and ensuring efficient deployment. I&apos;m currently looking for new opportunities, so feel free to reach out using the form below!
        </motion.h1>

        <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.1
            }}
        >
            <Link href="#contact"
                className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                onClick={() => {
                    setActiveSection("Contact");
                    setTimeOfLastClick(Date.now());
                }}
            >Contact me here<BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" /></Link>

            <a 
                className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
                href="/Riley_Chometa_Resume.pdf" download>Download Resume<HiDownload className="opacity-60 group-hover:translate-y-0.5 transition"/>
            </a>

            <a
                className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                href="https://www.linkedin.com/in/riley-chometa/" target="_blank"
            >
                <BsLinkedin />
            </a>
            
            <a 
                className="bg-white text-gray-700 p-4 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60" 
                href="https://www.github.com/riley-chometa" target="_blank"
            >
                <FaGithubSquare />
            </a>
        </motion.div>
    </section>
  )
}
