import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './seasonDisplay'

class App extends React.Component{
    state = {lat: null, errMsg: '' };
   componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
        pos => this.setState({lat: pos.coords.latitude}),
        err => this.setState({errMsg: err.message})
    );
   }
    //react needs render defined
    render(){
            if(this.state.errMsg && !this.state.lat){
                return <div>Error: {this.state.errMsg}</div>
            }
            
            if(!this.state.errMsg && this.state.lat){
                return <SeasonDisplay lat={this.state.lat} />
            }

            return <div>loading</div>
    }
}

ReactDOM.render(
    <App />, document.querySelector('#root')
);