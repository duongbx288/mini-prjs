import { Box, Button, TextField, useMediaQuery } from "@mui/material";
import * as yup from "yup";
import { Formik, FormikProps, FormikValues, withFormik } from "formik";
import Header from "../../components/Header";
import { addData, createNewUser } from "../../config/firebaseDb";
import { useContext } from "react";
import { FirebaseAuthContext } from "../../context/AuthContext";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  contact: string;
  address: string;
  password: string;
}

interface OtherProps {
  message: string;
  createUser: (email: string, password: string) => void;
  email: string;
  password: string;
}

const userSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("Invalid email").required("required"),
  contact: yup.string().required("required"),
  address: yup.string().required("required"),
  password: yup.string().required("required"),
});

const InnerForm = (props: OtherProps & FormikProps<FormValues>  ) => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    props;
  return (
    <form onSubmit={handleSubmit}>
      <Box
        display="grid"
        gap="30px"
        gridTemplateColumns="repeat(4, minmax(0, 1fr))"
        sx={{
          "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
        }}
      >
        <TextField
          fullWidth
          variant="filled"
          type="text"
          label="First Name"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.firstName}
          name="firstName"
          error={!!touched.firstName && !!errors.firstName}
          helperText={touched.firstName && errors.firstName}
          sx={{ gridColumn: "span 2" }}
        />
        <TextField
          fullWidth
          variant="filled"
          type="text"
          label="Last Name"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.lastName}
          name="lastName"
          error={!!touched.lastName && !!errors.lastName}
          helperText={touched.lastName && errors.lastName}
          sx={{ gridColumn: "span 2" }}
        />
        <TextField
          fullWidth
          variant="filled"
          type="text"
          label="Email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.email}
          name="email"
          error={!!touched.email && !!errors.email}
          helperText={touched.email && errors.email}
          sx={{ gridColumn: "span 2" }}
        />
        <TextField
          fullWidth
          variant="filled"
          type="password"
          label="Password"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.password}
          name="password"
          error={!!touched.password && !!errors.password}
          helperText={touched.password && errors.password}
          sx={{ gridColumn: "span 2" }}
        />
        <TextField
          fullWidth
          variant="filled"
          type="text"
          label="Contact Number"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.contact}
          name="contact"
          error={!!touched.contact && !!errors.contact}
          helperText={touched.contact && errors.contact}
          sx={{ gridColumn: "span 4" }}
        />
        <TextField
          fullWidth
          variant="filled"
          type="text"
          label="Address"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.address}
          name="address"
          error={!!touched.address && !!errors.address}
          helperText={touched.address && errors.address}
          sx={{ gridColumn: "span 4" }}
        />
      </Box>
      <Box display="flex" justifyContent="end" mt="20px">
        <Button type="submit" color="secondary" variant="contained">Create new User</Button>
      </Box>
    </form>
  );
};

interface UserFormProps {
  firstName: string;
  lastName: string;
  email: string;
  contact: string;
  address: string;
  password: string;
}

const CustomForm = withFormik<UserFormProps, FormValues>({
  validationSchema: userSchema,
  handleSubmit: (values) => {
    createNewUser(values.email, values.password);
    addData(values, "cities");
  },
})(InnerForm);

const Form = () => {


  return (
    <Box m="20px">
      <Header title="ADD USER" subtitle="Create a new user profile" />
      <CustomForm
        firstName=""
        lastName=""
        email=""
        address=""
        contact=""
        password=""
      />
    </Box>
  );
};

export default Form;
