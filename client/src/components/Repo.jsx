import React from 'react';

var Repo = (props) => {
  return (
    <div className="repo-list">
      <a href={props.html_url}>{props.full_name}</a>
    </div>
  );
};

export default Repo;