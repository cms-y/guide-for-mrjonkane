import React, { Component } from 'react';
import Content from '../container/Content.js';

class ContentsFull extends Component {
  constructor(props) {
    super(props);
    this.state = { contents : [] }
  }
  componentDidMount() {
    var contents = [];
    var data = this.props.data;
    for(var i in data){
      contents.push(
        <a key={data[i].image} href={data[i].href ? "#" + data[i].href : ""}>
          <li style={{backgroundImage:"url("+ data[i].image +")",height:data[i].height,opacity:data[i].opacity}}>
            <div>
              <Content full_main={data[i].main} full_sub={data[i].sub} color={data[i].color}></Content>
              <div></div>
            </div>
          </li>
        </a>
      );
    }
    this.setState({ contents : contents });
  }
  render() {
    return ( <ul>{this.state.contents}</ul> );
  }
}

export default ContentsFull;