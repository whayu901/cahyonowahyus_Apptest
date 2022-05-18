import * as Yup from "yup";

// validation update data user
export const validationUpdateContact = Yup.object().shape({
  name: Yup.string().required("Please enter name"),
  email: Yup.string()
    .email("Please enter email correctly")
    .required("Please enter email"),
  born: Yup.string().required("Please enter birthdate"),
  bio: Yup.string().required("Please enter biography"),
});
