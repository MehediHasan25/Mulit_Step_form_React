import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormPersonalDetails extends Component {
    continue = e => {
        const {values} = this.props;
        e.preventDefault();
        this.props.nextStep();
    };

    back = e =>{
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            // <MuiThemeProvider>
            //    <div>
            //         <AppBar title="Enter Personal Details"/>             
            //         <TextField
            //             hintText ="Enter Your Occupation"
            //             floatingLabelText="Occupation"
            //             onChange = {handleChange('occupation')}
            //             defaultValue={values.occupation}
            //         />
            //         <br/>
            //         <TextField
            //             hintText ="Enter Your City"
            //             floatingLabelText="City"
            //             onChange = {handleChange('city')}
            //             defaultValue={values.city}
            //         />
            //         <br/>
            //         <TextField
            //             hintText ="Enter Your Bio"
            //             floatingLabelText="Bio"
            //             onChange = {handleChange('bio')}
            //             defaultValue={values.bio}
            //         />
            //         <br/>
            //         <RaisedButton
            //             label ="Continue"
            //             primary={true}
            //             style={styles.button}
            //             onClick={this.continue}
            //         />
            //             <RaisedButton
            //             label ="Back"
            //             primary={false}
            //             style={styles.button}
            //             onClick={this.back}
            //         />
            //        </div>
            //     {/* </React.Fragment> */}
            // </MuiThemeProvider>

            <div className="col-sm-6">
                <div className="col d-flex justify-content-center" style={{ boxShadow: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)" }}>
                    <div className="col">
                        <h3 className="text-center" style={{ borderBottom: "1px dashed #e2e0e0" }}>Enter Personal Details</h3>
                        <form >
                            <div className="form-group">
                                <label htmlFor="">Occupation</label>
                                <input type="text" value={values.occupation} onChange={handleChange('occupation')} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Occupation" />
                                <small className="form-text text-muted">Provide Your Occupation</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">City</label>
                                <input type="text" value={values.city} onChange={handleChange('city')} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter City" />
                                <small className="form-text text-muted">Provide Your City</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Bio</label>
                                <input type="email" value={values.bio} onChange={handleChange('bio')} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Bio" />
                                <small className="form-text text-muted">Provide Your Bio</small>
                            </div>

                            <div className="d-flex justify-content-center" >

                                <button className="btn text-white mb-3" onClick={this.back} style={{ borderRadius: "50px", minWidth: "100px", background: "#099e96" }}>Back</button>&nbsp; &nbsp;
                            <button className="btn text-white mb-3" onClick={this.continue} style={{ borderRadius: "50px", minWidth: "100px", background: "#099e96" }}>Next Page</button>
                            </div>

                        </form>
                    </div>
                </div>




            </div>
        )
    }
}



export default FormPersonalDetails;
