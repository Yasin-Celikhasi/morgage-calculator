import React from "react";
import Slider from "@mui/material/Slider";
import { Stack, Typography } from "@mui/material";

// Props Destructuring
const SliderComponent = ({
  defaultValue,
  min,
  max,
  step,
  onChange,
  value,
  label,
  unit,
  amount,
}) => {
  return (
    <Stack my={5}>
      <Stack spacing={1}>
        <Typography>{label}</Typography>
        <Typography variant="h4">
          {unit} {amount}
        </Typography>
      </Stack>
      <Slider
        defaultValue={defaultValue}
        min={min}
        max={max}
        aria-label="default"
        valueLabelDisplay="auto"
        marks
        step={step}
        onChange={onChange}
        value={value}
      />
      <Stack direction={"row"} justifyContent={"space-between"} mt={-1}>
        <Typography variant="caption" color="text.secondary">
          {unit} {min}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {unit} {max}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default SliderComponent;
