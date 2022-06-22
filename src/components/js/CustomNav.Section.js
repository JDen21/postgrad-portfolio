import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import CustomNavStyle from '../css/CustomNav.module.css'
import { ButtonGroup, Button } from '@mui/material';

function HideOnScroll(props) {
    const {children, window} = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window. This is only being set here because the demo is in an
    // iframe.
    const trigger = useScrollTrigger({
        target: window
            ? window()
            : undefined
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
    window: PropTypes.func
};

export default function HideAppBar(props) {
    return (
        <React.Fragment>
            <CssBaseline/>
            <HideOnScroll {...props}>
                <AppBar>
                    <Toolbar>
                        <div className={CustomNavStyle.parentDiv} >
                            <div>
                                <Typography variant="h6" component="div">
                                    Den Garcia
                                </Typography>
                            </div>
                            <div>
                            {/* check routing */}
                            <ButtonGroup size='smalll' color='secondary' variant="text" aria-label="text button group">
                                <Button size='small' variant='contained' color='secondary' >Home</Button>
                                <Button size='small' >About</Button>
                                <Button size='small' >works</Button>
                            </ButtonGroup>
                            
                            </div>
                        </div>

                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar/>
        </React.Fragment>
    );
}
