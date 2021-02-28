import React from 'react';
import {Link} from 'react-router-dom';

export const Tag = (props) => {
  // include class from props
  // remove fontsize, only put it if props.size is provided
  const template = <div
    style={{
      background: props.bck,
      fontSize: props.size,
      color: props.color,
      padding: '5px 10px',
      display: 'inline-block',
      fontFamily: 'Righteous',
      ...props.add
    }}
    className={props.addClass ?  props.addClass : ''}
  >
    {props.children}
  </div>;

  if(props.link){
    return (
      <Link to={props.linkTo}>
        {template}
      </Link>
    )
  } else {
    return template;
  }
}

export const firebaseLooper = snaptshot => {
  let data = [];

  snaptshot.forEach((childSnapshot) => {
    data.push({
      ...childSnapshot.val(),
      id: childSnapshot.key
    });
  });

  return data;
}

export const reverseArray = actualArray => {
  let reversedArray = [];

  for(let i = actualArray.length - 1; i >= 0; i--){
    reversedArray.push(actualArray[i]);
  }

  return reversedArray
}

export const validate = element => {
  let validation = [true, ''];

  let isValid, message;

  if(element.validation.email){
    isValid = /\S+@\S+\.\S+/.test(element.value);
    message = `${!isValid ? 'Must be a valid email' : ''}`;

    validation = !isValid ? [isValid, message] : validation;
  }

  if(element.validation.required){
    isValid = element.value.trim() !== '';
    message = `${!isValid ? 'This field is required' : ''}`;

    validation = !isValid ? [isValid, message] : validation;
  }




  return validation;
}