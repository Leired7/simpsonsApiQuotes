import React from 'react';
import './App.css'
import axios from 'axios';
import Navbar from './Navbar/Navbar';
import QuoteCard from './components/QuoteCard'

const sampleSimpson = {
  character: 'Marge Simpson',
  characterDirection: 'Left',
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMargeSimpson.png?1497567512205",
  quote: 'Welcome to Simpsons Quote App-Web, click the button to refresh quote.',
}

class App extends React.Component {

  constructor (props){
    super(props);
      this.state = {
        character: sampleSimpson, 
      }
      this.getQuoteFromApi = this.getQuoteFromApi.bind(this);
 }

 getQuoteFromApi(){
   const url = 'https://simpsons-quotes-api.herokuapp.com/quotes'
   //Send request to api
   axios.get(url)
   //Extract DATA from the recived response
   .then(response => response.data)
   //Use this data to update the state
   .then(simpsonsQuote => {
     this.setState({
       character: simpsonsQuote[0]
     })
     console.log('data',simpsonsQuote)
  });
 }

 

render(){
  
  return (
    <div className="App">
      <Navbar />
      <div className="quote-card">
        <button className="refresh" type="button" onClick={this.getQuoteFromApi}>Show me another quote</button>
        <QuoteCard character={this.state.character}/>
      </div>
    </div>
  );
};
}

export default App;