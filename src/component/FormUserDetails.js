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
        console.log(obj);
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
               <div>
                    <AppBar title="Enter User Details"/>             
                    <TextField
                        hintText ="Enter Your First Name"
                        floatingLabelText="First Name"
                        onChange = {handleChange('firstName')}
                        defaultValue={values.firstName}
                    />
                    <br/>
                    <TextField
                        hintText ="Enter Your Last Name"
                        floatingLabelText="Last Name"
                        onChange = {handleChange('lastName')}
                        defaultValue={values.lastName}
                    />
                    <br/>
                    <TextField
                        hintText ="Enter Your Email"
                        floatingLabelText="Email"
                        onChange = {handleChange('email')}
                        defaultValue={values.email}
                    />
                    <br/>
                    <RaisedButton
                        label ="Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                   </div>
                {/* </React.Fragment> */}
            </MuiThemeProvider>
        )
    }
}

const styles ={
    button:{
        margin: 15
    }
}

export default FormUserDetails;
