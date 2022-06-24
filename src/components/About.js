import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <div>
      <Box mt={13} display="flex" flexDirection="column" alignItems="center">
        <Typography sx={{ fontFamily: "fantasy" }} variant="h2">
          This is CRUD application
        </Typography>
        <Typography sx={{ fontFamily: "cursive" }} variant="h3">
          With MERN Stack
        </Typography>
        <Typography sx={{ fontFamily: "monospace", mt: "23px" }} variant="h4">
          ...By Sourabh
        </Typography>
      </Box>
    </div>
  );
};

export default About;
