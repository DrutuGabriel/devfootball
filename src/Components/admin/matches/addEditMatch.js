import React, { Component } from 'react';
import AdminLayout from '../../../HOC/AdminLayout';

import {firebase} from '../../../firebase';


import FormField from '../../ui/formFields';
import {validate} from  '../../ui/misc';

class AddEditMatch extends Component {

  state = {
    matchId: '',
    formType: '',
    formError: false,
    formSuccess: '',
    teams: [],
    formdata: {
      date: {
        element: 'input',
        value: '',
        config: {
          label: 'Event date',
          name: 'date_input',
          type: 'date',
        },
        validation: {
          required: true,
        },
        valid: false,
        validationMessage: '',
        showLabel: true
      },
      local: {
        element: 'select',
        value: '',
        config: {
          label: 'Select a local team',
          name: 'select_local',
          type: 'select',
          options: []
        },
        validation: {
          required: true,
        },
        valid: false,
        validationMessage: '',
        showLabel: false
      },
    }
  }

  updateForm = ({event, id}) => {   
    const newFormData = {...this.state.formdata};
    const newElement = {...newFormData[id]};

    newElement.value = event.target.value;

    let valiData = validate(newElement);
    newElement.valid = valiData[0];
    newElement.validationMessage = valiData[1];


    newFormData[id] = newElement;

    this.setState({
      formError: false,
      formdata: newFormData
    });
  }

  submitForm = event => {
    event.preventDefault();
   
    let dataToSubmit = {};
    let formIsValid = true;

    for(let key in this.state.formdata){
      dataToSubmit[key] = this.state.formdata[key].value;
      formIsValid = this.state.formdata[key].valid && formIsValid;
    }

    if(formIsValid){


    } else {
      this.setState({
        formError: true
      });
    }
  }

  render() {
    return (
      <AdminLayout>
        <div className="editmatch_dialog_wrapper">
          <h2>{this.state.formType}</h2>
          <div>
            <form onSubmit={event => this.submitForm(event)}>
              <FormField 
                id="date" 
                formdata={this.state.formdata.date} 
                change={element => this.updateForm(element)}
              />
              <FormField 
                id="local" 
                formdata={this.state.formdata.local} 
                change={element => this.updateForm(element)}
              />
            </form>
          </div>
        </div>
         
      </AdminLayout>
    );
  }
}

export default AddEditMatch;