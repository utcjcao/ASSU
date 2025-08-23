"use client";

import React from "react";
import Text from "@/components/common/Text";
import AssuImage from "@/components/common/AssuImage";
import Divider from "@/components/common/Divider";
import Link from "@/components/common/Link";

interface Executive {
  name: string;
  title: string;
  image: string;
  bio: string;
  email: string;
  linkedin?: string;
  instagram?: string;
}

const executives: Executive[] = [
  {
    name: "Firdaus Sadid",
    title: "President",
    image: "/images/about-executives-firdaus.webp",
    bio: "Hi AriSci! \n My name is Firdaus, and I'm ecstatic to be your President for this year. The past two years on ASSU, as Executive and Treasurer, have been tremendously rewarding, and I am beyond grateful to serve the student community once again. \n\n I look forward to advancing initiatives in consultation with the Office of the Dean, maintaining extended library hours during final exam periods, ensuring smooth progress of core ASSU events (Arbor Journal, URC, Open Mic Night), and helping students during my office hours. When not at the ASSU office, you can find me at case competitions, a research lab, or exploring Toronto with BikeShare. \n It's always a delight to meet new people – reach out or swing by the office!",
    email: "president@assu.ca",
    linkedin: "linkedin.com/in/firdaus-sadid",
  },
  {
    name: "Farida Kayed",
    title: "Executive",
    image: "/images/about-executives-farida.webp",
    bio: "Hey Art Sci! \n\n My name is Farida, and I am second year double majoring in Pharmtox and Human Bio with a minor in immunology. It is an honour to represent you and I am really excited to advocate for you at meetings with members of the Dean's Office, make ASSU services accessible to you and empower our collective Arts and Science community! To unwind, I draw/paint, play piano, basket ball, volleyball and host events across campus! \n\n Got questions, need a chat, or just want to say hi? Drop by my office hours at SS 1068. Feel free to reach out via email at farida@assu.ca or dm me directly on Instagram @faridakayed, I love helping out and making new friends!",
    email: "farida@assu.ca",
    instagram: "@faridakayel",
  },
  {
    name: "Mia Rodrigo",
    title: "Executive",
    image: "/images/about-executives-mia.webp",
    bio: "Hello! \n\n My name is Mia and it is an honour to be one of your ASSU Executives this year. I'm pleased that I am able to advocate towards a diversified learning experience for A&S students here at UofT. This year, I aim to focus on course accessibility, increased collaboration and networking opportunities through course unions and managing the Arbor undergraduate research journal. Outside of uni, I am an avid reader and a lover of cats and music. I also like to lift weights and go on hikes! \n\n Feel free to visit our office to chat or ask any questions. We're here for you and want you to feel heard. You can also reach me by email.",
    email: "mia@assu.ca",
  },
  {
    name: "Michelle Wong",
    title: "Executive",
    image: "/images/about-executives-michelle.webp",
    bio: "Hi everyone! \n\n My name is Michelle, and I am a third-year Life Sciences student. I am excited and honoured to serve as one of your ASSU Executives this year! I look forward to building our Arts and Science community through ASSU events and initiatives and aim to create and share opportunities for students to gain academic and extracurricular experiences. In my free time, I enjoy listening to music and running! \n\n Remember that the ASSU is here for you! If you have suggestions or questions or would like to chat, feel free to drop by the office or email me. I'm looking forward to meeting you all!",
    email: "michelle@assu.ca",
  },
  {
    name: "Safia Zaman",
    title: "Executive",
    image: "/images/about-executives-safia.webp",
    bio: "Hi all! \n\n My name is Safia, and I am very grateful to serve as an executive on ASSU this year. My favourite part about working in ASSU is being able to translate student needs into policy changes, programs, events, and more. Please never hesitate to reach out to me with concerns, feedback, ideas, or just to chat! Every student I have spoken to during my past year on ASSU has shown me that I am surrounded by a beautiful community at UofT. \n\n I hope to increase accessibility and inclusivity in A&S by making mentoring services for graduate applicants freely available, discussing with admin, faculty, staff, and students how to reduce systemic discrimination in the classroom and on campus, and standardizing more academic practices.",
    email: "safia@assu.ca",
    instagram: "@safiazk_",
  },
];

export default function Executives() {
  return (
    <div className="min-h-screen bg-gray-lighter">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-16">
          <Divider className="mb-8" width="100%" maxWidth="100%" />

          <Text
            as="h1"
            className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-4"
          >
            Our Team
          </Text>

          <Divider className="mb-6" width="100%" maxWidth="100%" />

          <Text
            as="p"
            className="text-xl md:text-2xl text-[var(--color-text-secondary)] mb-4"
          >
            Get to know your 2024-25 ASSU Executive Team.
          </Text>

          <div className="w-full h-px bg-black opacity-25"></div>
        </div>

        {/* Executives Section */}
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-black opacity-25 transform -translate-x-1/2"></div>

          <div className="space-y-16 md:space-y-24">
            {executives.map((executive, index) => (
              <div key={executive.name} className="bg-gray-lighter">
                <div className="relative">
                  <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
                    {/* Image Section - Alternating sides */}
                    <div
                      className={`order-2 ${
                        index % 2 === 0 ? "md:order-1" : "md:order-2"
                      }`}
                    >
                      <div className="relative w-full rounded-lg overflow-hidden shadow-lg flex items-end">
                        <AssuImage
                          src={executive.image}
                          alt={`${executive.name} - ${executive.title}`}
                          sizes="100vw"
                          className="w-full h-auto"
                        />
                      </div>
                    </div>

                    {/* Content Section - Alternating sides */}
                    <div
                      className={`order-1 ${
                        index % 2 === 0 ? "md:order-2" : "md:order-1"
                      }`}
                    >
                      <div className="space-y-6 flex flex-col justify-end h-full">
                        <div>
                          <Text
                            as="h2"
                            className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-2"
                          >
                            {executive.name}
                          </Text>
                          <Text
                            as="h3"
                            className="text-xl md:text-2xl text-[var(--color-text-primary)]"
                          >
                            {executive.title}
                          </Text>
                        </div>

                        {/* Bio */}
                        <div>
                          <Text
                            as="p"
                            className="text-[var(--color-text-secondary)] leading-relaxed text-base md:text-lg whitespace-pre-line"
                          >
                            {executive.bio}
                          </Text>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4">
                          <Link href={`mailto:${executive.email}`}>
                            <span className="inline-flex items-center gap-2">
                              <span>📧</span>
                              <span>{executive.email}</span>
                            </span>
                          </Link>

                          {executive.linkedin && (
                            <Link href={`https://${executive.linkedin}`}>
                              <span className="inline-flex items-center gap-2">
                                <span>❤️</span>
                                <span>{executive.linkedin}</span>
                              </span>
                            </Link>
                          )}

                          {executive.instagram && (
                            <Link
                              href={`https://instagram.com/${executive.instagram.replace(
                                "@",
                                ""
                              )}`}
                            >
                              <span className="inline-flex items-center gap-2">
                                <span>❤️</span>
                                <span>{executive.instagram}</span>
                              </span>
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Horizontal line below each executive section  */}
                  {index < executives.length - 1 && (
                    <div className="flex justify-between mt-8 gap-8 md:gap-12">
                      <div className="w-[calc(50%-1rem)] md:w-[calc(50%-1.5rem)] h-px bg-black opacity-25"></div>
                      <div className="w-[calc(50%-1rem)] md:w-[calc(50%-1.5rem)] h-px bg-black opacity-25"></div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="max-w-6xl mx-auto px-4 -mt-8">
        <Divider width="100%" maxWidth="100%" />
      </div>
    </div>
  );
}
