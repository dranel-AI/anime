import { useState, useEffect } from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import SearchAnime from './components/SearchAnime';
import DisplayAnime from './components/DisplayAnime';
import JikanJS from "jikanjs";

import './App.css'

const App = () => {
  const [title, setTitle] = useState('');
  const [result, setResult] = useState({});

  const submit = () => {
    const searchBar = document.querySelector('#searchBar');
    setTitle(searchBar.value)
  }

  const fetchBusinesses = () => {
    const fetchData = async () => {
      try {
        const res = await JikanJS.search("anime", title);
        setResult(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  };

  useEffect(fetchBusinesses, [title]);

  return (
    <div className="App">
      <Container className="p-3">
        <Jumbotron>
          <h1 className="header">find your favorite anime</h1>
          <SearchAnime onClick={submit} />
        </Jumbotron>
        {Object.keys(result).length > 0 && <DisplayAnime results={result}/>}
      </Container>
    </div>
  );
}

export default App;
