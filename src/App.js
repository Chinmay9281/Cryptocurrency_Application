import React, { useState, useEffect } from 'react';
import './App.css';

import Card from './components/Card';
import Search from './components/Search';

function App() {
  const [coin, setCoin] = useState([]);
  const [text, setText] = useState("");
  const getData = () => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false#"
    )
      .then((res) => res.json())
      .then((res) => {
        setCoin(res);
      });
  };

  useEffect(() => {
    getData()
  }, [])

  const handleChange = (e) => {
    setText(e.target.value);
  }

  const filteredCoins = coin.filter((item) => {
    return (
      item.name.toLowerCase().includes(text.toLowerCase())
    )
  })

  return (
    <div className="App">
      {/* <Search text={text} state={setText}></Search> */}
      <form action="">
        <input type="text" placeholder='Enter coin name' onChange={handleChange} style={{margin:"2%", width:"50%", height:"50px", borderRadius:"5px"}} />
      </form>
      <div className='box'>
        {filteredCoins.map((res) => {
          return (
            <Card key={res.id} name={res.name} percentage={res.price_change_percentage_24h} currPrice={res.current_price} image={res.image} marketCap={res.market_cap}></Card>
          )
        })}
      </div>
    </div>
  );
}

export default App;
