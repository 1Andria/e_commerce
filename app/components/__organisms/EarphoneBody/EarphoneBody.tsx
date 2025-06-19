import React from "react";
import SpeakerHead from "../../__molecules/SpeakerHead/SpeakerHead";
import SpeakersForSaleSection from "../../__molecules/SpeakersForSaleSection/SpeakersForSaleSection";
import AllNavigator from "../../__molecules/AllNavigator/AllNavigator";
import CommercialCompany from "../../__molecules/CommercialCompany/CommercialCompany";

function EarphoneBody() {
  return (
    <>
      <SpeakerHead category="EARPHONES" />
      <SpeakersForSaleSection category="earphones" />
      <AllNavigator />
      <CommercialCompany />
    </>
  );
}

export default EarphoneBody;
