import React from "react";

const Courses = () => {
  return (
    <div className="container mx-auto m-10">
      <h1 className="inline border-b-4 p-2 border-red-500 text-4xl font-bold font-sans">
        Available Courses
      </h1>

      <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
        <div className="flex-1">
          <div className="max-w-sm bg-white border border-gray-200 rounded-4xl bordertop  shadow-2xl ">
            <a href="#">
              <img
                className="rounded-t-lg w-40 align-middle text-center mx-auto"
                src="NDECC.png"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-center font-bold tracking-tight textcoursename ">
                NDECC  - Clinical Course
                </h5>
              </a>
              <p className="mb-3 font-normal text-black text-center">
              The NDECC  Clinical Exam is one of the two parts of the third exam in the equivalency process for ITDs.
              </p>
              
            </div>
          </div>
        </div>


        <div className="flex-1">
          <div className="max-w-sm bg-white border border-gray-200 rounded-4xl bordertop shadow-2xl ">
            <a href="#">
              <img
                className="rounded-t-lg w-40 align-middle text-center mx-auto"
                src="NDECC.png"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-center font-bold tracking-tight textcoursename">
                University Bench Prep
                </h5>
              </a>
              <p className="mb-3 font-normal text-black text-center">
              Courses tailored for college readiness, covering academics, admissions strategies, and career planning for future success.
              </p>
              
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="max-w-sm bg-white border border-gray-200 rounded-4xl bordertop shadow-2xl  ">
            <a href="#">
              <img
                className="rounded-t-lg w-40 align-middle text-center mx-auto"
                src="NDECC.png"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-center font-bold tracking-tight textcoursename">
                Clinical Skills Mock-Exam
                </h5>
              </a>
              <p className="mb-3 font-normal text-black text-center">
              Excel in Real-World Cases with the NDECC® Clinical Simulation Course
              </p>
              
            </div>
          </div>
        </div>
        
        
      </div>
    </div>
  );
};

export default Courses;
