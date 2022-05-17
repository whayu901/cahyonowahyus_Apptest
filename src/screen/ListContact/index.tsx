import React from "react";
import { View, SafeAreaView, Text, Image, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Button, FAB } from "react-native-paper";
import Modal from "react-native-modal";
import { useNavigation } from "@react-navigation/native";
import dayjs from "dayjs";

import { Reducers } from "../../redux/types";
import { getContact, deleteContact } from "../../redux/actions";
import { CardList, ModalConfirmation } from "../../component/molecul";
import { LoadingList } from "../../component/atom";
import { COLORS, TYPHOGRAPHY } from "../../config";
import { RFPercentage } from "../../utils";

import styles from "./styles";

const ListContact = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const contactState = useSelector((state: Reducers) => state.contact);

  const [isModalDetail, setModalDetail] = React.useState<boolean>(false);
  const [dataSelected, setDataSelected] = React.useState<any>(null);
  const [isModalConfirmation, setModalConfirmation] =
    React.useState<boolean>(false);

  React.useEffect(() => {
    if (contactState.listContact.data.length === 0) {
      dispatch<any>(getContact());
    }
  }, [dispatch, contactState.listContact.data.length]);

  const _renderItem = React.useCallback(
    ({ item }: { item: any }) => (
      <View
        style={{
          marginVertical: RFPercentage(1.5),
          marginHorizontal: 10,
        }}>
        <CardList
          data={item}
          onPress={() => {
            setDataSelected(item);
            setModalDetail(true);
          }}
        />
      </View>
    ),
    [],
  );

  const _noSurvey = React.useCallback(
    () => (
      <View
        style={{
          marginTop: RFPercentage(4),
        }}>
        <Text
          style={{
            ...TYPHOGRAPHY.GothamRegularBold,
            textAlign: "center",
          }}>
          User Not Found
        </Text>
      </View>
    ),
    [],
  );

  const _deleteContact = React.useCallback(() => {
    dispatch<any>(
      deleteContact({
        email: dataSelected?.email,
        callback: () => {
          setModalConfirmation(false);
          setModalDetail(false);
        },
      }),
    );
  }, [dataSelected?.email, dispatch]);

  return (
    <SafeAreaView>
      <FAB
        icon="plus"
        style={styles.fab}
        label="Add Contact"
        onPress={() => navigation.navigate("AddContact" as never)}
      />

      {contactState?.listContact?.isLoading ? (
        <View
          style={{
            marginVertical: RFPercentage(2),
            marginHorizontal: 10,
          }}>
          <LoadingList />
        </View>
      ) : (
        <FlatList
          data={contactState?.listContact?.data}
          renderItem={_renderItem}
          ListEmptyComponent={_noSurvey}
          keyExtractor={(item, index) => String(index)}
        />
      )}

      {/* Modal Confirmation delete */}
      <ModalConfirmation
        isVisible={isModalConfirmation}
        typeButton="contained"
        message={`Are you sure delete ${dataSelected?.name}`}
        textButton="Delete"
        textButtonNegatif="Cancel"
        onDismis={_deleteContact}
        isConfirmation
        onDismissNegatif={() => setModalConfirmation(false)}
      />

      {/* Modal Detail */}
      <Modal
        isVisible={isModalDetail}
        animationIn="fadeInUp"
        useNativeDriver={true}
        onBackdropPress={() => setModalDetail(false)}
        onBackButtonPress={() => setModalDetail(false)}
        animationOut="slideOutDown"
        style={{
          justifyContent: "flex-end",
          margin: 0,
        }}>
        <View
          style={{
            backgroundColor: COLORS.blue.main,
            borderTopEndRadius: RFPercentage(3),
            borderTopStartRadius: RFPercentage(3),
            padding: 10,
          }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View>
              <Image
                style={styles.imageProfile}
                source={{
                  uri: dataSelected?.photo,
                }}
                resizeMode="contain"
              />
            </View>
            <View style={{ marginLeft: 15 }}>
              <Text
                style={{
                  ...TYPHOGRAPHY.GothamLargeBold,
                  color: COLORS.white.main,
                }}>
                {dataSelected?.name}
              </Text>
              <Text
                style={{
                  ...TYPHOGRAPHY.GothamLight,
                  color: COLORS.white.main,
                }}>
                {dayjs(dataSelected?.born).format("D MMM YYYY")}
              </Text>
              <Text
                style={{
                  ...TYPHOGRAPHY.GothamLight,
                  color: COLORS.white.main,
                }}>
                {dataSelected?.email}
              </Text>
            </View>
          </View>

          <View style={{ marginVertical: 10 }}>
            <Text
              style={{
                ...TYPHOGRAPHY.GothamSemiLargeBold,
                color: COLORS.white.main,
              }}>
              Biography
            </Text>
            <Text
              style={{
                ...TYPHOGRAPHY.GothamRegular,
                color: COLORS.white.main,
              }}>
              {dataSelected?.bio}
            </Text>
          </View>

          <View>
            <Button
              mode="text"
              color={COLORS.white.main}
              onPress={() => {
                navigation.navigate(
                  "UpdateContact" as never,
                  {
                    data: dataSelected,
                  } as never,
                );
                setModalDetail(false);
              }}>
              Edit Contact
            </Button>
            <Button
              mode="contained"
              style={{ marginVertical: 10 }}
              onPress={() => setModalConfirmation(true)}
              color={COLORS.red.main}>
              Delete Contact
            </Button>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default ListContact;
