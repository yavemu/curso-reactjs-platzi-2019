import React from "react";
import Badge from '../../components/Badge/Badge';
import BadgeForm from '../../components/BadgeForm/BadgeForm';
import md5 from 'md5';

import header from '../../images/platziconf-logo.svg';
import './BadgeEdit.css';

import api from "../../api";
import LoadingAnimation from "../../components/LoadingAnimation/LoadingAnimation";

class BadgeEdit extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            error: null,
            form: {
                email: '',
                firstName: '',
                jobTitle: '',
                lastName: '',
                twitter: '',
                avatarUrl: ''
            }
        }

        this.handleOnChange = this.handleOnChange.bind(this);
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData = async e => {
        this.setState({loading:true, error:null});
        
        try {
            const data = await api.badges.read(
                this.props.match.params.badgeId
            );            
            this.setState({loading:false, form:data});
        } catch (error) {
            this.setState({loading:false, error:error});
        }
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
        if (this.state.form.email) {
            const createAvatarUrl = `https://www.gravatar.com/avatar/${md5(this.state.form.email)}?d=identicon`;
            this.state.form.avatarUrl = createAvatarUrl;
        }
        
        try {
            await api.badges.update(this.props.match.params.badgeId, this.state.form);
            this.setState({ loading:false });
            this.props.history.push("/badges");
        } catch (error) {
            this.setState({ loading:true, error });
        }
    }

    render () {
        if (this.state.loading && !this.state.error) {
            return <LoadingAnimation/>
        }
        return <React.Fragment>
            <div className="BadgeEdit__hero">
                <img className="image-fluid BadgeEdit__hero-image" src={header} alt="Logo"/>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <Badge {...this.state.form} />
                    </div>

                    <div className="col-6">
                        <h1>Edit Attendant</h1>
                        <BadgeForm 
                            onChange={this.handleOnChange} 
                            onSubmit={this.handleSubmit} 
                            {...this.state.form} 
                            error={this.state.error}
                            />
                    </div>
                </div>
            </div>
        </React.Fragment>
    }
}

export default BadgeEdit;