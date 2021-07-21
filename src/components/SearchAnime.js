import { InputGroup, Button, FormControl } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";

const SearchAnime = ({ onClick }) => {
    return (
        <InputGroup className="mb-3" size="lg">
            <FormControl
                placeholder="Search for an anime, e.g One Piece"
                aria-label="Search for an anime, e.g One Piece"
                aria-describedby="search bar"
                id="searchBar"
            />
            <Button variant="primary" id="button-addon2" onClick={onClick}>
                 <BsSearch />
            </Button>
        </InputGroup>
    )
}

export default SearchAnime
