import React, { useEffect } from "react";
import CompactServicesPage from "../../components/service/CompactServicesPage";

const Service = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  

  return (
    <div>
      <CompactServicesPage />
    </div>
  );
};

export default Service;
