import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdArrowRightAlt } from 'react-icons/md';
import styled from '../Header.module.scss';

interface IProps {
  openModal: () => void;
}

const Connect: React.FC<IProps> = ({ openModal }) => {
  const [searchValue, setSearchValue] = useState('');
  const [isShowSearch, setIsShowSearch] = useState(false);
  const handleSearch = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setSearchValue('');
  };
  return (
    <div className={styled.rightSection}>
      <div className={styled.telWrap}>
        <p>Call Us: </p>
        <a href="tel:+011234567890">+011234567890</a>
      </div>

      <div className={styled.searchWrap}>
        {isShowSearch && (
          <form className={styled.searchForm}>
            <input
              className={styled.searchInput}
              placeholder="search"
              type="text"
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
            />
            <button
              className={styled.searchSubmit}
              onClick={e => handleSearch(e)}
            >
              <MdArrowRightAlt />
            </button>
          </form>
        )}
        <div
          className={styled.searchIcon}
          onClick={() => setIsShowSearch(!isShowSearch)}
        >
          <AiOutlineSearch />
        </div>
      </div>

      <div className={styled.navLink} onClick={() => openModal()}>
        Login
      </div>
    </div>
  );
};

export { Connect };
