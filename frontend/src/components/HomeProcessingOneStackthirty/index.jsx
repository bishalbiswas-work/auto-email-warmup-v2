import React from "react";

import { Img, Text } from "components";

const HomeProcessingOneStackthirty = (props) => {
  return (
    <>
      <div className={props.className}>
        <div
          className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[89px] inset-x-[0] items-center justify-start mx-auto p-[7px] w-[88%]"
          style={{ backgroundImage: "url('images/img_group2.png')" }}
        >
          <div className="flex flex-col gap-3 items-center justify-start mb-11 w-full">
            <div className="flex flex-row items-center justify-between w-3/4 md:w-full">
              <Text
                className="h-[9px] text-[6.7px] text-black-900_87 text-center"
                size="txtInterBold67"
              >
                {props?.thirty}
              </Text>
              <Text
                className="text-[6.7px] text-black-900_87 text-center"
                size="txtInterBold67"
              >
                {props?.seventy}
              </Text>
            </div>
            <div className="flex flex-row items-center justify-between w-full">
              <Text
                className="h-[9px] text-[6.7px] text-black-900_87 text-center"
                size="txtInterBold67"
              >
                {props?.twenty}
              </Text>
              <Text
                className="h-[9px] text-[6.7px] text-black-900_87 text-center"
                size="txtInterBold67"
              >
                {props?.eighty}
              </Text>
            </div>
          </div>
        </div>
        <Text
          className="absolute bottom-[0] h-[9px] left-[0] text-[6.7px] text-black-900_87 text-center"
          size="txtInterBold67"
        >
          {props?.textzero}
        </Text>
        <Text
          className="absolute bottom-[0] right-[0] text-[6.7px] text-black-900_87 text-center"
          size="txtInterBold67"
        >
          {props?.textonehundred}
        </Text>
        <Text
          className="absolute bottom-[27%] left-[2%] text-[6.7px] text-black-900_87 text-center"
          size="txtInterBold67"
        >
          {props?.textten}
        </Text>
        <Text
          className="absolute bottom-[26%] h-[9px] right-[3%] text-[7px] text-black-900_87 text-center"
          size="txtInterBold7Black90087"
        >
          {props?.textninety}
        </Text>
        <Text
          className="absolute h-[9px] left-[33%] text-[6.7px] text-black-900_87 text-center top-[3%]"
          size="txtInterBold67"
        >
          {props?.textforty}
        </Text>
        <Text
          className="absolute h-[9px] right-[33%] text-[6.7px] text-black-900_87 text-center top-[3%]"
          size="txtInterBold67"
        >
          {props?.textsixty}
        </Text>
        <Text
          className="absolute h-[9px] inset-x-[0] mx-auto text-[6.7px] text-black-900_87 text-center top-[0] w-max"
          size="txtInterBold67"
        >
          {props?.textfifty}
        </Text>
        <Img
          className="absolute bottom-[0] h-[33px] left-[29%] object-cover"
          src="images/img_vector_33x41.png"
          alt="vector"
        />
      </div>
    </>
  );
};

HomeProcessingOneStackthirty.defaultProps = {
  thirty: "30",
  seventy: "70",
  twenty: "20",
  eighty: "80",
  textzero: "00",
  textonehundred: "100",
  textten: "10",
  textninety: "90",
  textforty: "40",
  textsixty: "60",
  textfifty: "50",
};

export default HomeProcessingOneStackthirty;
