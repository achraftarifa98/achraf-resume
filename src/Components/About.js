import React, { Component } from "react";

class About extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var profilepic = "images/" + this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src={profilepic}
              alt="Achraf Tarifa Profile Pic"
            />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>

            <div>
              Hello there, happy to see you &#128512;
              <br />
              My name is achraf tarifa a third year computer science student and
              project manager of the IEEE ENIS Student Branch. I am currently
              looking for an internship for my graduation. As I think this is an
              opportunity to improve myself so I am open to any offer that
              challenges or requires me to work outside of my Knowledge set.{" "}
              <br />
              I’ve always been passionate about technology and as a future
              software engineer, I believe that Technology has the ability to
              impact lives at a level and scale that has never been realized in
              the history of mankind so The idea that something I create can
              impact someone across the world now, or in the future is what
              drives my passion for Technology.
            </div>
          </div>
        </div>
        <div className="row">
          <div className="mx-auto download">
            <p>
              <a href={resumeDownload} className="button">
                <i className="fa fa-download"></i>Download Resume
              </a>
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
