import React from 'react';
import Navbar from './Navbar/Navbar';
//import QuoteCard from './components/QuoteCard';
import Quotelist from './components/Quotelist'
import QuoteForm from './components/QuoteForm'

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <QuoteForm />
      <Quotelist />
        
    </div>

  );
};

export default App;