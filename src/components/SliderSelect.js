import React from "react";
import SliderComponent from "./common/SliderComponent";

const SliderSelect = ({ data, setData }) => {
  console.log(data);

  const bank_limit = 10000;
  return (
    <>
      <SliderComponent
        label={"Home Value"}
        defaultValue={data.homeValue}
        value={data.homeValue}
        min={1000}
        max={bank_limit}
        marks
        step={100}
        onChange={
          // (e) => console.log(e.target.value)
          // Or as better Code ->
          (e, value) =>
            setData({
              ...data,
              downPayment: value * 0.2,
              loanAmount: value * 0.8,
              homeValue: value,
            })
        }
        unit={"$"}
        amount={data.homeValue}
      />
      <SliderComponent
        label={"Down Payment"}
        defaultValue={data.downPayment}
        value={data.downPayment}
        min={0}
        max={data.homeValue}
        marks
        step={100}
        onChange={
          // (e) => console.log(e.target.value)
          // Or as better Code -> onChange={(e, value) => consol.log(value)}
          (e, value) =>
            setData({
              ...data,
              loanAmount: data.homeValue - value,
              downPayment: value,
            })
        }
        unit={"$"}
        amount={data.downPayment}
      />
      <SliderComponent
        label={"Loan Amount"}
        defaultValue={data.loanAmount}
        value={data.loanAmount}
        min={0}
        max={data.homeValue}
        marks
        step={100}
        onChange={(e, value) =>
          setData({
            ...data,
            downPayment: data.homeValue - value,
            loanAmount: value,
          })
        }
        unit={"$"}
        amount={data.loanAmount}
      />
      <SliderComponent
        label={"Interest Rate"}
        defaultValue={data.interestRate}
        value={data.interestRate}
        min={2}
        max={18}
        marks
        step={0.5}
        onChange={(e, value) => setData({ ...data, interestRate: value })}
        unit={"%"}
        amount={data.interestRate}
      />
    </>
  );
};

export default SliderSelect;
