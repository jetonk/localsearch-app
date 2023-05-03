import { Grid, Box } from "@mui/material";
import { ShiftRow } from "./ShiftRow";
import { PropTypes } from "prop-types";

export function OpeningHours({ openingHours }) {
  const shifts = Object.keys(openingHours);
  return (
    <>
      <Box className="title">Opening Hours</Box>
      <Box className="workingDays">
        <Box className="shiftContainer">
          {shifts.map((key) => {
            const shift = openingHours[key];
            console.log("shift", shift);
            return <ShiftRow shift={shift} />;
          })}
        </Box>
      </Box>
    </>
  );
}

OpeningHours.propTypes = {
  openingHours: PropTypes.object.isRequired,
};
