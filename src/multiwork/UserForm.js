import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';
import MultiFieldForm from './MultiFieldForm';

export class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: '',
        fields: [{ nidNo: '', dob: '' }]
    }


    //Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    //Go back to prev step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

   
    //Handle Fields Change
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }

    //Multichange for Dynamic multiform
    multiChange = e => {
        if (["nidNo", "dob"].includes(e.target.className)) {
            let fields = [...this.state.fields]
            fields[e.target.dataset.id][e.target.className] = e.target.value
            this.setState({ fields })
        }
    }

    addFields = e => {
        this.setState((prevState) => ({
            fields: [...prevState.fields, { nidNo: '', dob: '' }],
        }));
    }

    deteteRow = (index) => {
        this.setState({
            fields: this.state.fields.filter((s, sindex) => index !== sindex),
        });

    }


    render() {
        const { step } = this.state;
        const { firstName, lastName, email, occupation, city, bio, fields } = this.state;
        const values = { firstName, lastName, email, occupation, city, bio, fields }

        switch (step) {
            case 1:
                return (
                    <FormUserDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )

            case 2:
                return (
                    <FormPersonalDetails
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )

            case 3:
                return (
                    <MultiFieldForm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        onChange={this.multiChange}
                        addFields={this.addFields}
                        deteteRow={this.deteteRow}
                        values={values}
                    />
                )

            case 4:
                return (
                    <Confirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                )
            case 5:
                return <Success />
        }

        return (
            <div>

            </div >
        )
    }
}

export default UserForm;
