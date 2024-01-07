import Navbar from "./components/Navbar";
import SliderSelect from "./components/SliderSelect";
import TenureSelect from "./components/TenureSelect";
import Result from "./components/Result";
import { Container, Grid } from "@mui/material";
import { useState } from "react";

function App() {
  // useState Example
  // name, function (constant, function that change the constant)
  // const [counter, setCounter] = useState(0);
  // console.log(counter);

  // For Our App , we can do use useState like this but this is a hussle for us.
  // const [homeValue, setHomeValue] = useState(3000);
  // const [downPayment, setDownPayment] = useState(3000);
  // const [loanAmount, setloanAmount] = useState(3000);
  // const [loanTerm, setloanTerm] = useState(3000);

  // Instead of above coding we can use one useState constand for all Sliders with an oject!
  const [data, setData] = useState({
    homeValue: 3000,
    downPayment: 3000 * 0.2,
    loanAmount: 3000 * 0.8,
    loanTerm: 5,
    interestRate: 5,
  });
  return (
    <div className="App">
      {/* <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Click
      </button> */}
      <Navbar />
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Grid container spacing={10} alignItems={"center"}>
          <Grid item xs={12} md={6}>
            <SliderSelect data={data} setData={setData}></SliderSelect>
            <TenureSelect data={data} setData={setData}></TenureSelect>
          </Grid>
          <Grid item xs={12} md={6}>
            <Result data={data} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
