import React, { Component } from 'react';
import { ModalBackground, Modal, ExplainTitle, ExplainGeneral } from '../style';
import { FacebookLoginBtn } from './style';

interface LoginProps { }

interface LoginState { }

export default class Login extends Component<LoginProps, LoginState> {
  constructor (props: LoginProps) {
    super(props);

    this.login = this.login.bind(this);
  }

  login() {
    window.location.href = 'https://todolist.kim1jun.xyz/api/auth/login';
  }

  render() {
    return (
      <ModalBackground>
        <Modal>
          <ExplainTitle>TodoList에 로그인</ExplainTitle>
          <ExplainGeneral>당신의 할일을 정리하세요!</ExplainGeneral>
          <FacebookLoginBtn onClick={this.login}>Facebook으로 계속</FacebookLoginBtn>
        </Modal>
      </ModalBackground>
    );
  }
}
