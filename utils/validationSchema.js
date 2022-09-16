import moment from "moment/moment";
import * as yup from "yup";
export const validationSchema = yup.object({
  name: yup
    .string()
    .required("Please enter a name")
    .min(3, "Name must be at least 3 characters long")
    .max(16, "Name can't be more than 16 characters long"),
  email: yup
    .string()
    .required("Please enter a name")
    .email("Please enter a valid email address"),
  phone: yup
    .string()
    .required("Please enter a name")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Please enter a valid phone number"
    )
    .min(11, "Phone number must be at least 11 characters long")
    .max(11, "Phone number can't be more than 11 characters long"),
  dob: yup
    .string()
    .required("DOB is Required")
    .test("DOB", "Your age must be at least 18 years old", (value) => {
      return moment().diff(moment(value), "years") >= 18;
    }),
  address: yup
    .string()
    .required("Please enter your address")
    .max(188, "Address can't be more than 180 characters long"),
  password: yup
    .string()
    .required("Please enter a name")
    .min(6, "Password must be at least 6 characters long")
    .max(16, "Password can't be more than 16 characters long"),
  confirmPassword: yup
    .string()
    .oneOf(
      [yup.ref("password"), null],
      "Confirm password must be matched with the password"
    ),
});
