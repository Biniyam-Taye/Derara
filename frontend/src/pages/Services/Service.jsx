import React from "react";
import MainServices from "../../components/service/MainServices";
import ServiceDetailSection from "../../components/service/ServiceDetailSection";
import RoastingServiceDetailSection from "../../components/service/RoastingService";
import LogisticsServiceDetailSection from "../../components/service/LogisticsService";
import PartnershipServiceDetailSection from "../../components/service/PartnershipService";

const Service = () => {
  return (
    <div>
      <MainServices />
      <ServiceDetailSection />
      <RoastingServiceDetailSection />
      <LogisticsServiceDetailSection />
      <PartnershipServiceDetailSection />
    </div>
  );
};

export default Service;
