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

function useSearchBadges(badges) {
    const [query, setQuery] = React.useState('');
    const [filterBadges, setFilterBadges] = React.useState(badges);

    React.useMemo(
        () => {
            const result = badges.filter((badge) => {
                return `${badge.firstName} ${badge.lastName}`
                    .toLowerCase()
                    .includes(query.toLowerCase())
            });

            setFilterBadges(result)
        }
        , [badges, query]);

    return {query, setQuery, filterBadges}
    
}

function BadgesList (props) {
    const badges = props.badges;
    const { query, setQuery, filterBadges} = useSearchBadges(badges);
    
    if (filterBadges.length === 0) {
        return(
            <div>
                <div className="form-group">
                    <label>Filter Badges</label>
                    <input type="text" className='form-control'
                        value={query}
                        onChange={((e) => {
                            setQuery(e.target.value)
                        })}
                    />
                </div>
                <h3>No badges were found</h3>
                <Link to='/badges/new' className='btn btn-primary'>
                    Create new badge
                </Link>
            </div>
        )
    }
    
    return (
        <div className="BadgesList">
            <div className="form-group">
                <label>Filter Badges</label>
                <input type="text" className='form-control'
                    value={query}
                    onChange={((e) => {
                        setQuery(e.target.value)
                    })}
                />
            </div>
        
            <ul className="list-unstyled">
                {filterBadges.map((badge) => {
                    return (
                        <li className="BadgesList__Badge rounded align-items-center" key={badge.id}>
                            <Link to={`/badges/${badge.id}`} className='text-reset text-decoration-none'>
                                <BadgesListItem badge={badge} />
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )

}

export default BadgesList;