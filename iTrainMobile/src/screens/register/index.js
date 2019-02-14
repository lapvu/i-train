import React from "react";
import { Dimensions, StyleSheet, Alert } from "react-native";
import { Content, Form } from "native-base";
import colors from "../../styles/colors";
import LinearGradient from "react-native-linear-gradient";
import MyInput from "../../components/Input";
import MyButton from "../../components/button";
import { Formik, validateYupSchema } from "formik";
class RegisterScreen extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: colors.gradient[0],
      elevation: 0
    },
    headerTintColor: colors.white
  };
  _handleSubmit = values => {
    Alert.alert(JSON.stringify(values));
  };
  render() {
    const { width } = Dimensions.get("window");
    return (
      <Formik
        initialValues={{
          phoneNumber: "",
          fullName: "",
          password: "",
          confirmPassword: ""
        }}
        onSubmit={this._handleSubmit}
        render={({
          values,
          handleSubmit,
          isSubmitting,
          setFieldValue,
          errors
        }) => (
          <React.Fragment>
            <LinearGradient colors={colors.gradient} style={styles.container}>
              <Content contentContainerStyle={styles.content}>
                <Form style={{ width: width - 50 }}>
                  <MyInput
                    placeholder="số điện thoại"
                    name="phoneNumber"
                    values={values.phoneNumber}
                    onChange={setFieldValue}
                  />
                  <MyInput
                    placeholder="họ tên"
                    name="fullName"
                    values={values.fullName}
                    onChange={setFieldValue}
                  />
                  <MyInput
                    placeholder="mật khẩu"
                    secureTextEntry={true}
                    name="password"
                    values={values.password}
                    onChange={setFieldValue}
                  />
                  <MyInput
                    placeholder="xác nhận mật khẩu"
                    secureTextEntry={true}
                    name="confirmPassword"
                    values={values.confirmPassword}
                    onChange={setFieldValue}
                  />
                  <MyButton title="ĐĂNG KÝ" onPress={handleSubmit} />
                </Form>
              </Content>
            </LinearGradient>
          </React.Fragment>
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
export default RegisterScreen;
