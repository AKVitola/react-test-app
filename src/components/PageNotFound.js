import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

const PageNotFound = () => {
    return (
        <Stack sx={{ width: '100%' }}>
            <Alert severity="error">
                <AlertTitle>404 error</AlertTitle>
                Page was not found.
                <p><a href='/'>Click here to return to the site hompage.</a></p>
            </Alert>
        </Stack >
    );
}

export default PageNotFound;