import React from 'react';
import "./BadgesList.css";
import twitterLogo from "../../images/twitter_logo.png";

class BadgesList extends React.Component {
    render() {
        return (
            <ul className="BadgesList list-unstyled">
                {this.props.badges.map((badge) => {
                    return (
                        <li className="BadgesList__Badge shadow rounded p-2 m-3 row align-items-center" key={badge.id}>
                            <img src={badge.avatarUrl} alt="Avatar" className="sm img-fluid rounded-circle"/>
                            <div className="col">
                                <b className="BadgeList__Badge-name">{badge.firstName} {badge.lastName}</b>
                                <div className="BadgeList__Badge-jobTitle">{badge.jobTitle}</div>
                                <div className="BadgeList__Badge-twitter">
                                    <img src={twitterLogo} alt="Twitter Logo"/>
                                    <small> @{badge.twitter}</small>
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