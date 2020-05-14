import React from 'react';
import './style.css';

class BookingPopup extends React.Component {
    cancelReserve(){
        console.log('approve cancel reserve');
        console.log('request to backends here!');
        this.props.closePopup();
    }
    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <h2>Cancel the reservation</h2>
                    <p>Are you sure you want to cancel the reservation <b>{this.props.item.name}</b>? </p>
                    <button className={'yes_btn'} onClick={this.cancelReserve.bind(this)}>Yes</button>
                    <button className={'no_btn'} onClick={this.props.closePopup}>No</button>
                </div>
            </div>
        );
    }
}

export default BookingPopup;
