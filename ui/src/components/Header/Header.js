import { useEffect, useState } from "react";
import "../../App.css";
import MovieBox from "../Movie/MovieBox";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";

const API_SEARCH =
  "https://api.themoviedb.org/3/search/movie?api_key=556b85ffaf853c43b792a9a179982d0a&query";

function Header() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
            width="100%"
            height="30"
            className="d-inline-block align-top"
            alt="NETFLİX"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>

        <Navbar.Collapse id="nabarScroll">
          <Nav
            className="me-auto my-2 my-lg-3"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>

          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Movie Search"
              className="me-2"
              aria-label="search"
              name="query"
              value={query}
              onChange={changeHandler}
            ></FormControl>
            <Button variant="secondary" type="submit">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
