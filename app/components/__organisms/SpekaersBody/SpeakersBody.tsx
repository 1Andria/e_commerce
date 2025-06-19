import React from "react";
import SpeakerHead from "../../__molecules/SpeakerHead/SpeakerHead";
import AllNavigator from "../../__molecules/AllNavigator/AllNavigator";
import CommercialCompany from "../../__molecules/CommercialCompany/CommercialCompany";
import SpeakersForSaleSection from "../../__molecules/SpeakersForSaleSection/SpeakersForSaleSection";

function SpeakersBody() {
  return (
    <>
      <SpeakerHead category="SPEAKERS" />
      <SpeakersForSaleSection category="speakers" />
      <AllNavigator />
      <CommercialCompany />
    </>
  );
}

export default SpeakersBody;
