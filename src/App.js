import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import SearchAnime from './components/SearchAnime';
import DisplayAnime from './components/DisplayAnime';
import Footer from './components/footer';
import JikanJS from "jikanjs";

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
    <>
      <Container class="p-5 bg-danger text-white">
        <h1 className="header text-white">find your favorite anime</h1>
        <SearchAnime onClick={submit} />
      </Container>
      <Container className="d-flex justify-content-center flex-wrap p-3 min-vh-100">
        {(Object.keys(result).length > 0) && <DisplayAnime results={result}/>}
      </Container>
      <Footer />
    </>
  );
}

export default App;
