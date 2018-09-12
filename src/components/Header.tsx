import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';

export const Header: React.StatelessComponent<{}> = () => {
    return (
        <div>
            <AppBar position="static" color="inherit">
                <Toolbar>
                    <Typography variant="display1" color="inherit" >
                        English Dictionary App
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}
