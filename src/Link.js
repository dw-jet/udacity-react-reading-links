import React from 'react'

function Link(props) {
    return (
        <a target='_blank'
        rel='noopener noreferrer'
        href={props.url}>
        {props.text}
      </a>
    );
  }

  export default Link