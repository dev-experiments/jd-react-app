import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './RoomSelection.css';
import RoomClass from './../../classes/RoomClass.js';
import MainHeader from './../../JdLibs/wap/UI/headers/MainHeader';

import { withRouter } from "react-router-dom";

class RoomSelection extends Component {
    static defaultProps = {

    }
    static propTypes = {
        roomDetails: PropTypes.instanceOf(RoomClass).isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            roomDetails: props.roomDetails
        }
        this.roommsOb = props.roomDetails;
        this.removeAdult = this.removeAdult.bind(this);
        this.addAdult = this.addAdult.bind(this);

        this.addChild = this.addChild.bind(this);
        this.removeChild = this.removeChild.bind(this);

        this.setChildAge = this.setChildAge.bind(this);

        this.saveDetails = this.saveDetails.bind(this);
        this.backButton = this.backButton.bind(this);
    }
    backButton() {
        this.props.history.push('/');
    }
    addAdult() {
        this.roommsOb.addAdult();
        this.setState((prevState, props) => ({
            roomDetails: this.roommsOb
        }));
    }

    removeAdult() {
        if (this.roommsOb.adults.length > 1) {
            this.roommsOb.removeAdult();
        }
        this.setState((prevState, props) => ({
            roomDetails: this.roommsOb
        }));
    }

    addChild() {
        this.roommsOb.addChild();
        this.setState((prevState, props) => ({
            roomDetails: this.roommsOb
        }));
    }

    removeChild() {
        this.roommsOb.removeChild();
        this.setState((prevState, props) => ({
            roomDetails: this.roommsOb
        }));
    }

    setChildAge() {

    }
    saveDetails() {
        this.props.setRoomDetails(this.state.roomDetails);
    }

    headerOptions() {
        return {
            backCallback: () => this.backButton(),
            rightLinkLabel: 'Done',
            rightLinkCallback: () => this.saveDetails(),
        };
    }

    render() {
        return (
            <div>
                <MainHeader title='Pick Travellers' options={this.headerOptions()} />
                <div className="pickgtrvls" >
                    <div className="toclonewp">
                        <div className="rooms toclone animated fadeInUp">
                            <span className="largtxt">Room 1</span>
                            <div className="hpickrange">
                                <span className="hlftlbl">
                                    Adults<span className="lftsublbl">+ 12 Years</span>
                                </span>
                                <span className="hrgtlbl htlright">
                                    <span onClick={this.removeAdult} className="icon-decrease adult_minus"></span>
                                    <span className="hnumtxt adult_val">{this.state.roomDetails.adults.length}</span>
                                    <span onClick={this.addAdult} className="icon-increase adult_plus"></span>
                                </span>
                            </div>
                            <div className="hpickrange">
                                <span className="hlftlbl">
                                    Children<span className="lftsublbl">0 - 12 Years</span>
                                </span>
                                <span className="hrgtlbl htlright">
                                    <span onClick={this.removeChild} className="icon-decrease child_minus"></span>
                                    <span className="hnumtxt child_val">{this.state.roomDetails.childrens.length}</span>
                                    <span onClick={this.addChild} className="icon-increase child_plus"></span>
                                </span>
                            </div>
                            <div className="hpickrange ageotr dn">
                                <span className="hlftlbl">
                                    Child 1 age
					</span>
                                <div className="agerange">
                                    <ul onClick={this.setChildAge}>
                                        <li><a className="childage active" >≤ 1</a></li>
                                        <li><a className="childage" >2</a></li>
                                        <li><a className="childage" >3</a></li>
                                        <li><a className="childage" >4</a></li>
                                        <li><a className="childage" >5</a></li>
                                        <li><a className="childage" >6</a></li>
                                        <li><a className="childage" >7</a></li>
                                        <li><a className="childage" >8</a></li>
                                        <li><a className="childage" >9</a></li>
                                        <li><a className="childage" >10</a></li>
                                        <li><a className="childage" >11</a></li>
                                        <li><a className="childage" >12</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="haddroom animated fadeInUp ripple" >+ Add another room</a>
                </div>
            </div>

        );
    }
}

export default withRouter(RoomSelection);