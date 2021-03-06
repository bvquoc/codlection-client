import { setScreen } from '../index.js';
import { Login } from './login.js';
import { SignUp } from './sign-up.js';

class Header {
  $container = document.createElement('div');

  $title = document.createElement('h1');
  $btnLogin = document.createElement('button');
  $btnSignUp = document.createElement('button');

  constructor(headerTxt) {
    this.$container.classList.add('d-flex', 'justify-content-between', 'align-items-center', 'px-4', 'header');

    this.$btnLogin.textContent = 'Login';
    this.$btnLogin.addEventListener('click', this.handleBtnLogin);
    this.$btnLogin.classList.add('btn', 'btn-primary', 'mx-2');
    this.$btnSignUp.textContent = 'Sign Up';
    this.$btnSignUp.addEventListener('click', this.handleBtnSignUp);
    this.$btnSignUp.classList.add('btn', 'btn-secondary');

    this.$container.appendChild(this.$title);
    const $div = document.createElement('div');
    if (firebase.auth().currentUser) {
      if (!headerTxt) this.$title.textContent = `Welcome ${firebase.auth().currentUser.displayName || ''}`;
      else this.$title.textContent = headerTxt;
      // $div.appendChild(this.$btnLogout);
    } else {
      this.$title.textContent = 'Home Page';
      $div.appendChild(this.$btnLogin);
      $div.appendChild(this.$btnSignUp);
    }

    this.$container.appendChild($div);
  }

  handleBtnLogin = () => {
    const loginScreen = new Login();
    setScreen(loginScreen.$container);
  };
  handleBtnSignUp = () => {
    const signUpScreen = new SignUp();
    setScreen(signUpScreen.$container);
  };

  setHeader = (text) => {
    this.$title.textContent = text;
  };
}
export { Header };
