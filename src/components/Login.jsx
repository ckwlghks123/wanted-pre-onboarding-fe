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

  const isValid = emailState && passwordState;

  return (
    <Wrapper>
      <InnerWrapper>
        <LogoWrapper>
          <Logo src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png" />
        </LogoWrapper>
        <InputForm onSubmit={handleSubmit}>
          {inputs.map((input) => (
            <Input key={input.id} {...input} onChange={onInputCheck} />
          ))}
          <Button disabled={isValid} valiState={isValid}>
            로그인
          </Button>
        </InputForm>
      </InnerWrapper>
    </Wrapper>
  );
};

const Input = styled.input`
  border-radius: 3px;
  border: 1px solid;
  border-color: ${({ valiState }) => {
    if (valiState === null || valiState) return '#413939ab';
    if (!valiState) return 'red';
  }};
  margin-bottom: 7px;
  height: 40px;
  outline: none;
  padding: 5px 10px;
  font-size: 12px;
`;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: rgba(128, 128, 128, 0.3);
`;

const InnerWrapper = styled.div`
  width: 350px;
  height: 400px;
  display: flex;
  align-items: center;
  background-color: #fff;
  border: 1px solid rgba(128, 128, 128, 0.8);
  flex-direction: column;
`;

const LogoWrapper = styled.span`
  padding: 70px 50px;
`;

const Logo = styled.img`
  height: 60px;
`;

const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 40px;
  width: 100%;
`;

const Button = styled.button`
  background-color: ${({ valiState }) =>
    valiState ? 'rgb(0, 149, 246)' : 'rgba(0, 149, 246, 0.4)'};
  border-radius: 5px;
  height: 30px;
  color: white;
  font-weight: 1000;
  margin-top: 8px;
  cursor: pointer;
`;
export default LogIn;
