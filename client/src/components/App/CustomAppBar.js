import React, { PureComponent } from 'react';
import {
    AppBar,
    Button,
    Toolbar,
    Tooltip,
} from '@material-ui/core';
import LoadSaveScheduleFunctionality from './LoadSaveFunctionality';
import { Assignment, Info } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import logo from './logo.png';
import NotificationHub from './NotificationHub';
import SettingsMenu from './SettingsMenu'

const styles = {
    appBar: {
        marginBottom: '4px',
        boxShadow: 'none',
        backgroundColor: '#305db7',
        minHeight: 0,
    },
    buttonMargin: {
        marginRight: '4px',
    },
};

class CustomAppBar extends PureComponent {
    render() {
        const { classes } = this.props;

        return (
            <AppBar position="static" className={classes.appBar}>
                <Toolbar variant="dense">
                    <img height={32} src={logo} alt={'Logo'} />

                    <div style={{flexGrow: '1'}} />

                    <LoadSaveScheduleFunctionality />

                    <SettingsMenu />

                    <NotificationHub />

                    <Tooltip title="Give Us Feedback!">
                        <Button
                            onClick={() => {
                                window.open(
                                    'https://goo.gl/forms/eIHy4kp56pZKP9fK2',
                                    '_blank'
                                );
                            }}
                            color="inherit"
                            startIcon={<Assignment />}
                        >
                            Feedback
                        </Button>
                    </Tooltip>

                    <Tooltip title="Info Page">
                        <Button
                            onClick={() => {
                                window.open(
                                    'https://www.ics.uci.edu/~rang1/AntAlmanac/index.html',
                                    '_blank'
                                );
                            }}
                            color="inherit"
                            startIcon={<Info />}
                        >
                            About
                        </Button>
                    </Tooltip>
                </Toolbar>
            </AppBar>
        );
    }
}

export default withStyles(styles)(CustomAppBar);