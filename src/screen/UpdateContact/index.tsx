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
import dayjs from "dayjs";
import { Formik } from "formik";
import Icon from "react-native-vector-icons/Entypo";
import { launchImageLibrary } from "react-native-image-picker";

import { TextInput, DatePicker } from "../../component/atom";
import { ModalSuccess, HeaderGeneral } from "../../component/molecul";
import { COLORS, TYPHOGRAPHY } from "../../config";
import { updateContact } from "../../redux/actions";
import { Reducers } from "../../redux/types";
import { validationUpdateContact } from "../../helpers";
import { RFPercentage } from "../../utils";

import styles from "./styles";

interface IContactForm {
  name: string;
  bio: string;
  email: string;
  born: string;
}

const UpdateContact = () => {
  const dispatch = useDispatch();
  const route: any = useRoute();
  const navigation = useNavigation();
  const contactState = useSelector((state: Reducers) => state.contact);

  const [form, setForm] = React.useState<IContactForm>({
    bio: "",
    name: "",
    email: "",
    born: "",
  });
  const [isDatePickerVisible, setDatePickerVisibility] =
    React.useState<boolean>(false);
  const [visibleModalSuccess, setVisibleModalSuccess] =
    React.useState<boolean>(false);
  const [photo, setPhoto] = React.useState<any>(null);

  React.useEffect(() => {
    setForm((prevState: any) => ({
      ...prevState,
      bio: route?.params?.data?.bio,
      name: route?.params?.data?.name,
      email: route?.params?.data?.email,
      born: dayjs(route?.params?.data?.born).toDate(),
    }));
    setPhoto(route?.params?.data?.photo);
  }, [
    route?.params?.data?.bio,
    route?.params?.data?.born,
    route?.params?.data?.email,
    route?.params?.data?.name,
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

      dispatch<any>(
        updateContact({
          data: value,
          callback: () => {
            setVisibleModalSuccess(true);
          },
        }),
      );
    },
    [dispatch, photo],
  );

  const _hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

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
            setFieldValue,
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
                    label="FullName"
                    value={values?.name}
                    placeholder="Insert name"
                    isError={touched.name && errors.name}
                    onBlur={() => setFieldTouched("name")}
                    onChangeText={handleChange("name")}
                  />
                  {touched.name && errors.name && (
                    <Text
                      style={{
                        ...TYPHOGRAPHY.GothamLight,
                        color: COLORS.red.lighter,
                        marginTop: 5,
                      }}>
                      {errors.name}
                    </Text>
                  )}
                </View>

                <View style={{ marginVertical: 5 }}>
                  <TextInput
                    label="Email"
                    value={values?.email}
                    placeholder="Insert email"
                    isError={touched.email && errors.email}
                    onBlur={() => setFieldTouched("email")}
                    onChangeText={handleChange("email")}
                  />
                  {touched.email && errors.email && (
                    <Text
                      style={{
                        ...TYPHOGRAPHY.GothamLight,
                        color: COLORS.red.lighter,
                        marginTop: 5,
                      }}>
                      {errors.email}
                    </Text>
                  )}
                </View>

                <View style={{ marginVertical: 5 }}>
                  <DatePicker
                    label={values?.born}
                    handleConfirm={(value: any) => {
                      setFieldValue("born", value);
                      _hideDatePicker();
                    }}
                    isError={Boolean(touched.born && errors.born)}
                    onBlur={() => setFieldTouched("born")}
                    isDatePickerVisible={isDatePickerVisible}
                    mode="date"
                    hideDatePicker={_hideDatePicker}
                    openDatePicker={() => setDatePickerVisibility(true)}
                  />
                  {Boolean(touched.born && errors.born) && (
                    <Text
                      style={{
                        ...TYPHOGRAPHY.GothamLight,
                        color: COLORS.red.lighter,
                        marginTop: 5,
                      }}>
                      {errors.born}
                    </Text>
                  )}
                </View>

                <View style={{ marginVertical: 5 }}>
                  <TextInput
                    label="Bio"
                    value={values?.bio}
                    placeholder="Insert bio"
                    multiline
                    height={120}
                    isError={touched.bio && errors.bio}
                    onBlur={() => setFieldTouched("bio")}
                    onChangeText={handleChange("bio")}
                  />
                  {Boolean(touched.bio && errors.bio) && (
                    <Text
                      style={{
                        ...TYPHOGRAPHY.GothamLight,
                        color: COLORS.red.lighter,
                        marginTop: 5,
                      }}>
                      {errors.bio}
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
