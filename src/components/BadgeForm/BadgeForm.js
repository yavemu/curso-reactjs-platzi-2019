import React from 'react';

class BadgeForm extends React.Component {

    render () {
        return (
            <React.Fragment>
                <h1>New Attendant</h1>

                <form onSubmit={this.props.onSubmit}>
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

                    {this.props.error && <p className="text-danger">{this.props.error.message}</p>}
                    <button className="btn btn-primary">Save</button>
                </form>
            </React.Fragment>
        )
    }
}

export default BadgeForm;