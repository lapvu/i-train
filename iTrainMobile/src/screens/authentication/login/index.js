import React from "react";
import { Content, Form, Text } from "native-base";
import colors from "../../../styles/colors";
import { Dimensions, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import MyInput from "../../../components/Input";
import { Formik } from "formik";
import firebase from "react-native-firebase";
import MyButton from "../../../components/button";
import * as Yup from "yup";
class LoginScreen extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: colors.gradient[0],
      elevation: 0
    },
    headerTintColor: colors.white
  };

  _handleSubmit = (values, actions) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then(res => {
        actions.setSubmitting(false);
        this.props.navigation.navigate("Main");
      })
      .catch(e => {
        actions.setSubmitting(false);
        actions.setErrors({
          loginFailed: "Email hoặc mật khẩu không chính xác !"
        });
      });
  };
  render() {
    const { width } = Dimensions.get("window");
    return (
      <Formik
        initialValues={{
          email: "",
          password: ""
        }}
        onSubmit={this._handleSubmit}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("Email không đúng định dạng")
            .required("Bạn cần nhập email"),
          password: Yup.string()
            .required("Bạn cần nhập mật khẩu")
            .min(8)
        })}
        render={({
          errors,
          values,
          setFieldValue,
          setFieldTouched,
          touched,
          handleSubmit,
          isSubmitting
        }) => (
          <LinearGradient colors={colors.gradient} style={styles.container}>
            <Content contentContainerStyle={styles.content}>
              <Form
                style={{
                  width: width - 50
                }}
              >
                {errors.loginFailed && (
                  <Text style={styles.error}>{errors.loginFailed}</Text>
                )}
                <MyInput
                  placeholder="email"
                  name="email"
                  values={values.email}
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
                <MyButton
                  title="ĐĂNG NHẬP"
                  onPress={handleSubmit}
                  isLoading={isSubmitting}
                />
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
  },
  error: {
    color: "red",
    paddingHorizontal: 20,
    marginBottom: 10
  }
});
export default LoginScreen;
