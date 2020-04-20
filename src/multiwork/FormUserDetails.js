import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {
    continue = e => {
        const {values} = this.props;
        e.preventDefault();
        const obj ={
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email
        }
        //console.log(obj);
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return (

            <div className="col-sm-6">

                <div className="col d-flex justify-content-center" style={{ boxShadow: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)" }}>
                    <div className="col ">
                        <h3 className="text-center" style={{ borderBottom: "1px dashed #e2e0e0" }}>User Details</h3>
                        <form >
                            <div className="form-group">
                                <label htmlFor="">First Name</label>
                                <input type="text" value={values.firstName} onChange={handleChange('firstName')} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your First Name" />
                                <small className="form-text text-muted">Provide Your First Name</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Last Name</label>
                                <input type="text" value={values.lastName} onChange={handleChange('lastName')} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Last Name" />
                                <small className="form-text text-muted">Provide Your Last Name</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Email</label>
                                <input type="email" value={values.email} onChange={handleChange('email')} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Email" />
                                <small className="form-text text-muted">Provide Your Email</small>
                            </div>

                            <div className="d-flex justify-content-center" >

                                <button className="btn text-white mb-3" onClick={this.continue} style={{ borderRadius: "50px", minWidth: "100px", background: "#099e96" }}>Next Page</button>
                            </div>

                        </form>
                    </div>

                </div>



            </div>
        )
    }
}



export default FormUserDetails;
