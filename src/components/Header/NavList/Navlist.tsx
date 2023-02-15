import React from 'react';
import { Link } from 'react-scroll';
import styled from '../Header.module.scss';

interface IProps {
  isOpenMenu?: boolean;
  setIsOpenMenu?: (v: boolean) => void;
}

const Navlist: React.FC<IProps> = ({ isOpenMenu, setIsOpenMenu }) => {
  const closeMenu = () => {
    if (setIsOpenMenu) {
      setIsOpenMenu(!isOpenMenu);
    }
  };
  const navigation = [
    { name: 'Home', id: 1, href: 'home' },
    { name: 'services', id: 2, href: 'services' },
    { name: 'About', id: 3, href: 'about' },
    { name: 'Shop', id: 4, href: 'shop' },
    { name: 'Contact', id: 5, href: 'contact' },
  ];

  return (
    <ul className={styled.navList}>
      {navigation.map(nav => (
        <li className={styled.navItem} key={nav.id}>
          <Link
            to={nav.href}
            className={styled.navLink}
            smooth={true}
            duration={500}
            onClick={closeMenu}
          >
            {nav.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navlist;
