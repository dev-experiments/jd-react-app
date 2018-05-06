import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.selectDest = this.selectDest.bind(this);
    }
    selectDest(e) {
        this.props.setDestination();
    }
    render() {
        return (
            <div>
                <div className="htmlform" >
                    <div className="srchhotel">
                        <span className="srchform">
                            <input type="text" className="srchtxt srchtxtcaps" onClick={this.selectDest} name="recent_search" placeholder="Destination / Hotel Name" autoComplete="off" />
                        </span>
                        <span className="srchform">
                            <span className="cel50 fromData datset">
                                <label className="srchlbl">Check In</label>
                                <input type="text" className="srchtxt frmsec" placeholder="Select Date" disabled />
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
                                <input type="text" className="srchtxt htlright tosec" placeholder="Select Date" disabled />
                            </span>
                        </span>
                        <span className="srchform" >
                            <span className="cel50">
                                <label className="srchlbl">Room</label>
                                <span className="srchtxt" >1 Room</span>
                            </span>
                            <span className="cel50">
                                <label className="srchlbl htlright">Guests</label>
                                <span className="srchtxt htlright" >1 Adult</span>
                            </span>
                        </span>
                        <button className="htlgrnbtn ripple" >Search</button>
                    </div>
                </div>
            </div>

        );
    }
}

export default SearchForm;