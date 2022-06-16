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
import { useRoute, useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import Icon from "react-native-vector-icons/Entypo";
import { launchImageLibrary } from "react-native-image-picker";

import { TextInput } from "../../component/atom";
import { ModalSuccess, HeaderGeneral } from "../../component/molecul";
import { COLORS, TYPHOGRAPHY } from "../../config";
import { updateContact } from "../../redux/actions";
import { Reducers } from "../../redux/types";
import { validationUpdateContact } from "../../helpers";
import { RFPercentage } from "../../utils";

import styles from "./styles";

interface IContactForm {
  lastName: string;
  firstName: string;
  age: string;
  photo?: any;
}

const UpdateContact = () => {
  const dispatch = useDispatch();
  const route: any = useRoute();
  const navigation = useNavigation();
  const contactState = useSelector((state: Reducers) => state.contact);

  const [form, setForm] = React.useState<IContactForm>({
    lastName: "",
    firstName: "",
    age: "",
    photo: "",
  });

  const [visibleModalSuccess, setVisibleModalSuccess] =
    React.useState<boolean>(false);
  const [photo, setPhoto] = React.useState<any>(null);

  React.useEffect(() => {
    setForm((prevState: any) => ({
      ...prevState,
      lastName: route?.params?.data?.lastName,
      firstName: route?.params?.data?.firstName,
      age: route?.params?.data?.age,
    }));
    setPhoto(route?.params?.data?.photo);
  }, [
    route?.params?.data?.age,
    route?.params?.data?.firstName,
    route?.params?.data?.lastName,
    route?.params?.data?.photo,
  ]);

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

  const _updateContact = React.useCallback(
    (value: any) => {
      value.photo = photo;
      value.age = Number(value.age);

      dispatch<any>(
        updateContact({
          data: value,
          id: route?.params?.data?.id,
          callback: () => {
            setVisibleModalSuccess(true);
          },
        }),
      );
    },
    [dispatch, photo, route?.params?.data?.id],
  );

  const _dismissModalSuccess = () => {
    setVisibleModalSuccess(false);
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{ marginHorizontal: 10, flex: 1 }}>
      <HeaderGeneral
        title={"Detail Contact"}
        onPress={() => navigation.goBack()}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Formik
          initialValues={form}
          validationSchema={validationUpdateContact}
          onSubmit={(e: any) => _updateContact(e)}
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

              <View style={{ marginTop: 20, marginBottom: 10 }}>
                <Button
                  mode="contained"
                  loading={contactState?.updateContact?.isLoading}
                  onPress={handleSubmit}
                  color={COLORS.green.main}>
                  <Text style={{ color: COLORS.white.main }}>
                    Update Contact
                  </Text>
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

export default UpdateContact;
