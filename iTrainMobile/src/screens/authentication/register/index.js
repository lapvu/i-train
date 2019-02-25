import React from "react";
import { Dimensions, StyleSheet } from "react-native";
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
  }

  // onValueChangePicker = value => {
  //   this.setState({
  //     gender: value
  //   });
  // };
  _handleSubmit = (values, actions) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(values.email, values.password)
      .then(res => {
        return firebase
          .firestore()
          .collection("users")
          .doc(res.user.uid)
          .set({
            fullName: values.fullName
          });
      })
      .then(() => {
        return firebase
          .auth()
          .signInWithEmailAndPassword(values.email, values.password);
      })
      .catch(e => {
        if (e.code === "auth/email-already-in-use") {
          actions.setFieldError("email", "Email này đã tồn tại !");
          actions.setSubmitting(false);
        }
      });
  };
  // _handleSubmitTwo = (values, actions) => {
  //   this.setState({
  //     step: 3,
  //     fullName: values.fullName,
  //     phoneNumber: values.phoneNumber
  //   });
  // };
  // _handleSubmitThree = (values, actions) => {
  //   firebase
  //     .auth()
  //     .createUserWithEmailAndPassword(this.state.email, this.state.password)
  //     .then(res => {
  //       return firebase
  //         .firestore()
  //         .collection("users")
  //         .doc(res.user.uid)
  //         .set({
  //           fullName: values.fullName,
  //           phoneNumber: values.phoneNumber
  //         });
  //     })
  //     .then(() => {
  //       return firebase
  //         .auth()
  //         .signInWithEmailAndPassword(this.state.email, this.state.password);
  //     })
  //     .then(() => {
  //       actions.setSubmitting(false);
  //       this.props.navigation.navigate("Main");
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     });
  // };
  // _prevStep = async () => {
  //   await this.setState({
  //     step: this.state.step - 1,
  //     email: "",
  //     password: "",
  //     confirmPassword: ""
  //   });
  // };

  render() {
    const { width } = Dimensions.get("window");
    return (
      <LinearGradient colors={colors.gradient} style={styles.container}>
        <Content contentContainerStyle={styles.content}>
          <Form style={{ width: width - 50 }}>
            {/* {this.state.step === 1 && ( */}
            <Formik
              enableReinitialize={true}
              initialValues={{
                email: "",
                fullName: "",
                password: "",
                confirmPassword: ""
              }}
              onSubmit={this._handleSubmit}
              validationSchema={Yup.object().shape({
                email: Yup.string()
                  .email("Email không đúng định dạng")
                  .required("Bạn cần nhập email"),
                password: Yup.string()
                  .required("Bạn cần nhập mật khẩu")
                  .min(8, "Mật khẩu cần có 8 ký tự trở lên"),
                confirmPassword: Yup.string().oneOf(
                  [Yup.ref("password", null)],
                  "Mật khẩu không khớp"
                ),
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
                    placeholder="email"
                    name="email"
                    values={values.email}
                    onChange={setFieldValue}
                    error={touched.email && errors.email}
                    onTouch={setFieldTouched}
                  />
                  <MyInput
                    placeholder="Họ tên"
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
                </React.Fragment>
              )}
            />
            {/* )} */}
            {/* {this.state.step === 2 && (
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
                      title="TIẾP THEO"
                      onPress={handleSubmit}
                      isLoading={isSubmitting}
                      style={{ marginBottom: 10 }}
                    />
                    <MyButton
                      title="QUAY LẠi"
                      onPress={this._prevStep.bind(this)}
                    />
                  </React.Fragment>
                )}
              />
            )} */}
            {/* {this.state.step === 3 && (
              <Formik
                initialValues={{
                  dateOfBirth: this.state.dateOfBirth,
                  gender: this.state.gender
                }}
                onSubmit={this._handleSubmitThree}
                validationSchema={Yup.object().shape({
                  dateOfBirth: Yup.date()
                    .required("Bạn cần nhập số điện thoại")
                    .typeError("Số điện thoại không đúng định dạng"),
                  gender: Yup.string().required("Bạn cần nhập họ tên")
                })}
                render={({
                  values,
                  errors,
                  actions,
                  touched,
                  isSubmitting,
                  handleSubmit,
                  setFieldTouched,
                  setFieldValue
                }) => (
                  <React.Fragment>
                    <MyDatePicker
                      onDate={this.setDate.bind(this)}
                      onTouch={setFieldTouched}
                      onChange={setFieldValue}
                      name="dateOfBirth"
                      actions={actions}
                      error={touched.dateOfBirth && errors.dateOfBirth}
                    />
                    <MyPickerInput
                      error={touched.gender && errors.gender}
                      actions={actions}
                      gender={this.state.gender}
                      onValueChangePicker={this.onValueChangePicker.bind(this)}
                      onTouch={setFieldTouched}
                      onChange={setFieldValue}
                      name="gender"
                      values={this.state.gender}
                    />
                    <MyButton
                      title="ĐĂNG KÝ"
                      onPress={handleSubmit}
                      isLoading={isSubmitting}
                      style={{ marginBottom: 10 }}
                    />
                    <MyButton
                      title="QUAY LẠi"
                      onPress={this._prevStep.bind(this)}
                    />
                  </React.Fragment>
                )}
              />
            )} */}
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
