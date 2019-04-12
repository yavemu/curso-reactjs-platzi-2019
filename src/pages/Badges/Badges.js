import React from "react";
import BadgesList from "../../components/BadgesList/BadgesList";
import LoadingAnimation from "../../components/LoadingAnimation/LoadingAnimation";
import PageError from "../../components/PageError/PageError";
import confLogo from "../../images/badge-header.svg";
import { Link } from "react-router-dom";
import api from "../../api";

import './Badges.css';

class Badges extends React.Component {
    state = {
        loading: true,
        error: null,
        data: undefined
    }

    componentDidMount(){
        this.fetchGetData();
    }

    fetchGetData = async () => {
        this.setState({ loading: true, error: null });
        
        try {
            const data= await api.badges.list();
            this.setState({ loading: false, data });
        } catch (error) {
            this.setState({ loading: false, error });
        }
    }
    
    render(){
            if (this.state.error) {
                return <PageError error={this.state.error} />
            }
            
            if (this.state.loading) {
                return <LoadingAnimation />
            }

            
        return <React.Fragment>
            <div className="Badges">
                <div className="Badges__hero">
                    <div className="Badges__container">
                        <img className="Badges_conf-logo" src={confLogo} alt="Conf Logo"/>
                    </div>
                </div>
            </div>

            <div className="Badges__container col align-self-center">
                <div className="Badges__container">
                    {!this.state.data.length && 
                        <div class="alert alert-danger" role="alert">No badges were found.</div>
                    }
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">
                            Create new Badge
                        </Link>
                    </div>
                </div>

                {!!this.state.data.length && <div className="Badges_list col align-self-center">
                    <div className="Badges__container">
                        <BadgesList badges={this.state.data} />
                    </div>
                </div>}
            </div>
        </React.Fragment>
    }
} 

export default Badges;