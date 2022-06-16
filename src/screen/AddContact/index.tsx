import React from "react";
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Button } from "react-native-paper";
import { useNavigation, StackActions } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import Icon from "react-native-vector-icons/Entypo";
import { launchImageLibrary } from "react-native-image-picker";

import { TextInput } from "../../component/atom";
import { ModalSuccess, HeaderGeneral } from "../../component/molecul";
import { COLORS, TYPHOGRAPHY } from "../../config";
import { RFPercentage } from "../../utils";
import { addContact } from "../../redux/actions";
import { Reducers } from "../../redux/types";
import { validationUpdateContact } from "../../helpers";

import styles from "./styles";

interface IContactForm {
  lastName: string;
  firstName: string;
  age: string;
  photo?: any;
}

const AddContact = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const contactState = useSelector((state: Reducers) => state.contact);

  const [form] = React.useState<IContactForm>({
    lastName: "",
    firstName: "",
    age: "",
    photo: "",
  });

  const [visibleModalSuccess, setVisibleModalSuccess] =
    React.useState<boolean>(false);
  const [photo, setPhoto] = React.useState<any>(null);
  const [emptyPhoto, setEmptyPhoto] = React.useState<string>("");

  const _addContact = React.useCallback(
    (value: any) => {
      if (photo === null) {
        setEmptyPhoto("Please add photo");
      } else {
        setEmptyPhoto("");
        value.photo = photo;
        value.age = Number(value.age);

        dispatch<any>(
          addContact({
            data: value,
            callback: () => {
              setVisibleModalSuccess(true);
            },
          }),
        );
      }
    },
    [dispatch, photo],
  );

  const _dismissModalSuccess = () => {
    setVisibleModalSuccess(false);
    navigation.dispatch({
      ...StackActions.popToTop(),
    });
  };

  const _openGallery = React.useCallback(async () => {
    const options: any = {
      mediaType: "photo",
      quality: 0.8,
      maxWidth: 700,
      maxHeight: 1024,
      includeBase64: true,
    };
    await launchImageLibrary(options, (value: any) => {
      setPhoto(value.assets[0].uri);
    });
  }, []);

  return (
    <SafeAreaView style={{ marginHorizontal: 10, flex: 1 }}>
      <HeaderGeneral
        title={"Add Contact"}
        onPress={() => navigation.goBack()}
      />
      <ScrollView>
        <Formik
          initialValues={form}
          validationSchema={validationUpdateContact}
          onSubmit={(e: any) => _addContact(e)}
          enableReinitialize>
          {({
            values,
            errors,
            setFieldTouched,
            handleChange,
            touched,
            handleSubmit,
          }) => (
            <>
              <KeyboardAwareScrollView
                enableOnAndroid={true}
                keyboardShouldPersistTaps={"handled"}
                enableResetScrollToCoords={false}>
                <View>
                  <TouchableOpacity
                    style={{ alignSelf: "center" }}
                    onPress={_openGallery}>
                    <Image
                      style={styles.imageProfile}
                      source={{
                        uri:
                          photo !== null
                            ? photo
                            : // eslint-disable-next-line max-len
                              "https://images.pexels.com/photos/62693/pexels-photo-62693.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
                      }}
                    />
                    <View style={{ position: "absolute", bottom: 0, right: 0 }}>
                      <Icon name="camera" size={RFPercentage(4)} />
                    </View>
                  </TouchableOpacity>
                </View>

                <View style={{ marginVertical: 5 }}>
                  <TextInput
                    label="FirstName"
                    value={values?.firstName}
                    placeholder="Insert name"
                    isError={touched.firstName && errors.firstName}
                    onBlur={() => setFieldTouched("firstName")}
                    onChangeText={handleChange("firstName")}
                  />
                  {touched.firstName && errors.firstName && (
                    <Text
                      style={{
                        ...TYPHOGRAPHY.GothamLight,
                        color: COLORS.red.lighter,
                        marginTop: 5,
                      }}>
                      {errors.firstName}
                    </Text>
                  )}
                </View>

                <View style={{ marginVertical: 5 }}>
                  <TextInput
                    label="LastName"
                    value={values?.lastName}
                    placeholder="Insert name"
                    isError={touched.lastName && errors.lastName}
                    onBlur={() => setFieldTouched("lastName")}
                    onChangeText={handleChange("lastName")}
                  />
                  {touched.lastName && errors.lastName && (
                    <Text
                      style={{
                        ...TYPHOGRAPHY.GothamLight,
                        color: COLORS.red.lighter,
                        marginTop: 5,
                      }}>
                      {errors.lastName}
                    </Text>
                  )}
                </View>

                <View style={{ marginVertical: 5 }}>
                  <TextInput
                    label="Age"
                    value={String(values?.age)}
                    keyboardType="number-pad"
                    placeholder="Insert Age"
                    isError={touched.age && errors.age}
                    onBlur={() => setFieldTouched("age")}
                    onChangeText={handleChange("age")}
                  />
                  {touched.age && errors.age && (
                    <Text
                      style={{
                        ...TYPHOGRAPHY.GothamLight,
                        color: COLORS.red.lighter,
                        marginTop: 5,
                      }}>
                      {errors.age}
                    </Text>
                  )}
                </View>
              </KeyboardAwareScrollView>

              {emptyPhoto !== "" && (
                <Text
                  style={{
                    ...TYPHOGRAPHY.GothamRegular,
                    color: COLORS.red.main,
                    textAlign: "center",
                  }}>
                  {emptyPhoto}
                </Text>
              )}

              <View>
                <Button
                  mode="contained"
                  loading={contactState?.addContact?.isLoading}
                  onPress={handleSubmit}
                  style={{ marginVertical: 10 }}
                  color={COLORS.green.main}>
                  <Text style={{ color: COLORS.white.main }}>Add Contact</Text>
                </Button>
              </View>
            </>
          )}
        </Formik>
      </ScrollView>

      {/* Modal Success Update profile */}
      <View>
        <ModalSuccess
          isVisible={visibleModalSuccess}
          message="Success Update Your Data"
          textButton="Back To List"
          onDismis={_dismissModalSuccess}
        />
      </View>
    </SafeAreaView>
  );
};

export default AddContact;
