import React from "react";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import Slider from "../components/Slider";
import Courses from "../components/Courses";
import AboutDDU from "../components/AboutDDU";
import Reviews from "../components/Reviews";
import Gallery from "../components/Gallery";
import { Footer } from "../components/Footer";

function financeaid() {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="container mx-auto m-10">
        <h1 className="inline border-b-4 p-2 border-red-500 text-4xl font-bold font-sans">
          Team Dental Dreams Unlocked
        </h1>
        <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
          <div className="flex-1">
            <img
              className="h-auto max-w-full rounded-lg"
              src="images/Simranjot.jpeg"
              alt=""
            />
          </div>
          <div className="flex-3">
            <h1 className="teammembername">
              Dr. Simranjot Kaur Battu
              <br />
              <span className="teammemberdesignation">
                NDECC Instructor (Lead Instructor)
              </span>
            </h1>
            <p className="teamtext">
              Dr. Simran completed her Bachelor of Dental Surgery (BDS) in India
              in 2015. In 2024, she achieved her Canadian dental equivalency and
              is now a licensed dentist in Canada. Currently, she practices at
              Maple Dental Clinic and also serves as an instructor at Dental
              Dreams Unlocked where she shares her expertise and passion for
              dentistry with aspiring professionals.
            </p>
          </div>
        </div>
        <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
          <div className="flex-3">
            <h1 className="teammembername">
              Dr. Parul Yadav
              <br />
              <span className="teammemberdesignation">
                University Bench Prep Instructor (Lead Instructor)
              </span>
            </h1>
            <p className="teamtext">
              Dr. Parul Yadav is a University of Alberta DDS 2025 graduate, who
              brings global experience and a passion for education to her role
              as Lead University Bench Prep Instructor at DDU. Internationally
              trained dentist from India, she practiced briefly in Abu Dhabi
              before moving to Canada in 2019. After successfully completing the
              AFK and ACJ exams, she applied to dental schools due to her
              passion for lifelong learning and a desire to align her clinical
              skills with Canadian standards. She was accepted into both
              Schulich’s IDP and the University of Alberta’s Advanced Placement
              Program, ultimately choosing to complete her DDS at the University
              of Alberta. During dental school, Dr. Parul actively participated
              in rural outreach programs and volunteered with student-led
              initiatives. She also began mentoring internationally trained
              dentists, helping them prepare for Canadian bench exams with a
              focus on university-level standards and clinical precision. Her
              students’ success led her to take on a full-time instructional
              role at DDU. Dr. Parul also practices as a full-time associate
              dentist at a leading dental clinic in Edmonton. Outside of
              dentistry, she enjoys pottery, trying new brunch spots, and
              spending time with her husband, 7-year-old son and energetic
              puppy.
            </p>
          </div>
          <div className="flex-1">
            <img
              className="h-auto max-w-full rounded-lg"
              src="images/drparul.jpeg"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
          <div className="flex-1">
            <img
              className="h-auto max-w-full rounded-lg"
              src="images/drpratusha.jpg"
              alt=""
            />
          </div>
          <div className="flex-3">
            <h1 className="teammembername">
              Dr. Pratyusha Desai
              <br />
              <span className="teammemberdesignation">NDECC Instructor</span>
            </h1>
            <p className="teamtext">
              Dr. Pratyusha Desai earned her Bachelor of Dental Surgery (BDS) in
              India in 2017 and is now a licensed dentist practicing in Canada.
              In addition to her clinical practice, Dr. Desai serves as an
              instructor at Dental Dreams Unlocked, where she mentors
              internationally trained dentists. Drawing from her own NDEB
              certification journey, she offers practical guidance and firsthand
              insights to help students confidently navigate their exams. She is
              passionate about empowering future dental professionals and
              creating a supportive learning environment rooted in experience
              and encouragement.
            </p>
          </div>
        </div>
        <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
          <div className="flex-3">
            <h1 className="teammembername">
              Dr. Sukhvir Kaur
              <br />
              <span className="teammemberdesignation">NDECC Instructor</span>
            </h1>
            <p className="teamtext">
              I’m Dr. Sukhvir Kaur, an internationally trained dentist with a
              BDS degree from Baba Farid University, Punjab (2017). Since moving
              to Canada, I’ve been dedicated to continuing my dental journey
              through the NDEB equivalency process. In 2022, I began this
              rigorous path and recently cleared the NDECC exam on my first
              attempt. Having firsthand experience with the challenges
              international dentists face, I’m now passionate about guiding and
              mentoring others through the NDEB process. Outside of dentistry, I
              enjoy singing and going on long drives to unwind and recharge.
            </p>
          </div>
          <div className="flex-1">
            <img
              className="h-auto max-w-full rounded-lg"
              src="images/drshukbir.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
          <div className="flex-1">
            <img
              className="h-auto max-w-full rounded-lg"
              src="\images\anurag.jpg"
              alt=""
            />
          </div>
          <div className="flex-3">
            <h1 className="teammembername">
              Anurag
              <br />
              <span className="teammemberdesignation">
                Office Administrator
              </span>
            </h1>
            <p className="teamtext">
              Anurag is our dedicated Office Administrator, bringing over 10
              years of experience in commercial sales within the contract
              furniture industry in the Gulf region. With a strong skill set in
              administrative tasks, he specializes in handling admissions and
              day-to-day operations with efficiency and precision. A firm
              believer in the value of giving back, Anurag is driven by a desire
              to help others, particularly in navigating processes that can
              often be complex. He is a certified Dental Office Administrator in
              Canada and holds an MBA degree. Outside of work, he is a proud
              husband to UofA graduate dentist. His experiences have given him a
              deep appreciation for the challenges and rewards that come with
              various professional journeys. Anurag's commitment to service,
              paired with his extensive industry experience, makes him a
              valuable asset to our team
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default financeaid;
