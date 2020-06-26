import React, { Component } from "react";
import { Image, ImageComponent } from "react-native";
import {
  Container,
  Header,
  View,
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Icon,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";

export default class Gallery extends Component {
  render() {
    const cards = [
      {
        text: "Mis estilos de uñas",
        name: "Me encanta",
        nameTwo: "No es mi estilo",
        image: require("./imagenUno.jpg"),
        imageTwo: require("./imagenDos.jpg"),
      },
    ];
    return (
      <Container>
        <Header />
        <View>
          <DeckSwiper
            dataSource={cards}
            renderItem={(item) => (
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={item.image} />
                    <Body>
                      <Text>{item.text}</Text>
                      <Text note>Arcoiris</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 300, flex: 1 }} source={item.image} />
                </CardItem>
                <CardItem>
                  <Icon name="heart" style={{ color: "#FE64A3" }} />
                  <Text>{item.name}</Text>
                </CardItem>
                <CardItem>
                  <ion-icon name="close-circle"></ion-icon>
                  <Text>{item.nameTwo}</Text>
                </CardItem>
              </Card>
            )}
          />
          <DeckSwiper
            dataSource={cards}
            renderItem={(item) => (
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={item.imageTwo} />
                    <Body>
                      <Text>{item.text}</Text>
                      <Text note>White pearl</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image
                    style={{ height: 300, flex: 1 }}
                    source={item.imageTwo}
                  />
                </CardItem>
                <CardItem>
                  <Icon name="heart" style={{ color: "#FE64A3" }} />
                  <Text>{item.name}</Text>
                </CardItem>
                <CardItem>
                  <ion-icon name="close-circle"></ion-icon>
                  <Text>{item.nameTwo}</Text>
                </CardItem>
              </Card>
            )}
          />
        </View>
      </Container>
    );
  }
}
