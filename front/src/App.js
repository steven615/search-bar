import { useState, useEffect } from 'react';

// Custom components
import Header from './components/Header';
import Products from './components/Products';

const axios = require('axios');
// specify config defaults that will be applied to every request.
axios.defaults.baseURL = 'http://localhost:3001/api/';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // When load page, Get and display all products
    getProducts('');
  }, []);

  const handleSearch = (searchVal) => {
    // Validation search value
    if(typeof searchVal !== 'string') {
      return;
    }
    // Send a request for get products to server
    getProducts(searchVal);
  }

  // Get products
  const getProducts = (searchVal) => {
    // search by product name
    let url = `?name_like=${searchVal}`;

    axios.get(url)
    .then(function (response) {
      // If error
      if(response.status !== 200) {
        return;
      }
      // set state
      setData(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  return (
    <div className="App">
      <Header
        onSearch={handleSearch}
        onCancelSearch={() => handleSearch('')} />
      <div>
        <Products data={data} />
        {
          data.length < 1 &&
          <div style={{padding: '0 50px'}}>Not found</div>
        }
      </div>
    </div>
  );
}

export default App;
