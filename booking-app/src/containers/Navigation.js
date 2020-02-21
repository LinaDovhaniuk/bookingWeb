import { withRouter } from "react-router";
import { compose } from "redux";
import { connect } from "react-redux";
import React from "react";


function Navigation() {
    return (
        <div>
            Navigation
        </div>
    )
}


export default withRouter(compose(
    connect(null, { })
)(Navigation));