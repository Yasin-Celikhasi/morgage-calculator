import React from "react";
import SliderComponent from "./common/SliderComponent";

const SliderSelect = () => {
  return (
    <>
      <SliderComponent
        label={"Home Value"}
        defaultValue={50}
        min={0}
        max={200}
        marks
        step={10}
        onChange={
          (e) => console.log(e.target.value)
          // Or as better Code -> onChange={(e, value) => consol.log(value)}
        }
        unit={"$"}
        amount={3000}
      />
      <SliderComponent
        label={"Down Payment"}
        defaultValue={50}
        min={0}
        max={200}
        marks
        step={10}
        onChange={
          (e) => console.log(e.target.value)
          // Or as better Code -> onChange={(e, value) => consol.log(value)}
        }
        unit={"$"}
        amount={500}
      />
      <SliderComponent
        label={"Loan Amount"}
        defaultValue={50}
        min={0}
        max={200}
        marks
        step={10}
        onChange={
          (e) => console.log(e.target.value)
          // Or as better Code -> onChange={(e, value) => consol.log(value)}
        }
        unit={"$"}
        amount={700}
      />
    </>
  );
};

export default SliderSelect;
