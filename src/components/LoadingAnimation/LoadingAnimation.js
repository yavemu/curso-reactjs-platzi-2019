import React from 'react';
import './LoadingAnimation.css';
import Loader from 'react-loader-spinner';


export default class LoadingAnimation extends React.Component {
    render() {
        return (
            <div className="LoadingAnimation">
                <Loader type="CradleLoader" height={100} width={100} />
            </div>
        );
    }
}