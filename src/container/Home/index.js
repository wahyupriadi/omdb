import React, { Component } from "react";
import { Image } from "react-native";
import {
  Header,
  Left,
  Body,
  Right,
  Title,
  Container,
  Content,
  Grid,
  Col,
  Row,
  Form,
  Input,
  Item,
  Button,
  Text
} from "native-base";
import { Actions } from "react-native-router-flux";

export default class CardImageExample extends Component {
  state = {
    keyword: ""
  };

  handleInput = data => {
    this.setState({ keyword: data });
  };

  onSubmit = () => {
    const { keyword } = this.state;
    if (keyword.length > 0) {
      Actions.list({ keyword });
    }
  };

  render() {
    return (
      <Container>
        <Header noLeft>
          <Body>
            <Title>Movie Database</Title>
          </Body>
          <Right />
        </Header>
        <Content style={{ padding: 16 }}>
          <Grid>
            <Col style={{ height: 200 }}>
              <Form>
                <Item regular>
                  <Input
                    placeholder="Search Movie"
                    onChangeText={data => this.handleInput(data)}
                  />
                </Item>
                <Button block onPress={() => this.onSubmit()}>
                  <Text>Search</Text>
                </Button>
              </Form>
            </Col>
          </Grid>
        </Content>
      </Container>
    );
  }
}
