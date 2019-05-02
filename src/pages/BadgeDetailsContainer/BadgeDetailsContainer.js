import React from 'react';

import './BadgeDetailsContainer.css';
import LoadingAnimation from '../../components/LoadingAnimation/LoadingAnimation';
import PageError from '../../components/PageError/PageError';
import api from '../../api';
import BadgeDetails from '../BadgeDetails/BadgeDetails';

class BadgeDetailsContainer extends React.Component {
    state = {
        loading: true,
        error: null,
        data: undefined,
    };

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        this.setState({ loading: true, error: null });

        try {
            const data = await api.badges.read(this.props.match.params.badgeId);
            this.setState({ loading: false, data: data });
        } catch (error) {
            this.setState({ loading: false, error: error });
        }
    };

    render() {
        if (this.state.loading) {
            return <LoadingAnimation />;
        }

        if (this.state.error) {
            return <PageError error={this.state.error} />;
        }

        return (
            <BadgeDetails badge={this.state.data} />
        );
    }
}

export default BadgeDetailsContainer;