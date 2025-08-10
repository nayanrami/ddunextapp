import React from "react";

export const Footer = () => {
  return (
    <div className="footer">
      <p className="p-10 text-white font-bold">
        Disclaimer: D.D.U (Dental Dreams Unlocked) is not affiliated,
        associated, endorsed, or authorized in any way by the National Dental
        Examination Board of Canada (NDEB). The test names and other trademarks
        such as 'NDEB', 'BNED', logos, or designs of the NDEB are the exclusive
        property of the NDEB and are not trademarks of D.D.U.
      </p>
      <div className="flex flex-row align-middle p-5 text-center text-white">
        <div className="flex-1 mx-4">
          11062 156 St NW #210, Edmonton, AB T5P 4M8, Canada
        </div>
        <div className="flex-1 mx-4">Call :+1 780-728-3838</div>
        <div className="flex-1 mx-4"><i className="fa-solid fa-envelope"></i>info@dentaldreamsunlocked.ca</div>
      </div>

      <div className="flex flex-row align-middle p-5 text-center text-white">
        <div className="flex-1 mx-4">
        Privacy Policy | Terms
        </div>
        <div className="flex-1 mx-4">© 2024 D.D.U All Rights Reserved</div>
        <div className="flex-1 mx-4"></div>
      </div>
    </div>
  );
};
