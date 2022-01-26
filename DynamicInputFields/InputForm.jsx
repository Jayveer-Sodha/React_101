import React from "react";
import { Box, MenuItem, Paper, Stack } from "@mui/material";
import { Field, Form, Formik } from "formik";
import * as yup from "yup";
import { makeStyles } from "@mui/styles";
import { AddLeaveFormInputs } from "./inputData";
import { LoadingButton } from "@mui/lab";

const useStyle = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(5),
    width: "500px",
  },
  formControl: {
    width: "100%",
    marginBottom: theme.spacing(3),
  },
}));

const ApplyLeave = () => {
  const classes = useStyle();

  let initialValues = {};
  initialValues.leave_type = "";
  initialValues.leave_reason = "";
  initialValues.form_date = null;
  initialValues.to_date = null;
  initialValues.status = "";
  initialValues.leave_day_type = "";
  initialValues.number_of_days = "";

  return (
    <Paper className={classes.paper}>
      <Box>
        <Formik
          initialValues={initialValues}
          validationSchema={addLeaveValidationSchema}
          onSubmit={(values, { resetForm }) => {
            handleOnSubmit(values, resetForm);
          }}
        >
          {(props) => {
            return (
              <Form>
                <Stack spacing={3}>
                  {AddLeaveFormInputs.map((input, index) => {
                    return (
                      <Field
                        key={index}
                        form={props}
                        error={Boolean(
                          props?.touched[input.name] &&
                            props?.errors[input.name]
                        )}
                        helperText={
                          props?.touched[input.name] &&
                          props?.errors[input.name]
                        }
                        as={input.component}
                        type={input.type}
                        name={input.name}
                        label={input.label}
                        fullWidth
                        variant="filled"
                        {...input.props}
                      >
                        {input.props.select &&
                          input.selectMenu.map((item, index) => {
                            return (
                              <MenuItem key={index} value={item.value}>
                                {item.label}
                              </MenuItem>
                            );
                          })}
                      </Field>
                    );
                  })}
                  <LoadingButton
                    color="primary"
                    loading={isLoading}
                    variant="contained"
                    fullWidth
                    type="submit"
                  >
                    Add Leave
                  </LoadingButton>
                </Stack>
              </Form>
            );
          }}
        </Formik>
      </Box>
    </Paper>
  );
};

export { ApplyLeave };

// handle onSubmit for addLeave
var handleOnSubmit = async (values, resetForm) => {
  console.log(values);
  resetForm();
};

// validation schema for addLeave form
var addLeaveValidationSchema = yup.object({
  leave_type: yup.string().required("Must select leave type"),
  leave_day_type: yup.string().required("Must select leave day type"),
  leave_reason: yup.string().required("Please enter reason for leave"),
  from_date: yup.date().nullable().required("Please enter From date"),
  to_date: yup.date().nullable().required("Please enter To date"),
});

// # we will map the data we import from inputList.
// # you can access all the values and functionality of formik form in your custom component by form props