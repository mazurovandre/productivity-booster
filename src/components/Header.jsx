import React from 'react';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Header = () => {
    return (
        <Box component="header" sx={{
            textAlign: 'center',
            marginBottom: '30px'
        }}>
            <Typography variant="h1" sx={{
                fontSize: '4em',
                lineHeight: '1'
            }}>Productivity Booster
            </Typography>
        </Box>
    );
};

export default Header;