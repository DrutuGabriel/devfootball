import React, { Component } from 'react';
import AdminLayout from '../../../HOC/AdminLayout';

import {firebasePlayers, firebaseDB, firebase} from '../../../firebase';

import FormField from '../../ui/formFields';
import {validate} from  '../../ui/misc';

import FileUploader from '../../ui/FileUploader';

class AddEditPlayers extends Component {

  state = {
    playerId: '',
    formType: '',
    formError: false,
    formSuccess: '',
    defaultImg: '',
    formdata: {
      name: {
        element: 'input',
        value: '',
        config: {
          label: 'Player name',
          name: 'name_input',
          type: 'text',
        },
        validation: {
          required: true,
        },
        valid: false,
        validationMessage: '',
        showLabel: true
      },
      lastname: {
        element: 'input',
        value: '',
        config: {
          label: 'Player lastname',
          name: 'lastname_input',
          type: 'text',
        },
        validation: {
          required: true,
        },
        valid: false,
        validationMessage: '',
        showLabel: true
      },
      number: {
        element: 'input',
        value: '',
        config: {
          label: 'Player number',
          name: 'number_input',
          type: 'text',
        },
        validation: {
          required: true,
        },
        valid: false,
        validationMessage: '',
        showLabel: true
      },
      position: {
        element: 'select',
        value: '',
        config: {
          label: 'Select a position',
          name: 'select_position',
          type: 'select',
          options: [
            {key: 'Keeper', value: 'Keeper'},
            {key: 'Defence', value: 'Defence'},
            {key: 'Midfield', value: 'Midfield'},
            {key: 'Striker', value: 'Striker'}
          ]
        },
        validation: {
          required: true,
        },
        valid: false,
        validationMessage: '',
        showLabel: true
      },
      image: {
        element: 'image',
        value: '',
        validation: {
          required: true
        },
        valid: true
      }
    }
  }

  updateForm = ({event, id}, content = '') => {   
    const newFormData = {...this.state.formdata};
    const newElement = {...newFormData[id]};

    newElement.value = content === '' ? event.target.value : content;

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
      if(this.state.formType === 'Edit player'){
        ////
      } else {
        firebasePlayers.push(dataToSubmit)
          .then(() => {
            this.props.history.push('/admin_players');
          })
          .catch(e => {
            this.setState({
              formError: true
            });
          });
      }
    } else {
      this.setState({
        formError: true
      });
    }
  }

  componentDidMount(){
    const playerId = this.props.match.params.id;

    if(!playerId){
      this.setState({
        formType: 'Add Player'
      });
    } else {
      this.setState({
        formType: 'Edit Player'
      });
    }
  }

  resetImage = () => {
    const newFormdata = {...this.state.formdata};

    newFormdata.image.value = '';
    newFormdata.image.valid = false;

    this.setState({
      defaultImg: '',
      formdata: newFormdata
    });
  }

  storeFilename = filename => {
      this.updateForm({id: 'image'}, filename);
  }

  render() {
    return (
      <AdminLayout>
        <div className="editplayers_dialog_wrapper">
          <h2>{this.state.formType}</h2>
          <div>
            <form onSubmit={event => this.submitForm(event)}>

              <FileUploader 
                dir="players"
                tag={"Player image"}
                defaultImg={this.state.defaultImg}
                defaultImgName={this.state.formdata.image.value}
                resetImage={() => this.resetImage()}
                filename={filename => this.storeFilename(filename)}
              />

              <FormField 
                id="name" 
                formdata={this.state.formdata.name} 
                change={element => this.updateForm(element)}
              />

              <FormField 
                id="lastname" 
                formdata={this.state.formdata.lastname} 
                change={element => this.updateForm(element)}
              />

              <FormField 
                id="number" 
                formdata={this.state.formdata.number} 
                change={element => this.updateForm(element)}
              />

              <FormField 
                id="position" 
                formdata={this.state.formdata.position} 
                change={element => this.updateForm(element)}
              />

              <div className="success_label">
                {this.state.formSuccess}
              </div>
              {
                this.state.formError ? 
                  <div className="error_label">
                      Something is wrong
                  </div> : null
              }

              <div className="admin_submit">
                <button onClick={event => this.submitForm(event)}>
                  {this.state.formType}
                </button>
              </div>

            </form>
          </div>
        </div>
      </AdminLayout>
    );
  }
}

export default AddEditPlayers;