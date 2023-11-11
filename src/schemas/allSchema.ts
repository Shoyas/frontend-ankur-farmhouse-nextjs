import * as yup from "yup";

export const adminSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(6).max(32).required(),
  role: yup.string().required("Role is required"),
  contactNo: yup.string().required("Contact Number is required"),
  address: yup.string().required("Address is required"),
  profileImg: yup.string().optional(),
});
export const customerSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(6).max(32).required(),
  role: yup.string().required("Role is required"),
  contactNo: yup.string().required("Contact Number is required"),
  address: yup.string().required("Address is required"),
});
export const profileSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  role: yup.string().required("Role is required"),
  contactNo: yup.string().required("Contact Number is required"),
  address: yup.string().required("Address is required"),
});
export const changePasswordSchema = yup.object().shape({
  oldPassword: yup.string().required("Old Password is required"),
  newPassword: yup.string().min(6).max(32).required(),
});
export const blogSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  blog: yup.string().required("Blog is required"),
  // userId: yup.string().required("User ID is required"),
  // contentImg: yup.string().optional(),
});
export const serviceSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  price: yup.number().required("Price is required"),
  unit: yup.string().required("Unit is required"),
  quantity: yup.number().required("Quantity is required"),
  serviceImg: yup.string().optional(),
  categoryId: yup.string().required("Category is required"),
});
export const upcomingServiceSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  price: yup.number().required("Price is required"),
  unit: yup.string().required("Unit is required"),
  quantity: yup.number().required("Quantity is required"),
  serviceImg: yup.string().optional(),
  categoryId: yup.string().required("Category is required"),
  startDate: yup.date().required("Start Date is required"),
  startTime: yup.string().required("Start Time is required"),
  endDate: yup.date().required("End Date is required"),
  endTime: yup.string().required("End Time is required"),
});
export const categorySchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  categoryImg: yup.string().optional(),
});
