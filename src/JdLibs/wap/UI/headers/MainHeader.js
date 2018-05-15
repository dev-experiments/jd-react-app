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

    constructor(props) {
        super(props);
        this.backButtonClickHandle = this.backButtonClickHandle.bind(this);
        this.rightLinkClickHandle = this.rightLinkClickHandle.bind(this);
        this.titleClickHandle = this.titleClickHandle.bind(this);
    }

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
            ui = <span className="backSpan" onClick={this.backButtonClickHandle} > <span className="bcktxt">{label}</span></span>;
        } else {
            ui = <span className="icon-back-arrow backdiv" onClick={this.backButtonClickHandle} ></span>;
        }
        return ui;
    }

    rightLink(label) {
        return (label) ? <span className="hdrclstxt" onClick={this.rightLinkClickHandle} >{label}</span> : '';
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
                <span onClick={this.titleClickHandle} >{this.props.title}</span>
                {this.rightLink(this.props.options.rightLinkLabel)}
            </div>
        );
    }
}

export default MainHeader;