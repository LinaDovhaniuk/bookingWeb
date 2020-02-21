import { withRouter } from "react-router";
import { compose } from "redux";
import { connect } from "react-redux";
import React from "react";


function Property() {
    return (
        <div>
            Property
        </div>
    )
}


export default withRouter(compose(
    connect(null, { })
)(Property));