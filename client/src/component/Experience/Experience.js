import React, { Component } from "react";
import LazyLoad from "react-lazyload";
import { Spring } from "react-spring/renderprops";
import mailbutler from "../../img/MB_Logo.jpg";
import softagram from "../../img/sg-logo.png";
import smilee from "../../img/smilee.png";
import Loading from "../common/Loading/Loading";
import "./Experience.scss";

export default class Experience extends Component {
  render() {
    const infoData = [
      {
        company: mailbutler,
        position: "Internship",
        location: "Berlin, Germany",
        responsibility: [
          `Development: I'm responsible for implemting new feature, fix bugs and errors, testing for web application website, chrome extension and mobile projects.`,
          `Teamworks: work together with 5-6 developers throughtout all the projects`,
          `Working closely with customer support to solve the customer problem effectively`,
        ],
        duration: "02/2020 - presents",
        contactPerson: "Fabian",
        contactPersonInfo: "@mailbutler.io",
      },
      {
        company: smilee,
        position: "Trainee",
        location: "Oulu, Finland",
        responsibility: [
          `Development: I'm responsible for finding implementing new feature, fixing bugs, errors for web application .`,
        ],
        duration: "11/2019 - 01/2020",
        contactPerson: "Jesse Lumme",
        contactPersonInfo: "jesse.lumme@smilee.io",
      },
      {
        company: softagram,
        position: "Trainee",
        location: "Oulu, Finland",
        responsibility: [
          `Development: I'm responsible for finding implementing new feature fix bugs, errors for web application .`,
        ],
        duration: "03/2019 - 04/2019",
        contactPerson: "Tommi Tallagren",
        contactPersonInfo: "tommi.tallgren@softagram.com",
      },
    ];
    return (
      <div id="experience">
        <LazyLoad
          id="experienceload"
          height={0}
          offset={[-200, 0]}
          placeholder={<Loading />}
          debounce={300}
        >
          <div className="experience-container">
            <Spring
              from={{ top: -100, opacity: 0 }}
              to={{ top: 0, opacity: 1 }}
            >
              {(props) => (
                <div className="aboutintro">
                  <h1 className="twoline" style={props}>
                    EXPERIENCE
                  </h1>
                </div>
              )}
            </Spring>
            <div className="content-box">
              <div className="experience-box">
                {infoData.map((info, index) => (
                  <ExperienceItem key={index} number={index} dataskill={info} />
                ))}
              </div>
            </div>
          </div>
        </LazyLoad>
      </div>
    );
  }
}

class ExperienceItem extends Component {
  render() {
    const { dataskill, number } = this.props;
    return (
      <React.Fragment>
        <Spring
          from={{ opacity: 0, transform: "scale(0.5)" }}
          to={{ opacity: 1, transform: "scale(1)" }}
          config={{ duration: 500 }}
          delay={number * 200}
        >
          {(props) => (
            <div className="experience-card" style={props}>
              <div className="experience-header">
                <span class="alignleft">
                  <img
                    src={dataskill.company}
                    style={{ height: "30px" }}
                    alt=""
                  />
                </span>
                <span class="alignright">{dataskill.duration}</span>
              </div>

              <div className="line-sperators"></div>
              <p>Position: {dataskill.position}</p>
              <p className="qualification-title">
                Qualification / Responsibility
              </p>
              <div className="experience-qualification">
                <ul>
                  {dataskill.responsibility.map((responsibility) => (
                    <li>{responsibility}</li>
                  ))}
                </ul>
              </div>
              <p>
                <span style={{ fontWeight: "bold" }}>Contact person: </span>
                {dataskill.contactPerson} - {dataskill.contactPersonInfo}
              </p>
            </div>
          )}
        </Spring>
      </React.Fragment>
    );
  }
}