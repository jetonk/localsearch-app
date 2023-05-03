import { Grid, Box } from "@mui/material";
import { PropTypes } from "prop-types";
import "./styles.css";

export const Days = ({ shift }) => {
  const days = shift.days;

  if (days.length > 2) {
    const firstDay = days[0];
    const lastDay = days[days.length - 1];
    return (
      <Box>
        <label className="dayLabel">{firstDay}</label>
        {" - "}
        <label className="dayLabel">{lastDay}</label>
      </Box>
    );
  }

  return (
    <Box className="columnDays">
      {days.map((day) => {
        return <Box key={day}>{day}</Box>;
      })}
    </Box>
  );
};

Days.propTypes = {
  shift: PropTypes.object.isRequired,
};
