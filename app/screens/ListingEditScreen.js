import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import AppForm from "../components/AppForm";
import AppFormField from "../components/AppFormField";
import AppFormPicker from "../components/AppFormPiker";
import SubmitButton from "../components/SubmitButton";

import Screen from "../components/Screen";
import CategoryPickerItem from "../components/CategoryPickerItem";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  {
    label: "Nintendo Switch",
    value: 1,
    backgroundColor: "#EC7063",
    icon: "nintendo-switch",
  },
  {
    label: "Play Station",
    value: 2,
    backgroundColor: "#5DADE2",
    icon: "sony-playstation",
  },
  {
    label: "X-box",
    value: 3,
    backgroundColor: "#7DCEA0",
    icon: "microsoft-xbox",
  },
];

function ListingEditScreen() {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormPicker
          items={categories}
          icon="gamepad-square-outline"
          name="category"
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
        />
        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;
