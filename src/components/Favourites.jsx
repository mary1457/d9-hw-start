import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Button,
} from 'react-bootstrap'

import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const Favourites = () => {
  const favourites = useSelector((state) => state.favourite.list)
  const dispatch = useDispatch()

  const navigate = useNavigate()

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Favourites</h1>
          <Button onClick={() => navigate('/')}>Home</Button>
        </Col>
        <Col xs={10} className="mx-auto my-3">
          <ListGroup>
            {favourites.map((fav, i) => (
              <ListGroupItem key={i}>
             
                <Link to={'/' + fav}>{fav}</Link>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default Favourites
