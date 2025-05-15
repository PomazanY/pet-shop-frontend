export const fields = {
  username: {
    name: "username",
    type: "text",
    placeholder: "Name",
    rules: {
      required: "Name is required"
    }
  },

  phone: {
  name: "phone",
  type: "tel",
  inputMode: "numeric",
  placeholder: "Phone number",
  onInput: (e) => {
    e.target.value = e.target.value.replace(/[^0-9+\-()\s]/g, '');
  },
  rules: {
    required: "Phone is required",
    pattern: {
      value: /^\+?[1-9]\d{1,3}[-\s]?\(?\d{1,4}\)?[-\s]?\d{3,5}[-\s]?\d{3,5}$/,
      message: "Invalid phone number format",
    }
  }
},
  email: {

    name: "email",
    type: "text",
    placeholder: "Email",
    rules: {
      required: "Email required",
      pattern: {
        message: "Email must contain @",
        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      },
    },
  },

};
