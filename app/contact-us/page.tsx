"use client";

import { useState } from "react";
import Image from "next/image";
import Divider from "../../components/common/Divider";
import MapSection from "../../components/common/MapSection";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [openFAQs, setOpenFAQs] = useState<Set<number>>(new Set());

  const toggleFAQ = (index: number) => {
    setOpenFAQs(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const faqs = [
    {
      question: "Where do I go to get an official UofT Transcript?",
      answer: "Transcripts can be ordered online via Acorn or from the UofT transcript centre, located at Enrolment Services. 172 St. George St. Toronto ON M5R 0A3. For inquiries call: 416-978-2190",
    },
    {
      question: "Where can I find final exams?",
      answer: "All finals that are released by the Faculty are available on the Library website (will need to cut and paste into your browser): http://eres.library.utoronto.ca/courseindex.asp, which you can download for free. Answers are not available anywhere.",
    },
    {
      question: "Where can I find term tests?",
      answer: "ASSU has a library of student donated tests. Students can come in and photocopy them. Some of our Course Unions also carry tests – you can ask at our office. ASSU is always looking for students to donate their old tests to our library – we will make a photocopy of the test.",
    },
    {
      question: "Where is the Lost and Found for Sidney Smith?",
      answer: "There are a few places to check for lost items:\n\n1) the ASSU office - SS 1068\n\n2) the APUS office - SS 1089\n\n3) the Faculty Registrar's Office - SS 1006\n\n4) the Caretaking Office - SS 1090\n\n5) the Central Caretaking Lost & Found - 256 McCaul Street, 3rd Floor.",
    },
    {
      question: "How do I book the Sidney Smith Lobby?",
      answer: "The lobby is available for booking to recognized student groups only. This booking is done through the Faculty Registrar's Office – for more info check out this link: https://sidneysmithcommons.artsci.utoronto.ca/welcome/sidney-smith-lobby/",
    },
    {
      question: "How do I book group study rooms around campus?",
      answer: "Robarts Library, Gerstein Science Information Centre, and Other Libraries\n\nGo to the U of T Library study room booking system:\nhttps://uoft.libcal.com/reserve/groupstudy\n\nSelect the library and study room you want to book.\n\nChoose the date and time slot available.\n\nEnter your UTORid credentials to confirm the booking.\n\nFaculty-Specific Libraries (e.g., E.J. Pratt, Innis College Library)\n\nSome faculty libraries have their own booking system.\n\nCheck their library website or ask at the front desk.",
    },
    {
      question: "Where is there a microwave for students to use?",
      answer: "The APUS office has one and so does the cafeteria downstairs. Other locations include MS cafeteria, Robarts library cafeteria, and Gerstein library cafeteria.",
    },
  ];

  return (
    <div className="bg-gray-lighter min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Top thick horizontal line */}
        <Divider borderTopWidth="4px" />

        {/* FAQ Heading */}
        <h1 className="text-4xl font-sans text-gray-darker mb-4 text-left font-bold">
          Frequently asked questions
        </h1>

        {/* Thick horizontal line underneath heading */}
        <Divider borderTopWidth="4px" />

        {/* FAQ Section */}
        <div className="mb-8">
          {faqs.map((faq, index) => (
            <div key={index}>
              <div className="py-4">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left focus:outline-none focus:ring-2 focus:ring-pink focus:ring-offset-2 rounded-lg p-2 hover:bg-gray-100 transition-colors"
                  aria-expanded={openFAQs.has(index)}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h2 className="text-xl font-sans text-gray-darker pr-4">
                    {faq.question}
                  </h2>
                  <div className="flex-shrink-0">
                    <svg
                      className={`w-6 h-6 text-gray-darker transition-transform duration-200 ${
                        openFAQs.has(index) ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
                {openFAQs.has(index) && (
                  <div
                    id={`faq-answer-${index}`}
                    className="mt-4 pl-2 text-gray-dark font-body leading-relaxed whitespace-pre-line animate-in slide-in-from-top-2 duration-200"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
              {index < faqs.length - 1 && (
                <div className="w-full h-px bg-gray border-t-1"></div>
              )}
            </div>
          ))}
        </div>

        {/* Thick horizontal line */}
        <Divider borderTopWidth="4px" />

        {/* Contact Form Section - Table-like component */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="grid md:grid-cols-2 gap-0 min-h-[400px]">
            {/* Left side - Heart SVG and text */}
            <div className="bg-gray-lighter p-8 flex flex-col items-center justify-center text-center">
              <div className="mb-6">
                <Image
                  src="/svg/heart.svg"
                  alt=""
                  width={80}
                  height={80}
                  className="w-20 h-20 text-pink"
                />
              </div>
              <div className="text-gray-darker font-sans space-y-2">
                <p className="text-lg">Feel free to ask any questions.</p>
                <p className="text-lg">We will get back to you</p>
                <p className="text-lg">in 1-3 business days.</p>
              </div>
            </div>

            {/* Right side - Contact Form */}
            <div className="p-8">
              <h2 className="text-2xl font-sans text-gray-darker mb-6">Contact us</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Write a message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink focus:border-transparent resize-vertical"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-pink-light text-gray-darker font-sans rounded-md hover:bg-pink-lighter transition-colors duration-200"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Thick horizontal line */}
        <Divider borderTopWidth="4px" />

        {/* Contact Information Section - 4 columns */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-8">
            {/* Column 1 - Contact Us */}
            <div className="text-left flex flex-col justify-end h-full">
              <div className="mb-4 flex justify-start gap-3">
                <svg width="40" height="40" viewBox="0 0 40 40" className="text-pink">
                  <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="3" />
                </svg>
                <svg width="40" height="40" viewBox="0 0 40 40" className="text-pink">
                  <circle cx="20" cy="20" r="20" fill="currentColor" />
                </svg>
                <svg width="40" height="40" viewBox="0 0 40 40" className="text-pink">
                  <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="3" />
                </svg>
              </div>
              <h3 className="text-3xl font-sans text-gray-darker font-semibold">Contact Us</h3>
            </div>

            {/* Column 2 - Address */}
            <div className="text-left relative">
              <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-gray-light -ml-20"></div>
              <div className="md:-ml-16">
                <h3 className="text-base font-sans text-gray-darker font-semibold mb-3 text-left">Address</h3>
                <div className="text-gray-dark font-body text-left text-sm">
                  <p className="text-left">100 St. George Street</p>
                  <p className="text-left">Sidney Smith Hall</p>
                  <p className="text-left">Room 1068</p>
                </div>
              </div>
            </div>

            {/* Column 3 - Contact Details */}
            <div className="text-left relative">
              <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-gray-light -ml-20"></div>
              <div className="md:-ml-16">
                <h3 className="text-base font-sans text-gray-darker font-semibold mb-3 text-left">Contact</h3>
                <div className="text-gray-dark font-body space-y-1 text-left text-sm">
                  <p className="text-left">Phone: (416) 978-4903</p>
                  <p className="text-left">Fax: (416) 971-2161</p>
                  <p className="mt-2 text-left">students.assu@utoronto.ca</p>
                  <div className="flex gap-3 mt-4 justify-start">
                    <a
                      href="https://www.linkedin.com/company/uoft-assu/about/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <Image
                        src="/svg/linkedin.svg"
                        alt="LinkedIn"
                        width={24}
                        height={24}
                        className="w-6 h-6 hover:opacity-75 transition-opacity brightness-0"
                      />
                    </a>
                    <a
                      href="https://www.instagram.com/assu_uoft/?hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                    >
                      <Image
                        src="/svg/instagram.svg"
                        alt="Instagram"
                        width={24}
                        height={24}
                        className="w-6 h-6 hover:opacity-75 transition-opacity brightness-0"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 4 - Opening Hours */}
            <div className="text-left relative">
              <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-gray-light -ml-20"></div>
              <div className="md:-ml-16">
                <h3 className="text-base font-sans text-gray-darker font-semibold mb-3 text-left">Opening Hours</h3>
                <div className="text-gray-dark font-body space-y-1 text-left text-sm">
                  <p className="text-left">Monday   10:00 am – 5:00 pm</p>
                  <p className="text-left">Tuesday   10:00 am – 5:00 pm</p>
                  <p className="text-left">Wednesday   10:00 am – 6:00 pm</p>
                  <p className="text-left">Thursday   10:00 am – 6:00 pm</p>
                  <p className="text-left">Friday   10:00 am – 5:00 pm (Friday closed from May-Aug)</p>
                  <p className="font-bold text-left">Weekends   Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final thick horizontal line */}
        <Divider borderTopWidth="4px" />

        {/* Map Section */}
        <MapSection
          title=""
          description=""
          mapConfig={{
            lat: 43.6629,
            lng: -79.3957,
            zoom: 15,
            height: "400px",
            markerTitle: "ASSU - Sidney Smith Hall",
            ariaLabel: "Map showing ASSU location at Sidney Smith Hall",
          }}
        />

        {/* Thick horizontal line under map */}
        <Divider borderTopWidth="4px" />
      </div>
    </div>
  );
}