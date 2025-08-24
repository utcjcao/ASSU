import React from "react";
import HeroText from "../../../components/sections/HeroText";
import BlogList from "@/components/common/BlogList";

const eventPosts = [
  {
    image: "/images/involved-upcoming-1.webp",
    date: "March 4, 2025",
    title: "Test Raffle Contest",
    description: `Our famous test library exists solely because students donate their term tests. Help us update our test library by donating yours - your name will be entered in a draw to win one of two pairs of AirPod 3s that we are raffling away!

    You can donate in-person in our office in Sid Smith or by email: students.assu@utoronto.ca.

    Deadline to submit is April 9th.`,
  },
  {
    image: "/images/involved-upcoming-2.webp",
    date: "Feb 27, 2025",
    title: "Join Our Team",
    description: `ASSU Election Nominations are now open! Are you looking to get more involved in your education? Getting involved with the ASSU Executive is a great way to make your mark on academic life here in at the University of Toronto.

    We are accepting nominations for candidates to fill the roles of President (1) and Executive (4). Candidates will be elected during our March 21st ASSU Council Meeting. All full-time students in the Faculty of Arts and Science at the St. George Campus are eligible to run for our elections.

    For more information or questions please email: students.assu@utoronto.ca

    Nomination forms are due by Thursday March 13th at 5pm`,
  },
  {
    image: "/images/involved-upcoming-3.webp",
    date: "Feb 25, 2025",
    title: "2025 URC Schedule",
    description: `URC is happening THIS FRIDAY! 🎉✨ Join us for a day celebrating incredible undergraduate research across the Faculty of Arts & Sciences—Sciences, Social Sciences, and Humanities! Don’t miss out on exciting guest speakers and groundbreaking student projects! 💡🙌`,
  },
  {
    image: "/images/involved-upcoming-4.webp",
    date: "Feb 13, 2025",
    title: "ASSU Open Mic Night",
    description: `It’s soon that time of year for ASSU Open Mic Night!!🕺🏽🎤🎭🎸
    March 25th 6-9pm at the Cats Eye in Victoria College
    Register to perform and RSVP to attend with the links in our bio!!!!
    FREE ticket, FREE food&drink, LIVE talent
    We hope to see you all there!!!!

    If you have any questions please dm us or reach out to the emails listed on the signup forms :))`,
  },
  {
    image: "/images/involved-upcoming-5.webp",
    date: "Feb 13, 2025",
    title: "Reading Week Office Closure",
    description: `The ASSU Office in Sid Smith will be closed next week for reading week! We will be back open for in-person service on Feb 24th at 10am. In the meantime you can always reach us by DM or email: students.assu@utoronto.ca

    Have a great reading week and we'll see you back on campus soon!`,
  },
  {
    image: "/images/involved-upcoming-6.webp",
    date: "Feb 4, 2025",
    title: "ASSU Student Initiative Award",
    description: `📢 New Award Alert 📢

    Are you involved in a NEW club or initiative on campus? ASSU is looking to award trailblazers on campus who have started something new.

    This new Student Initiative Award will be conferred to those who have established a new organization, during the 23/24 or 24/25 academic year, at the University of Toronto St. George campus and/or within the wider community. The organization must be centred
    around a topic/subject which has previously received little attention on our campus from other organizations, or the organization may be focused on a pre-existing topic/subject but conducts events and initiatives on a significant and unprecedented scale.`,
  },
  {
    image: "/images/involved-upcoming-7.webp",
    date: "Jan 17, 2025",
    title: "ASSU Leadership Awards",
    description: `If you are a student who has made a difference on campus or in your community make sure you apply for our ASSU Leadership awards! These awards recognize the exceptional students from across our Faculty who make this place what it is

    The deadline is January 24th and all the information about about how to apply and the different awards available can be found at assu.ca.`,
  },
  {
    image: "/images/involved-upcoming-8.webp",
    date: "Jan 17, 2025",
    title: "2025 URC on Friday, Feb 28",
    description: `Mark your calendars! 🗓️

    Undergraduate Research Conference
    February 28, 2025
    Sidney Smith Hall

    Stay tuned for the schedule and selected speakers!!!`,
  },
  {
    image: "/images/involved-upcoming-9.webp",
    date: "Jan 16, 2025",
    title: "Past-test Library Grand Prize Winner",
    description: `🎉 Congratulations to the winner of our Fall semester past-test library grand prize raffle winner, Rei!

    Rei was one of the dozens of students who donated their tests last semester to keep our library up to date. For more than 20 years, Arts and Science students have been using our past-test library as a way to help them study and prepare for tests.

    You can do your part by donating your tests today and getting entered into our prize raffle! Come by our office in Sid Smith, room 1068 to learn more`,
  },
  {
    image: "/images/involved-upcoming-10.webp",
    date: "Jan 13, 2025",
    title: "URC: Abstract Submissions are EXTENDED",
    description: `🎓✨ Hey Arts Sci! Did you know every year ASSU hosts the Undergraduate Research Conference (URC) to showcase the amazing research of students across Arts and Science? 💡📚
Interested in presenting at URC? Submit an abstract! 📝 The deadline for abstract submissions has been extended to January 24th, 2025!`,
  },
];

const Upcoming = () => {
  return (
    <>
      <HeroText text="Upcoming Events" />
      <HeroText text="Past Events" />
      <BlogList posts={eventPosts} />
    </>
  );
};

export default Upcoming;
