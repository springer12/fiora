import React from 'react';
import classNames from 'classnames';
import { Avatar } from 'antd';
import styles from './Card.less';

interface CardProps {
  /** 联系人名称 */
  name: string;
  /** 联系人头像 */
  avatar: string;
}

export default function Card (props: CardProps) {
  const { name, avatar } = props;

  return (
    <div className={classNames(styles.card, 'flex-v-center')}>
      <Avatar src={avatar} size={48} />
      <div className={styles.content}>
        <span>{name}</span>
      </div>
    </div>
  );
}
