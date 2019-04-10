import React from 'react';
import "./BadgesList.css";
import twitterLogo from "../../images/twitter_logo.png";

class BadgesList extends React.Component {
    render() {
        return (
            <ul className="BadgesList list-unstyled">
                {this.props.badges.map((badge) => {
                    return (
                        <li className="BadgesList__Badge shadow-sm p-2 m-3 row align-items-center" key={badge.id}>
                            <img src={badge.avatarUrl} alt="Avatar" className="col-3 img-thumbnail img-fluid"/>
                            <div className="col-7">
                                <b className="BadgeList__Badge-name">{badge.firstName} {badge.lastName}</b>
                                <div className="BadgeList__Badge-jobTitle">{badge.jobTitle}</div>
                                <div className="BadgeList__Badge-twitter">
                                    <img src={twitterLogo} alt="Twitter Logo"/>
                                    <small> {badge.twitter}</small>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default BadgesList;