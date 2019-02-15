import React from "react";
import { Dimensions, StyleSheet, Alert } from "react-native";
import { Content, Form } from "native-base";
import colors from "../../../styles/colors";
import LinearGradient from "react-native-linear-gradient";
import MyInput from "../../../components/Input";
import MyButton from "../../../components/button";
import { Formik } from "formik";
import * as Yup from "yup";
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
        validationSchema={Yup.object().shape({
          phoneNumber: Yup.number()
            .required("Bạn cần nhập số điện thoại")
            .typeError("Số điện thoại không đúng định dạng"),
          fullName: Yup.string().required("Bạn cần nhập họ tên"),
          password: Yup.string()
            .required("Bạn cần nhập mật khẩu")
            .min(8),
          confirmPassword: Yup.string().oneOf(
            [Yup.ref("password", null)],
            "Mật khẩu không khớp"
          )
        })}
        render={({
          values,
          handleSubmit,
          isSubmitting,
          setFieldValue,
          errors,
          touched,
          setFieldTouched
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
                    error={touched.phoneNumber && errors.phoneNumber}
                    onTouch={setFieldTouched}
                  />
                  <MyInput
                    placeholder="họ tên"
                    name="fullName"
                    values={values.fullName}
                    onChange={setFieldValue}
                    error={touched.fullName && errors.fullName}
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
                  <MyInput
                    placeholder="xác nhận mật khẩu"
                    secureTextEntry={true}
                    name="confirmPassword"
                    values={values.confirmPassword}
                    onChange={setFieldValue}
                    error={touched.confirmPassword && errors.confirmPassword}
                    onTouch={setFieldTouched}
                  />
                  <MyButton
                    title="ĐĂNG KÝ"
                    onPress={handleSubmit}
                    isLoading={isSubmitting}
                  />
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
