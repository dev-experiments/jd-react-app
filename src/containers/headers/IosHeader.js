import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './MainHeader.css';
import * as searchActions from '../../store/actions/search';
import Location from '../../shared/utils/Location';

class IosHeader extends Component {
    constructor(props) {
        super(props);
        this.init();
    }
    backButton() {
        // alert('back clicked');   
        // this.props.setCheckIn(this.props.checkInDate);
        Location.GETALL(); 
    }
    render() {
        return (
            <div>
                <div className='headersection'>
                    <span className="icon-back-arrow backdiv" onClick={this.backButton}></span>
                    Hotels
                 </div>
            </div>
        );
    }
    init() {
        this.backButton = this.backButton.bind(this);
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

export default connect(mapStateToProps, mapDispatchToProps)(IosHeader);
