import * as yup from "yup";

export const adminSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(6).max(32).required(),
  role: yup.string().required("Role is required"),
  contactNo: yup.string().required("Contact Number is required"),
  address: yup.string().required("Address is required"),
});
export const customerSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(6).max(32).required(),
  role: yup.string().required("Role is required"),
  contactNo: yup.string().required("Contact Number is required"),
  address: yup.string().required("Address is required"),
});


