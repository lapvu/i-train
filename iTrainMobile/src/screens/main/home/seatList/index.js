import React from "React";
import { Text } from "native-base";
import colors from "../../../../styles/colors";
import { View, StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: colors.white
  }
});
const mockupSeat = [
  [
    {
      num: 1,
      status: 0
    },
    {
      num: 2,
      status: 0
    },
    {
      num: 5,
      status: 1
    },
    {
      num: 6,
      status: 2
    },
    {
      num: 9,
      status: 0
    },
    {
      num: 10,
      status: 0
    },
    {
      num: 13,
      status: 3
    },
    {
      num: 14,
      status: 4
    }
  ],
  [
    {
      num: 3,
      status: 0
    },
    {
      num: 4,
      status: 0
    },
    {
      num: 7,
      status: 1
    },
    {
      num: 8,
      status: 2
    },
    {
      num: 11,
      status: 0
    },
    {
      num: 12,
      status: 0
    },
    {
      num: 15,
      status: 3
    },
    {
      num: 16,
      status: 4
    }
  ]
];

const faq = [
  {
    name: "Chỗ trống",
    color: colors.white
  },
  {
    name: "Chỗ đã bán",
    color: colors.seatColor1
  },
  {
    name: "Chỗ đang chọn",
    color: colors.seatColor2
  },
  {
    name: "Ghế phụ",
    color: colors.seatColor3
  }
];
export default class SeatListScreen extends React.Component {
  static navigationOptions = {
    title: "Chọn ghế",
    headerStyle: {
      backgroundColor: colors.gradient[0],
      elevation: 0
    },
    headerTintColor: colors.white
  };
  render() {
    const { height, width } = Dimensions.get("window");
    return (
      <View style={{ flex: 1, backgroundColor: "#dddddd" }}>
        <View style={styles.container}>
          {faq.map((e, i) => {
            return (
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center"
                }}
                key={i}
              >
                <Text
                  style={{
                    height: 18,
                    width: 18,
                    borderWidth: 0.5,
                    borderRadius: 5,
                    borderColor: colors.black,
                    backgroundColor: e.color
                  }}
                />
                <Text style={{ color: "gray", fontSize: 13, marginTop: 5 }}>
                  {e.name}
                </Text>
              </View>
            );
          })}
        </View>
        <View style={{ flex: 9, alignItems: "center" }}>
          <View style={{ flex: 1, width: width - 40, flexDirection: "row" }}>
            {mockupSeat.map((e, i) => {
              return (
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                  key={i}
                >
                  <Text>Tầng {i + 1}</Text>
                </View>
              );
            })}
          </View>
          <View
            style={{
              flex: 10,
              flexDirection: "row",
              width: width - 40
            }}
          >
            {mockupSeat.map((e, i) => {
              return (
                <View
                  style={{
                    flex: 1,
                    backgroundColor: colors.white,
                    flexDirection: "row",
                    justifyContent: "center",
                    flexWrap: "wrap"
                  }}
                  key={i}
                >
                  {e.map((data, index) => {
                    return (
                      <Text
                        style={{
                          height: 30,
                          width: "30%",
                          borderWidth: 0.5,
                          borderRadius: 5,
                          borderColor: colors.black,
                          backgroundColor:
                            data.status === 0
                              ? colors.white
                              : data.status === 1
                              ? colors.seatColor1
                              : data.status === 2
                              ? colors.seatColor2
                              : colors.seatColor3,
                          textAlign: "center",
                          textAlignVertical: "center",
                          marginHorizontal: 5,
                          marginTop: 8
                        }}
                        key={index}
                      >
                        {data.num}
                      </Text>
                    );
                  })}
                </View>
              );
            })}
          </View>
          <View style={{ flex: 1 }} />
        </View>
      </View>
    );
  }
}
