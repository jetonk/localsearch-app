import { Grid, Box } from "@mui/material";
import { PropTypes } from "prop-types";
import "./styles.css";

export const Days = ({ shift }) => {
  if (shift.days.length > 2) {
    const firstDay = shift.days[0];
    const lastDay = shift.days[shift.days.length - 1];
    return (
      <Box>
        {firstDay} - {lastDay}
      </Box>
    );
  }
  return (
    <Box className="columnDays">
      {shift.days.map((day) => {
        console.log("day", day);
        return <Box key={day}>{day}</Box>;
      })}
    </Box>
  );
};
Days.propTypes = {
  shift: PropTypes.object.isRequired,
};
