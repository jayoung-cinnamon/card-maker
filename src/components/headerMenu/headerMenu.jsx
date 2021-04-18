import React from 'react';
import styles from './headerMenu.module.css';
import {
  Menu,
  MenuItem,
  MenuButton
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

const HeaderMenu = () => {
  return(
    <Menu className={styles.headerMenu} menuButton={<MenuButton>menu</MenuButton>}>
        <MenuItem>New File</MenuItem>
        <MenuItem>Save</MenuItem>
        <MenuItem>Close Window</MenuItem>
    </Menu>
  )

};


export default HeaderMenu;