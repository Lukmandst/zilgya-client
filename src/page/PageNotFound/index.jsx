import React, { Component } from "react";
import { connect } from "react-redux";
import Loading from "../../component/Loading";
import Navbar from "../../component/Navbar";

import "./PageNotFound.css";

const mapStateToProps = (state) => {
  return {
    loadingRedux: state.user.isLoading,
  };
};

class PageNotFound extends Component {
  componentDidMount() { 
    document.title = "Page Not Found"
   }
  render() {
    return (
      <React.Fragment>
        {this.props.loadingRedux && <Loading/>}
        <Navbar />
        <main className="pnf-wrapper">
          <div className="pnf-left">
            <div className="pnf-title">404</div>
            <div className="pnf-body-one">Page cannot be found!</div>
            <div className="pnf-body-two">
              Donec nunc nunc, gravida vitae diam vel, varius interdum erat.
              Quisque a nunc vel diam auctor commodo. Curabitur blandit ultrices
              exurabitur ut magna dignissim, dignissi
            </div>
            <div className="pnf-footer-wrapper">
              <div className="underline"></div>
              <div className="pnf-footer">BACK TO HOME PAGE</div>
            </div>
          </div>
          <div className="pnf-right">
            <div className="pnf-circle"></div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps)(PageNotFound);
