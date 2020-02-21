import { withRouter } from "react-router";
import { compose } from "redux";
import { connect } from "react-redux";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';


function PropertyPage() {
    return (
        <div>
            PropertyPage
        </div>
    )
}


export default withRouter(compose(
    connect(null, { })
)(PropertyPage));