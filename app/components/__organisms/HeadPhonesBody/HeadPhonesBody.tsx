import React from "react";
import AllNavigator from "../../__molecules/AllNavigator/AllNavigator";
import CommercialCompany from "../../__molecules/CommercialCompany/CommercialCompany";
import SpeakerHead from "../../__molecules/SpeakerHead/SpeakerHead";
import SpeakersForSaleSection from "../../__molecules/SpeakersForSaleSection/SpeakersForSaleSection";

function HeadPhonesBody() {
  return (
    <>
      <SpeakerHead category="HEADPHONES" />
      <SpeakersForSaleSection category="headphones" />
      <AllNavigator />
      <CommercialCompany />
    </>
  );
}

export default HeadPhonesBody;
