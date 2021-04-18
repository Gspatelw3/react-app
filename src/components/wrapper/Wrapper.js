import React, { Component } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import Header from '../header/Header';
import Banner from '../banner/Banner';
import Intro from '../intro/Intro';
import PhotoContent from '../photo-content/Photo-content'
import Benefit from '../benefit/Benefit'
import Process from '../process/Process'
import Testimonials from '../testimonials/Testimonials'
import AboutIntro from '../about-intro/About-intro'
import Review from '../review/Review'
import Customer from '../customer/Customer'
import Content from '../content/Content'
import Footer from '../footer/Footer'

class Wrapper extends Component {
    render() {
        return (
            <div className="wrapper">
                <Router>
                    <Route path="/" component={Header} />
                    <Route path="/" component={Banner} />
                    <Route path="/mobiele-telefonie">
                        <Content title="Mobiele telefonie"/>
                    </Route>
                    <Route path="/internet">
                        <Content title="Internet"/>
                    </Route>
                    <Route path="/over-ons">
                        <Content title="Over ons"/>
                    </Route>
                    <Route path="/contact">
                        <Content title="Contact"/>
                    </Route>
                    <Route path="/vaste-telefonie" component={Intro} />
                    <Route path="/vaste-telefonie" component={PhotoContent} />
                    <Route path="/vaste-telefonie" component={Benefit} />
                    <Route exact path="/" component={Process} />
                    <Route exact path="/" component={AboutIntro} />
                    <Route exact path="/" component={Review} />
                    <Route path="/" component={Customer} />
                    <Route path="/vaste-telefonie" component={Testimonials} />
                    <Route path="/" component={Footer} />
                </Router>
            </div>
        )
    }
}
export default Wrapper;