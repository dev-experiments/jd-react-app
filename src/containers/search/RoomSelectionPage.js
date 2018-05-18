import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

import RoomSelection from './../../components/search/RoomSelection';
import MainHeader from './../../JdLibs/wap/UI/headers/MainHeader';

class RoomSelectionPage extends Component {
    constructor(props) {
        super(props);
        this.backButton = this.backButton.bind(this);
    }
    backButton() {
        this.props.history.push('/');
    }
    headerOptions() {
        return {
            backCallback: () => this.backButton(),
            rightLinkLabel: 'Close',
            rightLinkCallback: () => this.backButton(),
        };
    }

    render() {

        return (
            <div>
                <MainHeader title='Pick Travellers' options={this.headerOptions()} />
                <RoomSelection />
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        // current_view: state.search.current_view
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        //setCurrentViewAction: bindActionCreators(searchActions, dispatch).setCurrentViewAction
    }
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RoomSelectionPage));