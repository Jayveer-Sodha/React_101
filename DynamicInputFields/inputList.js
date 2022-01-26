// importing components for inputField
import { TextField } from "@mui/material";
// import MobileDatePicker from "../DateRangePicker/MobileDatePicker";

// creating list of input fields for Apply Leave form
export const AddLeaveFormInputs = [
  {
    name: "leave_type",
    label: "Leave Type",
    type: "select",
    props: {
      select: true,
    },
    component: TextField,
    selectMenu: [
      { value: "casual_leave", label: "Casual Leave" },
      { value: "maternity_leave", label: "Maternity Leave" },
      { value: "medical_leave", label: "Medical Leave" },
      { value: "loss_of_pay", label: "Loss of Pay Leave" },
    ],
  },
  {
    name: "leave_day_type",
    label: "Leave Day Type",
    type: "select",
    props: {
      select: true,
    },
    component: TextField,
    selectMenu: [
      { value: "full", label: "Full" },
      { value: "half", label: "Half" },
    ],
  },
  {
    name: "leave_reason",
    label: "Leave Reason ",
    type: "text",
    component: TextField,
    props: {
      multiline: true,
    },
  },
  {
    name: "date",
    label: "Date",
    props: {
      isMobile: true,
      disablePast: true,
    },
    // component: MobileDatePicker, this mobileDateRangePicker from material ui with some customization
  },
  {
    name: "number_of_days",
    label: "Leave Number Day",
    component: TextField,
    props: {
      disabled: true,
    },
  },
];

// # this file will include data for all the inputs.
// # here we will create array of inputs for one form.
// # every object in array represent input field of form.
// # we are using TextField Component from material-ui for normal input with type of text.
// # for form handling we have used Formik and for input field we have used Field Component from Formik.
// # so in this object you have to pass some mandatory values for TextField , which are as follows
// # (1) name : this will identify the name of input to Field component so it can manage the input state.
// # (2) label : as we know have used TextField so this value will provide label to your input field.
// # (3) props : here in this object you can pass props you want to pass into your Component.
// # (4) component : here you have to provide the component you want to show as input field in your form for that particular input field.
// # we have customized this form in a way that if you want to use SELECT as input field then you just have to pass select as props and then selectMenu array with object includes the options with value and label.

//   Good Luck!
