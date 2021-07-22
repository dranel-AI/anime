import { useState, useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import SearchAnime from './components/SearchAnime';
import DisplayAnime from './components/DisplayAnime';
import Footer from './components/footer';
import JikanJS from "jikanjs";

const App = () => {
  const [title, setTitle] = useState('');
  const [results, setResults] = useState({});
  const searchInput = useRef();

  const submit = () => {
    setTitle(searchInput.current.value)
  }

  const fetchBusinesses = () => {
    const fetchData = async () => {
      if(title.length > 3) {
        setResults(await JikanJS.search("anime", title));
      }
    };
    fetchData();
  };

  useEffect(fetchBusinesses);

  return (
    <>
      <Container fluid className="p-4 bg-danger">
        <h1 style={{color: '#28d4e0'}}>find your favorite anime</h1>
        <SearchAnime searchInput={searchInput} onClick={submit} />
      </Container>
      <Container className="d-flex justify-content-center flex-wrap p-3 min-vh-100">
        {Object.keys(results).length > 0 && <DisplayAnime results={results}/>}
      </Container>
      <Footer />
    </>
  );
}

export default App;
