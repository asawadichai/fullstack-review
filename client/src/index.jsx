import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
  }

  componentDidMount () {
    $.ajax({
      url: "/repos",
      method: "GET"
    })
      .then((data) => {
        console.log(data);
        this.setState({repos: data})})
  }

  search (term) {
    console.log(`${term} was searched`);
      $.ajax({
        url: "/repos",
        method: "POST",
        contentType: "text/plain",
        data: term
      }).then((data) => {
        console.log(data);
        this.setState({repos: data})})
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));