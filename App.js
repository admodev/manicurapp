import React from "react";
import { AppLoading } from "expo";
import {
  Container,
  Text,
  Header,
  Card,
  CardItem,
  Body,
  Title,
} from "native-base";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import "./src/css/app.min.css";
import Galeria from "./src/components/Galeria/Galeria.js";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <div>
        <Container>
          <Header style={{ height: "50px" }}>
            <Body>
              <Title>
                <Text
                  className="titulo"
                  style={{
                    marginTop: 120,
                    marginLeft: "45px",
                    fontFamily: '"Dancing Script", cursive',
                    fontSize: "2.7em",
                    color: "#fff",
                  }}
                >
                  Manicurapp
                </Text>
              </Title>
            </Body>
          </Header>
          <Galeria />
        </Container>
      </div>
    );
  }
}
