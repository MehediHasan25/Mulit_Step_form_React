import React, { Component } from 'react';

export class Confirm extends Component {
    continue = e => {
        const { values } = this.props;
        e.preventDefault();
        //Process form//
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values: { firstName, lastName, email, occupation, city, bio, fields } } = this.props;
        console.log(fields);
        return (

            <div className="col-sm-6">

            <div className="col d-flex justify-content-center" style={{ boxShadow: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)" }}>
                <div className="col">
                    <h3 className="text-center" style={{ borderBottom: "1px dashed #e2e0e0" }}>Confirm User Details</h3>

                    <small className="form-text text-muted">First Name : {firstName}</small>
                    <small className="form-text text-muted">Last Name : {lastName}</small>
                    <small className="form-text text-muted">Email : {email}</small>
                    <small className="form-text text-muted">Occupation : {occupation}</small>
                    <small className="form-text text-muted">City : {city}</small>
                    <small className="form-text text-muted">Bio : {bio}</small>

                    {fields.map((val, i) => (
                        <div>
                            <br/>
                            <p>Nominee {i+1}</p>
                            <small className="form-text text-muted">Nid No : {fields[i].nidNo}</small>
                            <small className="form-text text-muted">Date of Birth : {fields[i].dob}</small>
                        </div>
                        ))}


                    <div className="d-flex justify-content-center" >

                        <button className="btn text-white mb-3" onClick={this.back} style={{ borderRadius: "50px", minWidth: "100px", background: "#099e96" }}>Back</button>&nbsp; &nbsp;
                <button className="btn text-white mb-3" onClick={this.continue} style={{ borderRadius: "50px", minWidth: "100px", background: "#099e96" }}>Confirm</button>
                    </div>
                </div>

            </div>

        </div>
        )
    }
}


export default Confirm;
