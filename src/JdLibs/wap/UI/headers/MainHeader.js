import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MainHeader.css';

class MainHeader extends Component {
    static defaultProps = {
        title: null, // required 
        options: {
            titleCallback: () => { },
            backLabel: '',
            backCallback: () => { },
            rightLinkLabel: '',
            rightLinkCallback: () => { }
        }
    }
    static propTypes = {
        title: PropTypes.string.isRequired,
        options: PropTypes.shape({
            titleCallback: PropTypes.func,
            backCallback: PropTypes.func,
            backLabel: PropTypes.string,
            rightLinkLabel: PropTypes.string,
            rightLinkCallback: PropTypes.func
        }),
    }
    /* constructor(props) {
        super(props);
    } */
   
    backButtonClickHandle() {
        if (this.props.options.backCallback) {
            this.props.options.backCallback();
        }
    }
    titleClickHandle() {
        if (this.props.options.titleCallback) {
            this.props.options.titleCallback();
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
        if (this.props.options.rightLinkCallback) {
            this.props.options.rightLinkCallback();
        }
    }
    render() {
        return (
            <div className='headersection'>
                {this.backButton(this.props.options.backLabel)}
                <span onClick={(e) => { this.titleClickHandle(e) }} >{this.props.title}</span>
                {this.rightLink(this.props.options.rightLinkLabel)}
            </div>
        );
    }
}

export default MainHeader;