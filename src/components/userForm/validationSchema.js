import * as yup from "yup";

export const validationSchema = yup.object({
  firstName: yup
    .string("Enter your first name")
    .required("First name is required"),
  lastName: yup
    .string("Enter your last name")
    .required("Last name is required"),
  role: yup.string("Enter your role").required("Role is required"),
  email: yup
    .string("Enter your email")
    .email("Enter valid email")
    .required("Email is required"),
});
