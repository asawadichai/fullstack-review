import React from 'react';

const Repo = (props) => {
  return (
    <div>
      <a href={props.html_url}>{props.full_name}</a>
    </div>
  )
}

export default Repo;