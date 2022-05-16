import React from "react";
import { View, SafeAreaView, Text } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Button } from "react-native-paper";

import { TextInput } from "../../component/atom";
import { COLORS } from "../../config";

const AddContact = () => {
  return (
    <SafeAreaView style={{ marginHorizontal: 10 }}>
      <KeyboardAwareScrollView
        enableOnAndroid={true}
        keyboardShouldPersistTaps={"handled"}
        enableResetScrollToCoords={false}>
        <View style={{ marginVertical: 5 }}>
          <TextInput label="FullName" placeholder="Insert name" />
        </View>
        <View style={{ marginVertical: 5 }}>
          <TextInput label="Email" placeholder="Insert email" />
        </View>
        <View style={{ marginVertical: 5 }}>
          <TextInput
            label="Bio"
            placeholder="Insert bio"
            multiline
            height={120}
          />
        </View>
      </KeyboardAwareScrollView>

      <View>
        <Button
          mode="contained"
          style={{ marginVertical: 10 }}
          color={COLORS.green.main}>
          <Text style={{ color: COLORS.white.main }}>Add Contact</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default AddContact;
