import { Alert, message } from 'antd';
import { response } from 'express';
import React, { useState } from 'react';
import { flushSync } from 'react-dom';

import { login } from '@/services/api/login';
import token from '@/utils/token';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { LoginForm, ProFormCheckbox, ProFormText } from '@ant-design/pro-components';
import { history, useModel } from '@umijs/max';

import styles from './index.less';

const LoginMessage: React.FC<{
  content: string;
}> = ({ content }) => {
  return (
    <Alert
      style={{
        marginBottom: 24,
      }}
      message={content}
      type='error'
      showIcon
    />
  );
};
const Login: React.FC = () => {
  const [userLoginState, setUserLoginState] = useState<API.LoginResult>({});
  const [type, setType] = useState<string>('account');
  const { initialState, setInitialState } = useModel('@@initialState');
  console.log('[initialState]: ', initialState);
  const fetchUserInfo = async () => {
    const userInfo = await initialState?.fetchUserInfo?.();
    if (userInfo) {
      flushSync(() => {
        setInitialState((s) => ({
          ...s,
          currentUser: userInfo,
        }));
      });
    }
  };
  const handleSubmit = async (values: API.LoginForm) => {
    console.log('[values]: ', values);
    try {
      // 登录
      const res = await login({
        ...values,
      });

      if (res.code === 0 && res.data) {
        const { access_token } = res.data;
        token.save(access_token);
        await fetchUserInfo();
        const urlParams = new URL(window.location.href).searchParams;
        history.push(urlParams.get('redirect') || '/');
        return;
      }

      // if (res.code === 0 && res?.data) {

      //   }
      //   // const defaultLoginSuccessMessage = '登录成功！';
      //   message.success('登录成功！');

      //   token.save();
      //   await fetchUserInfo();
      //   const urlParams = new URL(window.location.href).searchParams;
      //   console.log('[urlParams]: ', urlParams);
      //   history.push(urlParams.get('redirect') || '/');
      //   return;
      // }
      // console.log(msg);
      // 如果失败去设置用户错误信息
      // setUserLoginState(msg);
    } catch (error) {
      // const defaultLoginFailureMessage = '登录失败，请重试！';
      // const {response:{data:message}} = error
      message.error('登录失败，请重试！');
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* logo={<img alt='logo' src='/logo.svg' />}
        title='Ant Design'
        subTitle={'Ant Design 是西湖区最具影响力的 Web 设计规范'} */}
        <LoginForm
          initialValues={{
            account: 'jayce@example.com',
            password: '1234',
          }}
          onFinish={async (values) => {
            await handleSubmit(values as API.LoginForm);
          }}
        >
          {/* {status === 'error' && loginType === 'account' && (
            <LoginMessage content={'错误的用户名和密码(admin/ant.design)'} />
          )} */}
          <>
            <ProFormText
              name='account'
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined className={styles.prefixIcon} />,
              }}
              placeholder={'用户名: admin or user'}
              rules={[
                {
                  required: true,
                  message: '用户名是必填项！',
                },
              ]}
            />
            <ProFormText.Password
              name='password'
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined className={styles.prefixIcon} />,
              }}
              placeholder={'密码: ant.design'}
              rules={[
                {
                  required: true,
                  message: '密码是必填项！',
                },
              ]}
            />
          </>

          {/* <div
            style={{
              marginBottom: 24,
            }}
          >
            <ProFormCheckbox noStyle name='autoLogin'>
              自动登录
            </ProFormCheckbox>
          </div> */}
        </LoginForm>
      </div>
    </div>
  );
};
export default Login;
