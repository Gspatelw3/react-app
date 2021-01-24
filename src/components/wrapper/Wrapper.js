import React, { Component } from 'react';
import { render } from "react-dom";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Header from '../header/Header';
import Banner from '../banner/Banner';
import Intro from '../intro/Intro';
import PhotoContent from '../photo-content/Photo-content';
import Benefit from '../benefit/Benefit';
import Process from '../process/Process';
import AboutIntro from '../about-intro/About-intro'
import Review from '../review/Review'
import Customer from '../customer/Customer';
import Footer from '../footer/Footer'

class Wrapper extends Component {
    render() {
        return (
            <div className="wrapper">
                <Router>
                    <Route path="/" component={Header} />
                    <Route path="/" component={Banner} />
                    <Route path="/vaste-telefonie" component={Intro} />
                    <Route path="/vaste-telefonie" component={PhotoContent} />
                    <Route path="/vaste-telefonie" component={Benefit} />
                    <Route exact path="/" component={Process} />
                    <Route exact path="/" component={AboutIntro} />
                    <Route exact path="/" component={Review} />
                    <Route exact path="/" component={Customer} />
                    <Route path="/" component={Footer} />
                </Router>
            </div>
        )
    }
}
export default Wrapper;