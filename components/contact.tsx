"use client";
import { useSectionInView } from '@/lib/hooks';
import React from 'react'
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  
  return (
    <motion.section 
      id="contact" 
      ref={ref} 
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] scroll-mt-28"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1, 
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">Please contact me directly at <a className="underline" href="mailto:rileychometa@outlook.com">rileychometa@outlook.com</a> or through this form.</p>

      <form className="mt-10 flex flex-col dark:text-black" action={async (formData) => {
        const {body, status} = await sendEmail(formData);

        if (status != 200) {
          toast.error(body);
          return;
        }
        else {
          toast.success("Message sent!");
          return;
        }

      }}>
        <input className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline:none" 
          name="senderEmail"
          type="email" 
          maxLength={320}
          required
          placeholder="Your email"
        />
        <textarea 
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline:none"
          name="message"
          maxLength={5000}
          required
          placeholder="Your message"
        ></textarea>
        <SubmitBtn />
      </form>
    </motion.section>
  )
}
