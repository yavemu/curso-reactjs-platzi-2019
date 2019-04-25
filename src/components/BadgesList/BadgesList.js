import React from 'react';
import "./BadgesList.css";
import twitterLogo from "../../images/twitter_logo.png";
import { Link } from "react-router-dom";

class BadgesListItem extends React.Component {
    render() {
        return (
            <div className="BadgesListItem">
                <img src={this.props.badge.avatarUrl} alt="Avatar" className="sm img-fluid rounded-circle" />
                <div className="col">
                    <b className="BadgeList__Badge-name">{this.props.badge.firstName} {this.props.badge.lastName}</b>
                    <div className="BadgeList__Badge-jobTitle">{this.props.badge.jobTitle}</div>
                    <div className="BadgeList__Badge-twitter">
                        <img src={twitterLogo} alt="Twitter Logo" />
                        <small> @{this.props.badge.twitter}</small>
                    </div>
                </div>
            </div> 
        )}
}

class BadgesList extends React.Component {
    render() {
        return (
            <ul className="BadgesList list-unstyled">
                {this.props.badges.map((badge) => {
                    return (
                        <li className="BadgesList__Badge rounded m-3 row align-items-center" key={badge.id}>
                            <Link to={`/badges/${badge.id}`} className='text-reset text-decoration-none'>
                                <BadgesListItem badge={badge} />
                            </Link>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default BadgesList;