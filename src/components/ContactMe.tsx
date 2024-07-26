import React from "react";
import linkedInLogo from "public/linkedin.svg";
import emailLogo from "public/mail.svg";
import instagramLogo from "public/instagram.svg";
import twitterLogo from "public/twitter.svg";
import Contact from "./Contact";

const ContactMe = () => {
  const contacts = [
    {
      logo: linkedInLogo,
      name: "LinkedIn",
      handle: "https://www.linkedin.com/in/ashok-atragadda/",
    },
    {
      logo: emailLogo,
      name: "Email",
      handle: "mailto:ashok7075657409@gmail.com",
    },
    {
      logo: instagramLogo,
      name: "Instagram",
      handle: "https://www.instagram.com/cygnuxxs/",
    },
    { logo: twitterLogo, name: "Twitter", handle: "https://x.com/AshyGany" },
  ];
  return (
    <div id="contact" className="w-full py-[8rem] flex-col mt-12 bg-neutral-100 flex justify-center items-center">
      <p className="text-xl font-medium text-neutral-400">Contact Me</p>
      <p className="text-3xl font-semibold my-4">
        I&apos;m Up and Running, Let&apos;s Chat!
      </p>
      <div className="flex gap-4 py-12">
        {contacts.map((contact, idx) => (
          <Contact
            handle={contact.handle}
            key={idx}
            logo={contact.logo}
            name={contact.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactMe;
