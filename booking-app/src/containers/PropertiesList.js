import { withRouter } from "react-router";
import { compose } from "redux";
import { connect } from "react-redux";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';

function PropertiesList() {
    return (
        <div>
            List
        </div>
    )
}


export default withRouter(compose(
    connect(null, { })
)(PropertiesList));