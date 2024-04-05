
import './App.css';
import { useEffect, useState, } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component'


function App() {
  const [qoutesData, setQoutesData] = useState([])
  const limit = 20;
  useEffect(()=> {
    fetch('https://api.javascripttutorial.net/v1/quotes/?page=1&limit=10')
      .then((res)=>res.json())
      .then((data)=> setQoutesData(data.data))
  },[])
  const fetchMoreData = () => {
    fetch(`https://api.javascripttutorial.net/v1/quotes/?page=1&limit=${limit}`)
    .then((res)=>res.json())
    .then((data)=> setQoutesData(prev => [...prev, ...data.data]))
  }

  console.log(qoutesData)
  return (
    <div className="App">
      <InfiniteScroll
        dataLength={qoutesData.length}
        next={fetchMoreData}
        hasMore={true}
      >
        {
          qoutesData.map(item => (
            <div key={item.id} className='box'>{item.quote}</div>
          ))
        }
      </InfiniteScroll>
    </div>
  );
}

export default App;
