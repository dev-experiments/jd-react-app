import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './SearchForm.css';

class SearchForm extends Component {
    /*  constructor(props) {
         super(props);
         
     } */

    render() {
        return (
            <div>
                <div className="htmlform" >
                    <div className="srchhotel">
                        <span className="srchform">
                            <Link to='/search'>
                                <input type="text" className="srchtxt srchtxtcaps" onClick={this.props.destination} name="recent_search" placeholder="Destination / Hotel Name" autoComplete="off" />
                            </Link>
                        </span>
                        <span className="srchform">
                            <span className="cel50 fromData datset">
                                <label className="srchlbl">Check In</label>
                                <Link to='/calendar'>
                                    <input type="text" onClick={this.props.checkIn} className="srchtxt frmsec" placeholder="Select Date" />
                                </Link>

                            </span>

                            <div className="ngthrs" >
                                <span className="htlnight">
                                    <span className="day">1</span>
                                    <span className="icon-jd_nights"></span>
                                    <span className="ngttxt"> Night</span>
                                </span>
                            </div>
                            <span className="cel50 toData datset" data-target="toinput">
                                <label className="srchlbl htlright">Check Out</label>
                                <Link to='/calendar'>
                                    <input type="text" onClick={this.props.checkOut} className="srchtxt htlright tosec" placeholder="Select Date" />
                                </Link>
                            </span>
                        </span>
                        <Link to='/roomSelection'>
                            <span className="srchform" onClick={this.props.roomSelection}>
                                <span className="cel50">
                                    <label className="srchlbl">Room</label>
                                    <span className="srchtxt" >1 Room</span>
                                </span>
                                <span className="cel50">
                                    <label className="srchlbl htlright">Guests</label>
                                    <span className="srchtxt htlright" >1 Adult</span>
                                </span>
                            </span>
                        </Link>
                        <button className="htlgrnbtn ripple" >Search</button>
                    </div>
                </div>
            </div>

        );
    }
}

export default SearchForm;