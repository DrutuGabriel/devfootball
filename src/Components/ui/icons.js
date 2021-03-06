import React from 'react';
import {Link} from 'react-router-dom';

import devfootball from '../../Resources/images/logos/devfootball.png';


export const CityLogo = (props) => {
  const template = <div
    className="img_cover"
    style={{
      width: props.width,
      height: props.height,
      background:`url(${devfootball}) no-repeat`
    }}
  ></div>;

  if(props.link){
    return (
      <Link to={props.linkTo} className="link_logo">
        {template}
      </Link>
    );
  } else {
    return template;
  }
}