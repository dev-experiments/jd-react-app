import React, { Component } from 'react';
import './RoomSelection.css';
// import RoomClass from './RoomClass.js';

class RoomSelection extends Component {
   /*  constructor(props) {
        super(props);
    } */
   
    render() {
        return (
            <div>
                <div className="pickgtrvls" >
                    <div className="toclonewp">
                        <div className="rooms toclone animated fadeInUp">
                            <span className="largtxt">Room 1</span>
                            <div className="hpickrange">
                                <span className="hlftlbl">
                                    Adults<span className="lftsublbl">+ 12 Years</span>
                                </span>
                                <span className="hrgtlbl htlright">
                                    <span className="icon-decrease adult_minus"></span><span className="hnumtxt adult_val">1</span><span className="icon-increase adult_plus"></span>
                                </span>
                            </div>
                            <div className="hpickrange">
                                <span className="hlftlbl">
                                    Children<span className="lftsublbl">0 - 12 Years</span>
                                </span>
                                <span className="hrgtlbl htlright">
                                    <span className="icon-decrease child_minus"></span><span className="hnumtxt child_val">0</span><span className="icon-increase child_plus"></span>
                                </span>
                            </div>
                            <div className="hpickrange ageotr dn">
                                <span className="hlftlbl">
                                    Child 1 age
					</span>
                                <div className="agerange">
                                    <ul>
                                        <li><a className="childage active" data-val="1">≤ 1</a></li>
                                        <li><a className="childage" data-val="2">2</a></li>
                                        <li><a className="childage" data-val="3">3</a></li>
                                        <li><a className="childage" data-val="4">4</a></li>
                                        <li><a className="childage" data-val="5">5</a></li>
                                        <li><a className="childage" data-val="6">6</a></li>
                                        <li><a className="childage" data-val="7">7</a></li>
                                        <li><a className="childage" data-val="8">8</a></li>
                                        <li><a className="childage" data-val="9">9</a></li>
                                        <li><a className="childage" data-val="10">10</a></li>
                                        <li><a className="childage" data-val="11">11</a></li>
                                        <li><a className="childage" data-val="12">12</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="hpickrange ageotr dn">
                                <span className="hlftlbl">
                                    Child 2 age
					</span>
                                <div className="agerange">
                                    <ul>
                                        <li><a className="childage active" data-val="1"> 1</a></li>
                                        <li><a className="childage" data-val="2">2</a></li>
                                        <li><a className="childage" data-val="3">3</a></li>
                                        <li><a className="childage" data-val="4">4</a></li>
                                        <li><a className="childage" data-val="5">5</a></li>
                                        <li><a className="childage" data-val="6">6</a></li>
                                        <li><a className="childage" data-val="7">7</a></li>
                                        <li><a className="childage" data-val="8">8</a></li>
                                        <li><a className="childage" data-val="9">9</a></li>
                                        <li><a className="childage" data-val="10">10</a></li>
                                        <li><a className="childage" data-val="11">11</a></li>
                                        <li><a className="childage" data-val="12">12</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="hpickrange ageotr dn">
                                <span className="hlftlbl">
                                    Child 3 age
					</span>
                                <div className="agerange">
                                    <ul>
                                        <li><a className="childage active" data-val="1">≤ 1</a></li>
                                        <li><a className="childage" data-val="2">2</a></li>
                                        <li><a className="childage" data-val="3">3</a></li>
                                        <li><a className="childage" data-val="4">4</a></li>
                                        <li><a className="childage" data-val="5">5</a></li>
                                        <li><a className="childage" data-val="6">6</a></li>
                                        <li><a className="childage" data-val="7">7</a></li>
                                        <li><a className="childage" data-val="8">8</a></li>
                                        <li><a className="childage" data-val="9">9</a></li>
                                        <li><a className="childage" data-val="10">10</a></li>
                                        <li><a className="childage" data-val="11">11</a></li>
                                        <li><a className="childage" data-val="12">12</a></li>
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

export default RoomSelection;