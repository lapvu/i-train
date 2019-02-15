import React from "react";
import { Content, Form, Button, Text } from "native-base";
import colors from "../../../styles/colors";
import { Dimensions, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import MyInput from "../../../components/Input";
import { Formik } from "formik";
class LoginScreen extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: colors.gradient[0],
      elevation: 0
    },
    headerTintColor: colors.white
  };
  render() {
    const { width } = Dimensions.get("window");
    return (
      <Formik
        initialValues={{
          phoneNumber: "",
          password: ""
        }}
        render={({
          errors,
          values,
          setFieldValue,
          setFieldTouched,
          touched
        }) => (
          <LinearGradient colors={colors.gradient} style={styles.container}>
            <Content contentContainerStyle={styles.content}>
              <Form
                style={{
                  width: width - 50
                }}
              >
                <MyInput
                  placeholder="số điện thoại"
                  name="phoneNumber"
                  values={values.phoneNumber}
                  onChange={setFieldValue}
                  error={touched.phoneNumber && errors.phoneNumber}
                  onTouch={setFieldTouched}
                />
                <MyInput
                  placeholder="mật khẩu"
                  secureTextEntry={true}
                  name="password"
                  values={values.password}
                  onChange={setFieldValue}
                  error={touched.password && errors.password}
                  onTouch={setFieldTouched}
                />
                <Button rounded bordered light block>
                  <Text>ĐĂNG NHẬP</Text>
                </Button>
              </Form>
            </Content>
          </LinearGradient>
        )}
      />
    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1
  },
  content: {
    justifyContent: "center",
    flex: 1
  }
});
export default LoginScreen;
