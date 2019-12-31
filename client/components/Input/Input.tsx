import React, { KeyboardEvent, MouseEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import { Icon } from 'antd';
import useLogin from '@/hooks/useLogin';
import useAction from '@/hooks/useAction';
import { noop } from '@/utils';
import Post from '@/components/Icons/Post';
import { State } from '@/store/reducer';
import { sendMessage } from '@/services';
import styles from './Input.less';

export default function Input() {
  const isLogin = useLogin();
  const actions = useAction();
  const [content, setContent] = useState('');
  const linkman = useSelector((state: State) => state.linkmans[state.focus]);
  const keyDownHandler = async (event: KeyboardEvent | MouseEvent) => {
    if (!content) return;
    if (!linkman) return;
    const { keyCode } = event as KeyboardEvent;
    if (keyCode && keyCode !== 13) return;
    setContent('');
    await sendMessage(linkman.id, linkman.type, 'text', content);
  };

  // TODO
  // function sendTextMessage() {}
  // function sendImageMessage() {}

  const guestJSX = (
    <p className={styles.guest}>
      游客朋友你好, 请
      <b
        className="btn-pointer"
        role="button"
        onClick={() => actions.setStatus('loginAndRegisterDialogVisible', true)}
        onKeyUp={noop}
      >
        登录
      </b>
      后参与聊天
    </p>
  );

  const loginJSX = (
    <div className={styles.inputWrap}>
      <input
        placeholder="随便聊点啥吧~"
        className={classNames(styles.innerInput, 'inner-input')}
        value={content}
        onKeyDown={keyDownHandler}
        onChange={(event) => setContent(event.target.value)}
        type="text"
      />
      <Icon
        className={classNames(styles.post, 'btn-pointer')}
        component={Post}
        onClick={noop}
      />
    </div>
  );

  return (
    <div className={classNames(styles.input, 'flex-center')}>
      {isLogin ? loginJSX : guestJSX}
    </div>
  );
}
