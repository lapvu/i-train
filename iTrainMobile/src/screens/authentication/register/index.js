import React from "react";
import { Dimensions, StyleSheet, Alert } from "react-native";
import { Content, Form } from "native-base";
import colors from "../../../styles/colors";
import LinearGradient from "react-native-linear-gradient";
import MyInput from "../../../components/Input";
import MyButton from "../../../components/button";
import { Formik } from "formik";
import * as Yup from "yup";
import firebase from "react-native-firebase";
class RegisterScreen extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: colors.gradient[0],
      elevation: 0
    },
    headerTintColor: colors.white
  };
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      email: "",
      phoneNumber: "",
      fullName: "",
      password: "",
      confirmPassword: ""
    };
  }
  _handleSubmitOne = (values, actions) => {
    this.setState({
      email: values.email,
      password: values.password,
      confirmPassword: values.confirmPassword,
      step: 2
    });
    console.log(this.state);
    // firebase
    //   .auth()
    //   .createUserWithEmailAndPassword(values.email, values.password)
    //   .then(res => {
    //     actions.setSubmitting(false);
    //   })
    //   .catch(e => {
    //     console.log(e);
    //   });
  };
  _handleSubmitTwo = (values, actions) => {};

  render() {
    const { width } = Dimensions.get("window");
    return (
      <LinearGradient colors={colors.gradient} style={styles.container}>
        <Content contentContainerStyle={styles.content}>
          <Form style={{ width: width - 50 }}>
            {this.state.step === 1 && (
              <Formik
                enableReinitialize={true}
                initialValues={{
                  email: this.state.email,
                  password: this.state.password,
                  confirmPassword: this.state.confirmPassword
                }}
                onSubmit={this._handleSubmitOne}
                validationSchema={Yup.object().shape({
                  email: Yup.string()
                    .email("Email không đúng định dạng")
                    .required("Bạn cần nhập email"),
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
                  errors,
                  setFieldValue,
                  setFieldTouched,
                  touched,
                  isSubmitting,
                  handleSubmit
                }) => (
                  <React.Fragment>
                    <MyInput
                      placeholder="email"
                      name="email"
                      values={this.state.email}
                      onChange={setFieldValue}
                      error={touched.email && errors.email}
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
                      title="TIẾP THEO"
                      onPress={handleSubmit}
                      isLoading={isSubmitting}
                    />
                  </React.Fragment>
                )}
              />
            )}
            {this.state.step === 2 && (
              <Formik
                enableReinitialize={true}
                initialValues={{
                  phoneNumber: this.state.phoneNumber,
                  fullName: this.state.fullName
                }}
                onSubmit={this._handleSubmitTwo}
                validationSchema={Yup.object().shape({
                  phoneNumber: Yup.number()
                    .required("Bạn cần nhập số điện thoại")
                    .typeError("Số điện thoại không đúng định dạng"),
                  fullName: Yup.string().required("Bạn cần nhập họ tên")
                })}
                render={({
                  values,
                  errors,
                  setFieldValue,
                  setFieldTouched,
                  touched,
                  isSubmitting,
                  handleSubmit
                }) => (
                  <React.Fragment>
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
                    <MyButton
                      title="ĐĂNG KÝ"
                      onPress={handleSubmit}
                      isLoading={isSubmitting}
                      style={{ marginBottom: 10 }}
                    />
                    <MyButton
                      title="QUAY LẠi"
                      onPress={() => this.setState({ step: 1 })}
                    />
                  </React.Fragment>
                )}
              />
            )}
          </Form>
        </Content>
      </LinearGradient>
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
