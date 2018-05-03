import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MainHeader.css';

class MainHeader extends Component {
    static defaultProps = {
        title: null, // required 
        options: {
            title_callback: () => { },
            back_label: '',
            back_callback: () => { },
            rightLink_label: '',
            rightLink_callback: () => { }
        }
    }
    /* constructor(props) {
        super(props);
    } */
   
    backButtonClickHandle() {
        if (this.props.options.back_callback) {
            this.props.options.back_callback();
        }
    }
    titleClickHandle() {
        if (this.props.options.title_callback) {
            this.props.options.title_callback();
        }
    }
    backButton(label) {
        let ui = '';
        if (label) {
            ui = <span className="backSpan" onClick={(e) => { this.backButtonClickHandle(e) }} > <span className="bcktxt">{label}</span></span>;
        } else {
            ui = <span className="icon-back-arrow backdiv" onClick={(e) => { this.backButtonClickHandle(e) }} ></span>;
        }
        return ui;
    }
    rightLink(label) {
        return (label) ? <span className="hdrclstxt" onClick={(e) => { this.rightLinkClickHandle(e) }} >{label}</span> : '';
    }
    rightLinkClickHandle() {
        if (this.props.options.rightLink_callback) {
            this.props.options.rightLink_callback();
        }
    }
    render() {
        return (
            <div className='headersection'>
                {this.backButton(this.props.options.back_label)}
                <span onClick={(e) => { this.titleClickHandle(e) }} >{this.props.title}</span>
                {this.rightLink(this.props.options.rightLink_label)}
            </div>
        );
    }
}

MainHeader.propTypes = {
    title: PropTypes.string.isRequired,
    options: PropTypes.shape({
        title_callback: PropTypes.func,
        back_callback: PropTypes.func,
        back_label: PropTypes.string,
        rightLink_label: PropTypes.string,
        rightLink_callback: PropTypes.func
    }),
};

export default MainHeader;