import React from "react";
import HomeBanner from "../../__molecules/HomeBanner/HomeBanner";
import HomeSpeakerBanner from "../../__molecules/HomeSpeakerBanner/HomeSpeakerBanner";
import TableSpeaker from "../../__molecules/TableSpeaker/TableSpeaker";
import EarphoneHomeBanner from "../../__molecules/EarphoneHomeBanner/EarphoneHomeBanner";
import CommercialCompany from "../../__molecules/CommercialCompany/CommercialCompany";
import AllNavigator from "../../__molecules/AllNavigator/AllNavigator";

function HomeBody() {
  return (
    <>
      <HomeBanner />
      <AllNavigator />
      <HomeSpeakerBanner />
      <TableSpeaker />
      <EarphoneHomeBanner />
      <CommercialCompany />
    </>
  );
}

export default HomeBody;
