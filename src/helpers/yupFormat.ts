import * as Yup from "yup";

// validation update data user
export const validationUpdateContact = Yup.object().shape({
  firstName: Yup.string().required("Please enter name"),
  lastName: Yup.string().required("Please enter name"),
  age: Yup.number().required("Please enter Age").max(100),
});
