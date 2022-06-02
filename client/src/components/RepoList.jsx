import React from 'react';
import Repo from './Repo.jsx';

var RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
  <div className ="repo-list">
    {props.repos.map((repoItem) => (
      <Repo key={repoItem._id} full_name={repoItem.full_name} html_url={repoItem.html_url}/>
      ))}
  </div>
  </div>
);

export default RepoList;