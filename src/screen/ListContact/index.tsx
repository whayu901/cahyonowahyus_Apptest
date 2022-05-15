import React from "react";
import { View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { Reducers } from "../../redux/types";
import { getContact } from "../../redux/actions";

import styles from "./styles";

const ListContact = () => {
  const dispatch = useDispatch();
  const surveyState = useSelector((state: Reducers) => state.contact);

  React.useEffect(() => {
    dispatch<any>(getContact());
  }, [dispatch]);

  return (
    <View>
      <Text>Hello world</Text>
    </View>
  );
};

export default ListContact;
