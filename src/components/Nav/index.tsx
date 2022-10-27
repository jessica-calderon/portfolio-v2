import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps, MenuTheme } from 'antd';
import { Menu, Switch } from 'antd';
import React, { useState } from 'react';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Jessica Calderon', 'sub1', <MailOutlined />, [
    getItem('Home', '1'),
    getItem('About', '2')
  ]),

  getItem('Portfolio', 'sub2', <AppstoreOutlined />, [
    getItem('Bootcamp', '3'),
    getItem('Freelance', '4'),
    getItem('Site Archive', '5'),
    getItem('Submenu', 'sub3', null, [getItem('Option 6', '6'), getItem('Option 7', '7')]),
  ]),

  getItem('Contact Me', 'sub4', <SettingOutlined />, [
    getItem('Contact Information', '8'),
    getItem('Message Me', '9'),
  ]),
];

const Nav: React.FC = () => {
  const [theme, setTheme] = useState<MenuTheme>('dark');
  const [current, setCurrent] = useState('1');

  const changeTheme = (value: boolean) => {
    setTheme(value ? 'dark' : 'light');
  };

  const onClick: MenuProps['onClick'] = e => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <>
      <Switch
        checked={theme === 'dark'}
        onChange={changeTheme}
        checkedChildren="Dark"
        unCheckedChildren="Light"
      />
      <br />
      <br />
      <Menu
        theme={theme}
        onClick={onClick}
        style={{ width: 256 }}
        defaultOpenKeys={['sub1']}
        selectedKeys={[current]}
        mode="inline"
        items={items}
      />
    </>
  );
};
  export default Nav;