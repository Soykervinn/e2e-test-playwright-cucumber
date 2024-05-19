interface loginElement {
  description: string;
  locator: string;
}
const loginElements: { [key: string]: loginElement } = {
  signBttn: {
    description: "Log in button",
    locator:'#login2'
  },
  usernameBox: {
    description: "#sign-username",
    locator: '#loginusername',
  },
  passwordBox: {
    description: "",
    locator: '#loginpassword',
  },
  loginBttn: {
    description: "",
    locator: '#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary',
  },
  welcomeUser: {
    description: "",
    locator: '#nameofuser',
  },

};

export default loginElements;
