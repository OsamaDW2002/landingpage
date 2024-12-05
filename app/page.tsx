"use client";
import React from "react";
import "@/styles/globals.css";
import "../styles/swiper_home.css";
import CourseSection from "@/Components/CourseSection/CourseSection";
import ReviewSection from "@/Components/ReviewSection/ReviewSection";
import ResourcesSection from "@/Components/ResourceSection/ResourcesSection";
import QuizzSection from "@/Components/QuizzSection/QuizzSection";
import { Contact } from "@/Components/Contact/Contact";
import Intro from "@/Components/IntroSection/Intro";
import VideoBackground from "@/Components/VideoBackground";
import { useBreakpointValue } from "@chakra-ui/react";
import Header from "@/Components/Header/Header";
import Landing from "@/Components/Landing/Landing";
import DiscountBanner from "@/Components/DiscountBanner/DiscountBanner";
import { Footer } from "@/Components/footerSection/Footer";
import Brief from "@/Components/Brief/Brief";
export default function Home() {
  const videoSrc =
    useBreakpointValue({
      base: "/videos/aca-video-mobile.mp4",
      "2xl": "/videos/aca-video-desktop.mp4",
    }) ?? "/videos/aca-video-mobile.mp4";
  return (
    <>
      <DiscountBanner
        startDate=""
        endDate=""
        announcementText="احصل على خصم"
      ></DiscountBanner>
      <Header />
      <Landing />
      <ResourcesSection />
      <VideoBackground videoSrc={videoSrc}>
        <Intro />
      </VideoBackground>
      <CourseSection />
      <QuizzSection />
      <Brief />
      <Contact />
      <ReviewSection />
      <Footer />
    </>
  );
}
