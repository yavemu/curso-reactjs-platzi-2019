import React from 'react';
import Gravatar from "../Gravatar/Gravatar";
import LogoImg from '../../images/logo.svg';
import './Badge.css';


class Badge extends React.Component {
    
    render() {
        let {
            email,
            firstName,
            jobTitle,
            lastName,
            twitter
        } = this.props;

        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img src={LogoImg} alt="Logo" />
                </div>

                <div className='Badge__section-name'>
                    <Gravatar className="Badge__avatar" email={email}/>
                    <h1>{firstName} <br /> {lastName}</h1>
                </div>

                <div className='Badge__section-info'>
                    <h3>{jobTitle}</h3>
                    <div>@{twitter}</div>
                    <div>{email}</div>
                </div>

                <div className='Badge__footer'>
                    #LearningReactJs
                </div>
            </div>
        )
    }

}

export default Badge;