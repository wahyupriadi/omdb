import React, { Component } from "react";
import { Image } from "react-native";
import {
  Header,
  Container,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  H1,
  H2,
  H3,
  Grid,
  Row,
  Col
} from "native-base";

import { TouchableOpacity } from "react-native";
import axios from "axios";
import { connect } from "react-redux";

class MovieDetail extends Component {
  state = {
    movie: {}
  };

  componentDidMount() {
    const { imdbID } = this.props;
    axios
      .get(`http://www.omdbapi.com?apikey=faf7e5bb&&i=${imdbID}&plot=full`)
      .then(res => {
        if (res.data) {
          const data = res.data;
          const movie = (data.response = "True" ? data : "false");
          this.setState({ movie });
        }
      });
  }

  render() {
    const item = this.state.movie;
    return (
      <Container>
        <Header>
          <Body>
            <Text>{item.Title}</Text>
          </Body>
        </Header>
        <Content>
          <Card key={item.imdbID}>
            <CardItem>
              <Body style={{ display: "flex", justifyContent: "center" }}>
                <Image
                  style={{ width: 150, height: 200 }}
                  source={{ uri: item.Poster }}
                />
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <H2>{item.Title}</H2>
                <Row>
                  <Col>
                    <Text>Genre</Text>
                  </Col>
                  <Col>
                    <Text>{item.Genre}</Text>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Text>Duration</Text>
                  </Col>
                  <Col>
                    <Text>{item.Runtime}</Text>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Text>Director</Text>
                  </Col>
                  <Col>
                    <Text>{item.Director}</Text>
                  </Col>
                </Row>
                <Row style={{ marginTop: 16 }}>
                  <Text>Synopsis</Text>
                </Row>
                <Row>
                  <Text>{item.Plot}</Text>
                </Row>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

// const mapStateToProps = (state) => {
//     const { movie } = state
//     return { movie }
//   };

export default MovieDetail;
