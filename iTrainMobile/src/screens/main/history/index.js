import React from "react";
import { Text, View, AsyncStorage } from "react-native";
import colors from "../../../styles/colors";
import firebase from "react-native-firebase";
import Loader from "../../../components/loader";
import { priceDisplay } from "../../../helpers";
import {
  Header,
  Body,
  Title,
  List,
  ListItem,
  Left,
  Thumbnail,
  Right
} from "native-base";
class HistoryScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false
    };
  }
  loadData = async () => {
    this.setState({ isLoading: true, data: [] });
    try {
      const user = await AsyncStorage.getItem("user");
      const snapshot = await firebase
        .firestore()
        .collection("orders")
        .where("userId", "==", JSON.parse(user).uid)
        .limit(5)
        .get();
      snapshot.docs.forEach(doc => {
        let state = [...this.state.data, doc.data()];
        this.setState({
          data: state
        });
      });
    } catch (e) {
      console.log(e);
      this.setState({
        isLoading: false
      });
    }
    this.setState({
      isLoading: false
    });
  };
  formatDate = dt => {
    date = new Date(dt);
    year = date.getFullYear();
    month = date.getMonth() + 1;
    dt = date.getDate();
    if (dt < 10) {
      dt = "0" + dt;
    }
    if (month < 10) {
      month = "0" + month;
    }
    return year + "-" + month + "-" + dt;
  };
  componentDidMount() {
    this.listener = this.props.navigation.addListener(
      "didFocus",
      this.loadData
    );
  }

  componentWillUnmount() {
    this.listener.remove();
  }
  render() {
    return (
      <React.Fragment>
        {this.state.isLoading && (
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Loader />
          </View>
        )}
        {!this.state.isLoading && (
          <View style={{ flex: 1 }}>
            <Header style={{ backgroundColor: colors.gradient[0] }}>
              <Body
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Title>Lịch sử đặt vé</Title>
              </Body>
            </Header>
            <View style={{ marginTop: 10 }}>
              <List>
                {this.state.data.map((e, i) => {
                  return (
                    <ListItem avatar key={i}>
                      <Left>
                        <Thumbnail
                          source={require("../../../assets/imgs/bill.png")}
                        />
                      </Left>
                      <Body>
                        <Text>
                          Mã đơn hàng :
                          <Text style={{ color: colors.black }}> {e.code}</Text>
                        </Text>
                        <Text note>
                          Số lượng :
                          <Text>
                            {" "}
                            {e.shoppingCart.go.length +
                              e.shoppingCart.back.length}
                          </Text>
                        </Text>
                        <Text note>
                          Giá :
                          <Text style={{ color: "red" }}>
                            {" "}
                            {priceDisplay(e.totalPrice)}
                          </Text>
                        </Text>
                      </Body>
                      <Right>
                        <Text note>{this.formatDate(e.dateCrate)}</Text>
                      </Right>
                    </ListItem>
                  );
                })}
              </List>
            </View>
          </View>
        )}
      </React.Fragment>
    );
  }
}
export default HistoryScreen;
