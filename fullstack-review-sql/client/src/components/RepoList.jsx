import React from 'react';
import Repo from './Repo.jsx';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    {props.repos.map((item) => (
      <Repo key={item.id} html_url={item.html_url} full_name={item.full_name}/>
    ))}
  </div>
)

export default RepoList;