import Navbar from "./components/Navbar";
import SliderSelect from "./components/SliderSelect";
import TenureSelect from "./components/TenureSelect";
import Result from "./components/Result";
import { Container, Grid } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Grid container spacing={10}>
          <Grid item xs={12} md={8}>
            <SliderSelect></SliderSelect>
            <TenureSelect></TenureSelect>
          </Grid>
          <Grid item xs={12} md={4}>
            <Result />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
