import React from 'react';

class BadgeForm extends React.Component {
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleClick = event => {
        console.log("Button was clicked");
    }
    
    handleSubmit = event => {
        event.preventDefault();
        console.log("Form was Submitted");
    }

    render () {
        return (
            <div>
                <h1>New Attendant</h1>

                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name='firstName' value={this.props.firstName} />
                    </div>
                    
                    <div className="form-group">
                        <label>Last Name</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name='lastName' value={this.props.lastName} />
                    </div>
                    
                    <div className="form-group">
                        <label>Email</label>
                        <input onChange={this.props.onChange} className="form-control" type="email" name='email' value={this.props.email} />
                    </div>
                    
                    <div className="form-group">
                        <label>Job Title</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name='jobTitle' value={this.props.jobTitle} />
                    </div>
                    
                    <div className="form-group">
                        <label>Twitter</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name='twitter' value={this.props.twitter} />
                    </div>

                    <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>
            </div>
        )
    }
}

export default BadgeForm;