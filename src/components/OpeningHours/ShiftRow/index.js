import { Grid, Box } from "@mui/material";
import { Days } from "components/OpeningHours/Days";
import { PropTypes } from "prop-types";

export const ShiftRow = ({ shift }) => {
  const firstShift = shift.firstShift;
  const secondShift = shift.secondShift;

  return (
    <Box className="rowContainer">
      <Days shift={shift} />
      <Box className="displayShifts">
        <Box>{firstShift}</Box>
        <Box>{secondShift}</Box>
      </Box>
    </Box>
  );
};

ShiftRow.propTypes = {
  shift: PropTypes.object.isRequired,
};
