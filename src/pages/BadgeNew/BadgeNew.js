import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Badge from '../../components/Badge/Badge';
import BadgeForm from '../../components/BadgeForm/BadgeForm';

import AvatarImg from '../../images/avatar.png';
import header from '../../images/badge-header.svg';
import './BadgeNew.css';

class BadgeNew extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            form: {
                email: undefined,
                firstName: undefined,
                jobTitle: undefined,
                lastName: undefined,
                twitter: undefined
            }
        }

        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    render () {
        return <React.Fragment>
            <div className="BadgeNew__hero">
                <img src={header} alt="Logo" className="image-fluid"/>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <Badge {...this.state.form} avatarUrl={AvatarImg} />
                    </div>

                    <div className="col-6">
                        <BadgeForm onChange={this.handleOnChange} {...this.state.form} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    }
}

export default BadgeNew;