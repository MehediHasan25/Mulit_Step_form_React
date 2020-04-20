import React, { Component } from 'react'

export class MultiFieldForm extends Component {
   
    continue = e => {
        const {values} = this.props;
        e.preventDefault();
        this.props.nextStep();
    };

    back = e =>{
        e.preventDefault();
        this.props.prevStep();
    }



   
    handleSubmit = e => {
        e.preventDefault()
    
        console.log(this.props.values.fields);
       // const obj = this.props.fields;
        // const arr = [];
        // const info = obj.map(val => {
        //   //console.log(val);
        //   arr.push(val);
        // })
        // console.log("myarr", arr);
      }
   
    render() {
        const {values, fields, addFields, deteteRow} = this.props;
        //console.log(fields);
        return (
            <div>
        <form onSubmit={this.handleSubmit} onChange={this.props.onChange}>
         

          {
            values.fields.map((val, idx) => {
              let nidNoId = `nidNo=${idx}`, dobId = `dob-${idx}`
              return (
                <div>
                  <table style={{ border: "1px solid black" }}>
                    <tr>
                      <td>
                        <label htmlFor={nidNoId}>Nid No</label>
                        <input
                          type="text"
                          name="nidNo"
                          data-id={idx}
                          id={nidNoId}
                          value={values.fields[idx].nidNo}
                          className="nidNo"
                        />

                      </td>
                    </tr>

                    <tr>
                      <td>
                        <label htmlFor={dobId}>Date of Birth</label>
                        <input
                          type="text"
                          name="dob"
                          data-id={idx}
                          id={dobId}
                          value={values.fields[idx].dob}
                          className="dob"
                        />

                      </td>
                    </tr>

                    <tr>
                      <td> <button onClick={() => deteteRow(idx)}>Delete row</button></td>
                    </tr>
                  </table>

                </div>

              )
            })

          }


          <input type="submit" value="Submit" />


        </form>
        <button onClick={addFields}>add row</button>
        <button onClick={this.continue}>Continue</button>
        <button onClick={this.back}>Back</button>
      </div>
        )
    }
}

export default MultiFieldForm;
