import { InputGroup, Button, FormControl } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";

const SearchAnime = ({ searchInput, onClick }) => {
    return (
        <InputGroup className="mb-3 inputbar" size="lg">
            <FormControl
                ref={searchInput}
                placeholder="Search for an anime, e.g One Piece"
                aria-label="Search for an anime, e.g One Piece"
                aria-describedby="search bar"
            />
            <Button variant="primary" onClick={onClick}>
                 <BsSearch />
            </Button>
        </InputGroup>
    )
}

export default SearchAnime
