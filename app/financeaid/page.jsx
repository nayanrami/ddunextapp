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
          Financial Assistance
        </h1>

        <br />
        <br />
        <br />
        <ol className="text-justify line-height:2">
          <li className="text-justify line-height:2">
            <i class="fa-solid fa-tooth"></i>{" "}
            <span className="aboutuslbl">Windmill Microlending</span> Windmill
            Microlending is a non-profit serving newcomers to Canada since 2005.
            Windmill offers low-interest, affordable career loans of up to
            $15,000 to help skilled immigrants and refugees pay for the costs of
            education and training programs, credentials, licensing and more to
            reach their career goals. Windmill supports newcomers who arrive
            with education, skills and experience but face significant barriers
            to employment. For many immigrants, what prevents them from entering
            the labour market is a lack of financial support.
          </li>
          <li className="text-justify">
            <i class="fa-solid fa-tooth"></i>{" "}
            <span className="aboutuslbl">WHAT CAN A LOAN BE USED FOR?</span>{" "}
            Education and training programs (two years or less), including
            courses Licensing and qualifying exams fees Living allowance during
            study time Travel expenses to take courses or exams not available in
            your area Credential assessment (CES, WES, ICAS, IQAS or MIFI)
            Professional association fees Books, course materials and work
            equipment English or French language training Relocation costs for
            employment Other costs related to your career may be considered
          </li>
          <li className="text-justify">
            <i class="fa-solid fa-tooth"></i>{" "}
            <span className="aboutuslbl">WHO IS ELIGIBLE?</span> Immigrants and
            internationally-educated individuals living in Canada Permanent
            residents, Canadian citizens, protected persons, convention refugees
            and provincial nominees Newcomers who intend to work in the same
            field they trained in outside of Canada or to apply their
            transferable skills to a new career Immigrants who don't have an
            undischarged bankruptcy or a consumer proposal For more information,
            To apply click on below link:
          </li>
        </ol>
        <br />
        <br />
        <br />

        <a
          href="https://windmillmicrolending.org/apply-now/"
          class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Click Here : https://referral.windmillmicrolending.org/l/DDUEDAB/
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default financeaid;
