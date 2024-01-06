import React from 'react'
import { checkSvg } from './images/assets';

const About = () => {
  return (
    <div >
      <div
        className="p-3"
        style={{
          borderRadius: "10px",
          border: "3px solid #33322E",
          // boxShadow: ".5rem .5rem 0  #33322E",
          background: "#FFF0EE",
        }}
      >
        <h1 style={{ fontWeight: "600" }}>Welcome to Stories! 😇</h1>
        <p>
          At Stories, we believe in the power of storytelling, and we've
          designed our notebook application to be the perfect canvas for your
          ideas, musings, and creative expressions. Whether you're an avid
          writer, a dreamer, or someone simply looking to organize your
          thoughts, Stories is here to accompany you on your journey.
        </p>
      </div>
      <div className="row row-cols-1 row-cols-md-2 mt-1 g-3 ">
        <div className="col d-flex justify-content-center align-items-center">
          <div
            style={{
              borderRadius: "10px",
              border: "3px solid #33322E",
              // boxShadow: ".5rem .5rem 0  #33322E",
              background: "#D0F4F0",
            }}
          >
            <h3 className="text-center pt-2 pb-1" style={{ fontWeight: "600" }}>
             {checkSvg} Our Mission
            </h3>
            <p className="p-3" style={{ borderTop: "3px solid #33322E" }}>
              Our mission is to empower individuals to capture and share their
              stories effortlessly. We understand that every idea, every
              thought, and every fleeting moment is a unique story waiting to be
              told. With Stories, we provide you with a versatile platform to
              bring your narratives to life, no matter how big or small.
            </p>
          </div>
        </div>
        <div className="col d-flex justify-content-center align-items-center">
          <div
            style={{
              borderRadius: "10px",
              border: "3px solid #33322E",
              // boxShadow: ".5rem .5rem 0  #33322E",
              background: "#faeed2",
            }}
          >
            <h3 className="text-center pt-2 pb-1" style={{ fontWeight: "600" }}>
              {checkSvg} Our Inspiration
            </h3>
            <p className="p-3" style={{ borderTop: "3px solid #33322E" }}>
              The inspiration behind Stories stems from the belief that everyone
              has a story to tell. We aim to provide a platform that not only
              captures your words but also becomes a part of your creative
              journey. Just as every book has its own unique story, so too
              should every notebook. It's not just about the words; it's about
              the experience.
            </p>
          </div>
        </div>
      </div>
      <div
        className="p-3 mt-3"
        style={{
          borderRadius: "10px",
          border: "3px solid #33322E",
          // boxShadow: ".5rem .5rem 0  #33322E",
          background: "#fadfdc",
        }}
      >
        <h3 style={{ fontWeight: "600" }}>Features that Inspire</h3>
          <ul>
            <li>
              <b>Seamless Organization:</b> Stories offers a user-friendly
              interface that allows you to organize your notes, ideas, and
              inspirations effortlessly. Say goodbye to cluttered notebooks and
              hello to a well-organized collection of your stories.
            </li>
            <li>
              <b>Creative Freedom:</b> Unleash your creativity with our wide
              range of customization options. From different fonts and colors to
              customizable templates, Stories lets you personalize your notebook
              to reflect your unique style.
            </li>
            <li>
              <b>Sync Across Devices:</b> Your stories are not confined to a
              single device. With Stories, you can seamlessly sync your work
              across multiple devices, ensuring that your ideas are always at
              your fingertips, no matter where you are.
            </li>
          </ul>
      </div>
    </div>
  );
}

export default About
