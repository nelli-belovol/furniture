import { images } from 'assets/images';
import Navlist from 'components/NavList/Navlist';
import { useMediaQuery } from 'react-responsive';
import Menu from 'components/Menu/Menu';
import Connect from 'components/Connect/Connect';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';
import styled from './Header.module.scss';

interface IProps {
  openModal: () => void;
}

const Header: React.FC<IProps> = ({ openModal }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const isMobileOrLaptop = useMediaQuery({
    query: '(max-width: 1200px)',
  });

  return (
    <div className={styled.headerSection}>
      <nav className={styled.navigation}>
        <div className={styled.logoWrap}>
          <a href="index.html">
            <img className={styled.heroLogo} src={images.logo} alt="logo" />
          </a>
        </div>

        {isMobileOrLaptop ? (
          <>
            <div
              className={styled.burgerMenu}
              onClick={() => setIsOpenMenu(!isOpenMenu)}
            >
              {!isOpenMenu ? <AiOutlineMenu /> : <AiOutlineClose />}
            </div>
          </>
        ) : (
          <>
            <Navlist />
            <Connect openModal={() => openModal()} />
          </>
        )}
      </nav>
      {isOpenMenu && (
        <Menu>
          <Navlist isOpenMenu setIsOpenMenu={setIsOpenMenu} />
          <Connect openModal={() => openModal()} />
        </Menu>
      )}
    </div>
  );
};

export default Header;
