import React from "react";
import Badge from '../../components/Badge/Badge';
import BadgeForm from '../../components/BadgeForm/BadgeForm';
import md5 from 'md5';

import header from '../../images/platziconf-logo.svg';
import './BadgeNew.css';

import api from "../../api";

class BadgeNew extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            error: null,
            form: {
                email: undefined,
                firstName: undefined,
                jobTitle: undefined,
                lastName: undefined,
                twitter: undefined,
                avatarUrl: undefined
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

    handleSubmit = async e => {
        e.preventDefault();

        this.setState({ loading:true, error:null });
        
        const createAvatarUrl = `https://www.gravatar.com/avatar/${md5(this.state.form.email)}?d=identicon`;
        this.state.form.avatarUrl = createAvatarUrl;
        
        try {
            await api.badges.create(this.state.form)
            this.setState({ loading:false });
            this.props.history.push("/badges");
        } catch (error) {
            this.setState({ loading:true, error });
        }
    }

    render () {
        return <React.Fragment>
            <div className="BadgeNew__hero">
                <img className="image-fluid BadgeNew__hero-image" src={header} alt="Logo"/>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <Badge {...this.state.form} />
                    </div>

                    <div className="col-6">
                        <BadgeForm onChange={this.handleOnChange} onSubmit={this.handleSubmit} {...this.state.form} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    }
}

export default BadgeNew;