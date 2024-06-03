"use client";

import CheckIcon from "@/libs/icons/CheckIcon";
import ClipboardIcon from "@/libs/icons/ClipboardIcon";
import MailsIcon from "@/libs/icons/MailsIcon";
import SendIcon from "@/libs/icons/SendIcon";
import contactImage from "#/contact.svg";
import messageImage from "#/message.svg";

import axios, { AxiosError } from "axios";
import Image from "next/image";
import { useState } from "react";

export default function ContactSection() {
  const [isSending, setIsSending] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText("sain.biswas2614@gmail.com");
      setCopied(true);
    } catch (error: any) {}
  }

  function sendEmail(formData: FormData) {
    setIsSending(true);

    axios
      .post("/api/email", {
        email: formData.get("email"),
        name: formData.get("name"),
        message: formData.get("message"),
      })
      .catch((error: AxiosError) => {})
      .finally(() => setIsSending(false));
  }

  return (
    <section
      id="contact"
      className="grid-cols-12 grid-rows-12 p-5 pt-10 lg:grid lg:min-h-screen"
    >
      <div className="col-start-1 col-end-13 row-start-1 row-end-3 text-right font-rowdies text-3xl sm:text-5xl md:text-7xl">
        <h1 className="bg-base-grad bg-clip-text text-transparent">
          Contact Me
        </h1>
      </div>
      <div className="col-start-7 col-end-12 row-start-3 row-end-12 mb-10 flex flex-col gap-6 px-5 sm:text-lg md:text-2xl lg:mb-0 lg:px-0">
        <form action={sendEmail} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Name..."
              name="name"
              className="rounded-md bg-background px-2 py-1 ring-2 ring-border focus:outline-border"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email..."
              id="email"
              className="rounded-md bg-background px-2 py-1 ring-2 ring-border focus:outline-border"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="message">Message for me</label>
            <textarea
              name="message"
              placeholder="Message..."
              id="message"
              rows={4}
              className="rounded-md bg-background px-2 py-1 ring-2 ring-border focus:outline-border"
            />
          </div>
          <button
            type="submit"
            disabled={isSending}
            className="flex items-center justify-center gap-4 rounded-lg border-2 border-border bg-accent py-2 transition-all hover:rounded-l-full hover:rounded-r-full hover:bg-base-grad hover:text-white"
          >
            {isSending && (
              <div className="h-5 w-5 animate-spin rounded-full border-t-2 border-black text-transparent dark:border-white">
                .
              </div>
            )}
            <span>Send</span> <SendIcon className="h-5 w-5" />
          </button>
        </form>
        <div className="relative h-4 text-center sm:h-9 md:h-12">
          <h6 className="inline bg-background px-2">or contact directly</h6>
          <hr className="absolute bottom-[60%] -z-10 w-full" />
        </div>
        <div className="flex items-center justify-center gap-5 rounded-lg bg-accent py-2 hover:rounded-l-full hover:rounded-r-full hover:bg-base-grad hover:text-white">
          <MailsIcon className="" />
          <span>sain.biswas2614@gmail.com</span>
          <button
            onClick={handleCopy}
            className="rounded-md border-2 border-border p-1"
          >
            {copied ? (
              <CheckIcon className="h-5 w-5" />
            ) : (
              <ClipboardIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
      <div className="relative col-start-1 col-end-5 row-start-7 row-end-12 hidden lg:block">
        <Image src={contactImage} alt="" fill className="object-contain" />
      </div>
      <div className="relative col-start-3 col-end-5 row-start-2 row-end-4 hidden lg:block">
        <Image src={messageImage} alt="" fill className="object-contain" />
      </div>
      <div className="col-start-1 col-end-13 row-start-12 row-end-13 flex flex-col items-center justify-center text-xs md:text-base">
        <h6>
          {" "}
          <span className="text-base md:text-lg">&copy;</span> Sain Biswas All
          rights reserved.
        </h6>
        <h6>
          <strong>Tech Stack of the website: </strong> NextJS, ReactJS, Resend,
          Tailwind CSS{" "}
        </h6>
      </div>
    </section>
  );
}
