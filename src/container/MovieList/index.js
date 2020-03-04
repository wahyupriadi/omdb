import React, { Component } from "react";
import { Image } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";

import { TouchableOpacity, Modal, View } from "react-native";
import { Actions } from "react-native-router-flux";
import axios from "axios";

import { storePosterPop, storePosterClose } from "../__Action";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class MovieList extends Component {
  state = {
    movie: [],
    poster: "",
  };

  componentDidMount() {
    const { keyword } = this.props;
    axios
      .get(`http://www.omdbapi.com?apikey=faf7e5bb&s=${keyword}`)
      .then(res => {
        if (res.data) {
          const data = res.data;
          const movie = (data.response = "True" ? data.Search : "false");
          this.setState({ movie });
        }
      });
  }

  onPressTitle = imdbID => {
    Actions.detail({ imdbID });
  };

  onPressPoster = (poster, popStatus) => {
    this.setState({ poster });
    if (popStatus === true){
        this.props.storePosterPop()
    } else {
        this.props.storePosterClose()
    }
  };

  render() {
    const movieList = this.state.movie;
    return (
      <Container>
        {/* <Header /> */}
        <Content style={{ padding: 16 }}>
          {movieList.map((item, index) => {
            return (
              <Card key={index}>
                <CardItem>
                  <Left style={{ flexGrow: 1, flexShrink: 0, flexBasis: 1 }}>
                    <TouchableOpacity
                      onPress={() => this.onPressPoster(item.Poster, true)}
                    >
                      <Image
                        source={{ uri: item.Poster }}
                        style={{
                          width: 60,
                          height: 80,
                          backgroundColor: "#808080"
                        }}
                      />
                    </TouchableOpacity>
                  </Left>
                  <Body style={{ flexGrow: 2, flexShrink: 0, flexBasis: 1 }}>
                    <TouchableOpacity
                      onPress={() => this.onPressTitle(item.imdbID)}
                    >
                      <Text>{item.Title}</Text>
                      <Text note>{item.Year}</Text>
                    </TouchableOpacity>
                  </Body>
                </CardItem>
              </Card>
            );
          })}
        </Content>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.props.posterPop}
          onRequestClose={() => this.onPressPoster("", false)}
        >
          <View style={{ padding: 20 }}>
            <Image
              source={{ uri: this.state.poster }}
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#808080"
              }}
            />
          </View>
        </Modal>
      </Container>
    );
  }
}

const mapStateToProps = states => {
  return {
    posterPop: states.posterPop.onPosterPop
  }
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      storePosterPop,
      storePosterClose
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
