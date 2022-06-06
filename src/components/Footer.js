import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
    const [value, setValue] = React.useState('recents');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation sx={{ width: "100%", backgroundColor: "#92bdca", position: 'fixed', bottom: 0 }} value={value} onChange={handleChange}>
            <BottomNavigationAction
                component="a"
                target="_blank"
                href="https://www.facebook.com/Latvijas.Republika/"
                value="Facebook"
                icon={<FacebookIcon />}
            />
            <BottomNavigationAction
                component="a"
                target="_blank"
                href="https://twitter.com/rigas_pils"
                value="Twitter"
                icon={<TwitterIcon />}
            />
            <BottomNavigationAction
                component="a"
                target="_blank"
                href="https://www.linkedin.com/"
                value="Linkedin"
                icon={<LinkedInIcon />}
            />
        </BottomNavigation>
    );
}

export default Footer;