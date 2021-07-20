import { InputGroup, Button, FormControl } from "react-bootstrap";

const SearchAnime = ({ onClick }) => {
    return (
        <InputGroup className="mb-3" size="lg">
            <FormControl
                placeholder="Search for an anime, e.g One Piece"
                aria-label="Search for an anime, e.g One Piece"
                aria-describedby="search bar"
                id="searchBar"
            />
            <Button variant="success" id="button-addon2" onClick={onClick}>
                Go
            </Button>
        </InputGroup>
    )
}

export default SearchAnime
