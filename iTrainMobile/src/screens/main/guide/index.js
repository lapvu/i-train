import React from "react";
import { 
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";

export default class GuideScreen extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        <ScrollView>
          <View style={{alignItems:"center",marginVertical:10}}>
            <Text style={styles.title}>Hướng dẫn sử dụng</Text> 
          </View> 
          <View style={styles.container}>
            <Text style={styles.text}>- Bước 1: Chọn ga đi,ga đến,loại vé,ngày đi, ngày về(vé khứ hồi). </Text>
            <View style={{alignItems:"center"}}>
              <Image
                source={require("../../../assets/imgs/guide1.png")}
                style={styles.img}
              />
            </View>
            <Text style={styles.text}>- Bước 2: Sau khi chọn xong ấn tiếp tục để chọn tàu.</Text>
            <View style={{alignItems:"center"}}>
              <Image
                source={require("../../../assets/imgs/guide2.png")}
                style={styles.img}
              />
            </View>
            <Text style={styles.text} >- Bước 3: Sau khi chọn xong tàu bạn được chuyển đến danh sách toa tàu.</Text>
            <View style={{alignItems:"center"}}>
              <Image
                source={require("../../../assets/imgs/guide3.png")}
                style={styles.img}
              />
            </View>
            <Text style={styles.text} >- Bước 4: Chọn ghế. </Text>
            <View style={{alignItems:"center"}}>
              <Image
                source={require("../../../assets/imgs/guide4.png")}
                style={styles.img}
              />
            </View>
            <Text style={styles.text} >- Bước 5: Chọn biểu tượng giỏ hàng để xem giá và đặt vé.</Text>
            <View style={{alignItems:"center"}}>
              <Image
                source={require("../../../assets/imgs/guide5.png")}
                style={styles.img}
              />
            </View>
            <Text style={styles.text} >- Bước 6: Xác nhận hóa đơn.</Text>
            <View style={{alignItems:"center"}}>
              <Image
                source={require("../../../assets/imgs/guide6.png")}
                style={styles.img}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    marginHorizontal:10,
    padding:10,
  },
  title: {
    fontSize:22,
    fontWeight:'bold'
  },
  text: {
    fontSize:16,
    fontWeight:'bold',
    marginVertical:3
  },
  img: {
    width:200,
    height:400,
    resizeMode:'contain'
  } 

})