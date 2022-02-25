import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import AppForm from "../components/AppForm";
import AppFormField from "../components/AppFormField";
import AppFormPicker from "../components/AppFormPiker";
import FormImagePicker from "../components/FormImagePicker";
import SubmitButton from "../components/SubmitButton";
import listingsApi from "../api/listings";

import Screen from "../components/Screen";
import CategoryPickerItem from "../components/CategoryPickerItem";
import UploadScreen from "./UploadScreen";
import AppText from "../components/AppText";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image."),
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
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (listing, { resetForm }) => {
    setProgress(0);
    setUploadVisible(true);
    const result = await listingsApi.addListing({ ...listing }, (progress) =>
      setProgress(progress)
    );

    if (!result.ok) {
      setUploadVisible(false);
      return alert("Could not save the listing");
    }
    resetForm();
  };

  return (
    <Screen style={styles.container}>
      <AppText title="New Game" style={styles.title}>
        {"New Listing"}
      </AppText>
      <UploadScreen
        onDone={() => setUploadVisible(false)}
        progress={progress}
        visible={uploadVisible}
      />
      <AppForm
        initialValues={{
          title: "",
          console,
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormPicker
          items={categories}
          icon="gamepad-square-outline"
          name="category"
          numColumns={2}
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
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    marginLeft: 126,
  },
});
export default ListingEditScreen;
