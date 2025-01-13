"use client";
import React from 'react'
import SectionHeading from '@/components/section-heading'
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView("About");
  
  return (
    <motion.section 
        ref={ref}
        className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        id="about"
    >
        <SectionHeading >About Me</SectionHeading>
        <p className="mb-3">
          After graduating with a diploma in <span className="font-bold">Computer Systems Technology</span>, I attended the <span className="font-bold">University of Saskatchewan</span> while working part-time as a programmer and taking on contract work developing <span className="font-bold">web applications</span> to further develop my skills. My favourite aspect of programming is the <span className="italic">challenge of solving complex problems</span> and the satisfaction of overcoming them. My core tech stack includes <span className="font-bold">TypeScript</span>, <span className="font-bold">React</span>, <span className="font-bold">Next.js</span>, <span className="font-bold">Node.js</span>, and <span className="font-bold">Neo4j</span>. I&apos;m passionate about <span className="italic">staying up-to-date with the latest technologies</span> and expanding my skill set. 
        </p>

        <p>
          In my free time, I enjoy <span className="italic">gaming</span>, <span className="italic">watching anime</span>, and <span className="italic">experimenting with Linux</span> on my home server, which runs <span className="font-bold">Ubuntu</span>. I also love <span className="italic">learning new skills</span> and recently started teaching myself to play the <span className="font-bold">keyboard piano</span>.
        </p>
    </motion.section>
  )
}
