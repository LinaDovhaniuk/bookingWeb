import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

import Box from '@material-ui/core/Box';
import withStyles from '@material-ui/core/styles/withStyles';



const styles = {
    mainBox: {
        display:        'flex',
        justifyContent: 'center',
        flexDirection:  'column',
        alignItems:     'center',
    },
    info: {
        display:        'flex',
        justifyContent: 'center',
        flexDirection:  'column',
        alignItems:     'center',
        fontSize:       25,
        textAlign:      'center',
        width:          '80%',
    },
    hr: {
        width: '50%',
        color: 'black',
    },
};


class About extends Component {

    render () {
        const { classes } = this.props;

        return (
            <Box className = { classes.mainBox }>
                <Box className = { classes.info }>
                    <h3>About us</h3>
                    <hr className = { classes.hr } />
                    Hello
                </Box>
            </Box>

        );

    }
}

export default withRouter(compose(
    withStyles(styles),
)(About));
