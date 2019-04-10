import React from 'react';

class BadgeForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            firstName: null,
            lasttName: null,
            email: null,
            jobTitle: null,
            twitter: null
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = event => {
        
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value,
        });
        
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
                        <input onChange={this.handleChange} className="form-control" type="text" name='firstName' value={this.state.firstName} />
                    </div>
                    
                    <div className="form-group">
                        <label>Last Name</label>
                        <input onChange={this.handleChange} className="form-control" type="text" name='lasttName' value={this.state.lasttName} />
                    </div>
                    
                    <div className="form-group">
                        <label>Email</label>
                        <input onChange={this.handleChange} className="form-control" type="email" name='email' value={this.state.email} />
                    </div>
                    
                    <div className="form-group">
                        <label>Job Title</label>
                        <input onChange={this.handleChange} className="form-control" type="text" name='jobTitle' value={this.state.jobTitle} />
                    </div>
                    
                    <div className="form-group">
                        <label>Twitter</label>
                        <input onChange={this.handleChange} className="form-control" type="text" name='twitter' value={this.state.twitter} />
                    </div>

                    <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>
            </div>
        )
    }
}

export default BadgeForm;