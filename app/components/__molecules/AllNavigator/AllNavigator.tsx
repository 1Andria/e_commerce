import React from "react";
import NavigateToProducts from "../../__atoms/NavigateToProducts/NavigateToProducts";
import Headphone from "../../../common/images/headphone.png";
import Speakder from "../../../common/images/speaker.png";
import Earphone from "../../../common/images/earphone.png";
function AllNavigator() {
  return (
    <>
      <div className="max-w-[1110px] w-full mx-auto mt-[127px]  mb-[160px] flex justify-between gap-[10px]  px-[20px] max-[665px]:flex-col max-[665px]:items-center max-[665px]:gap-[100px]">
        <NavigateToProducts ImageSrc={Headphone} category="HEADPHONES" />
        <NavigateToProducts ImageSrc={Speakder} category="SPEAKERS" />
        <NavigateToProducts ImageSrc={Earphone} category="EARPHONES" />
      </div>
    </>
  );
}

export default AllNavigator;
