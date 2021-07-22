import { Card, ListGroup, ListGroupItem } from "react-bootstrap"

const DisplayAnime = ({ results }) => {
    return (
        <>
            {
                results.results.map((result, i) => (
                    <ListGroup.Item variant="primary" key={i}>
                        <Card style={{ width: '18rem' }} className="m-3">
                            <Card.Img variant="top" src={result.image_url} style={{maxHeight: 250}}/>
                            <Card.Body>
                                <Card.Title>{result.title}</Card.Title>
                                <Card.Text>{result.synopsis}</Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>type: {result.type}</ListGroupItem>
                                <ListGroupItem>episodes: {result.episodes}</ListGroupItem>
                                <ListGroupItem>score: {result.score}</ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                                <Card.Link href={result.url}>view more</Card.Link>
                            </Card.Body>
                        </Card>
                    </ListGroup.Item>
                ))
            }
        </>
    )
}

export default DisplayAnime
