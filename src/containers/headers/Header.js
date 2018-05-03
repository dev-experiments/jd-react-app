import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MainHeader from './../../JdLibs/wap/UI/headers/MainHeader';
//import './Header.css';
import * as searchActions from '../../store/actions/search';

class Header extends Component {
    /* constructor(props) {
        super(props);
    } */
    headerOptions() {
        let opt = {};
        opt.back_callback = this.backButton;
        return opt;
    }
    backButton() {
        alert('back clicked');
    }
    render() {
        return (
            <MainHeader title='Hotels' options={this.headerOptions()} />
        );
    }

}
// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
    return {
        checkInDate: state.search.checkInDate
    }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
    return {
        setCheckIn: bindActionCreators(searchActions, dispatch).setCheckIn
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
// export default MainHeader;
