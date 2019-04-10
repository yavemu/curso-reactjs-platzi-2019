import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Badge from '../../components/Badge/Badge';

import AvatarImg from '../../images/avatar.png';
import header from '../../images/badge-header.svg';
import './BadgeNew.css';

class BadgeNew extends React.Component {

    render () {
        return <div>
            <Navbar />
            <div className="BadgeNew__hero">
                <img src={header} alt="Logo" className="image-fluid"/>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <Badge firstName='YAMid' lastName='Vélez Muñoz' jobTitle='Developer Web' avatarUrl={AvatarImg} twitter='yavemu' />

                    </div>
                </div>
            </div>
        </div>
    }
}

export default BadgeNew;