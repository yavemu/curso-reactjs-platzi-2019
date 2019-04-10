import React from 'react';
import LogoImg from '../../images/logo.svg';
import AvatarImg from '../../images/avatar.png';
import './Badge.css';

class Badge extends React.Component {

    
    render() {
        return <div className="Badge">
            <div className="Badge__header">
                <img src={LogoImg} alt="Logo"/>
            </div>

            <div className='Badge__section-name'>
                <img className="Badge__avatar" src={AvatarImg} alt="Avatar" />
                <h1>Yamid <br/> Vélez Muñoz</h1>
            </div>

            <div className='Badge__section-info'>
                <h3>Developer web</h3>
                <div>@yavemu</div>
            </div>

            <div className='Badge__footer'>
                #LearningReactJs
            </div>


        </div>
    }

}

export default Badge;