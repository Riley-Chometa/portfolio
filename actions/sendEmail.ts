"use server"; 
import { getErrorMessage, validateString } from '@/lib/utils';
import { Resend } from 'resend';
import ContactFormEmail from '@/email/contact-form-email';
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const message = formData.get("message");
  const email = formData.get("senderEmail");

  if (!validateString(message, 5000)) {
    return {
      status: 400,
      body: "Invalid message"
    }
  }
  if (!validateString(email, 320)) {
    return {
      status: 400,
      body: "Invalid sender email"
    }
  }
  let data;
  try {
    data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "rileychometa@outlook.com",
      subject: "Message from contact form",
      replyTo: email as string,
      react: React.createElement(ContactFormEmail, { message: message as string, senderEmail: email as string })
    });
  } catch (error: unknown) {

    return {
      status: 500,
      body: getErrorMessage(error)
    }
  }
  if (data.error) {
    return {
      status: 500,
      body: getErrorMessage(data.error)
    }
  }

  return {
    status: 200,
    body: data
  }
};