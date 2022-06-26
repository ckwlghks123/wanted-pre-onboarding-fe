import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { setUser } from '../helper/storeUser';
import validate from '../helper/validation';

const LogIn = () => {
  const inputEmail = useRef();
  const inputPassword = useRef();

  const [emailState, setEmailState] = useState(null);
  const [passwordState, setPasswordState] = useState(null);

  const onInputCheck = (e) => {
    const { name, value } = e.target;
    const validated = validate(name, value);
    name === 'email' ? setEmailState(validated) : setPasswordState(validated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!(emailState && passwordState)) return;

    const email = inputEmail.current.value;
    const password = inputPassword.current.value;

    const userEmail = 'test1234@test.com';
    const userPassword = 'Test1234!@';

    if (email !== userEmail) return alert('올바른 이메일을 입력해주세요');
    if (password !== userPassword)
      return alert('비밀번호가 일치하지 않습니다.');

    setUser('user', JSON.stringify({ email, password }));
    location.reload();
  };

  const inputs = [
    {
      id: 1,
      name: 'email',
      type: 'text',
      placeholder: '전화번호, 사용자 이름 또는 이메일',
      required: true,
      ref: inputEmail,
      valiState: emailState,
    },
    {
      id: 2,
      name: 'password',
      type: 'password',
      placeholder: '비밀번호',
      required: true,
      ref: inputPassword,
      valiState: passwordState,
    },
  ];

  return (
    <div>
      <span>
        <img src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png" />
      </span>
      <form onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <Input key={input.id} {...input} onChange={onInputCheck} />
        ))}
        <button disabled={!(emailState && passwordState)}>로그인</button>
      </form>
    </div>
  );
};

const Input = styled.input`
  border: 1px solid black;
  border-color: ${({ valiState }) => {
    if (valiState === null || valiState) return 'black';
    if (!valiState) return 'red';
  }}};
`;

export default Login;
