import React from "react";
import { Dimensions, StyleSheet, AsyncStorage } from "react-native";
import { Content, Form } from "native-base";
import colors from "../../../styles/colors";
import LinearGradient from "react-native-linear-gradient";
import MyInput from "../../../components/Input";
import MyButton from "../../../components/button";
import { Formik } from "formik";
import * as Yup from "yup";
import firebase from "react-native-firebase";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
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
  render() {
    const { width } = Dimensions.get("window");
    return (
      <LinearGradient colors={colors.gradient} style={styles.container}>
        <KeyboardAwareScrollView
          resetScrollToCoords={{ x: 0, y: 0 }}
          contentContainerStyle={styles.content}
          scrollEnabled={true}
        >
          <Content contentContainerStyle={styles.content}>
            <Form style={{ width: width - 50 }}>
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
            </Form>
          </Content>
        </KeyboardAwareScrollView>
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
