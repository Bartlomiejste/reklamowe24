import React, { useEffect, useState } from "react";
import "../../styles/Navigation/Navigation.css";
import keylockIcon from "../../assets/navigation/keylock-black.png";
import basketIcon from "../../assets/navigation/basket-black.png";
import searchIcon from "../../assets/navigation/search.svg";
import SearchModal from "./SearchModal";
import DropdownMenu from "../../utils/DropdownMenu/DropdownMenu";

const gadgetsItems = [
  { label: "Do biura" },
  { label: "VIP" },
  { label: "Do domu" },
  { label: "Narzędzia" },
  { label: "Na targi i konferencje" },
  { label: "Wypoczynek" },
  { label: "Torby, walizki, plecaki" },
  { label: "Tekstylia i Odzież" },
  { label: "Parasole" },
  { label: "Elektronika" },
  { label: "Poligrafia" },
  { label: "Dla dzieci" },
  { label: "Inne" },
  { label: "Gadżety świąteczne" },
];
const tematicItems = [
  { label: "Nasze Bestsellery" },
  { label: "Gadżety markowe" },
  { label: "Odzież reklamowa" },
  { label: "Nowości" },
  { label: "Gadżety reklamowe ekologiczne" },
  { label: "Gadżety reklamowe wyborcze" },
  { label: "Gadżety reklamowe dla biur nieruchomości" },
  { label: "Inspiracje" },
  { label: "Gadżety do 1 zł" },
];
const discountsItems = [
  { label: "Produkty w niższych cenach" },
  { label: "Promocja miesiąca" },
  { label: "Prezent dla pracownika" },
  { label: "Prezenty dla firm" },
  { label: "Giftbox" },
  { label: "Archiwalne promocje" },
];

const Navigation = () => {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    const triggerHeight = 76;
    if (window.scrollY >= triggerHeight) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openSearchModal = () => {
    setIsSearchModalOpen(true);
  };

  const closeSearchModal = () => {
    setIsSearchModalOpen(false);
  };

  return (
    <>
      <nav className={`navigation__wrapper ${isSticky ? "sticky" : ""}`}>
        <div className="navigation">
          <DropdownMenu
            title="Oferta gadżetów"
            items={gadgetsItems}
            width="520px"
            fontSize="14px"
            showArrow={true}
          />
          <DropdownMenu
            title="Oferta tematyczna"
            items={tematicItems}
            width="350px"
            fontSize="16px"
            showArrow={false}
          />
          <DropdownMenu
            title="Rabaty i promocje"
            items={discountsItems}
            width="250px"
            fontSize="16px"
            showArrow={false}
          />
          <div className="navigation__contact">Kontakt</div>
          <div className="search__container" onClick={openSearchModal}>
            <input
              type="text"
              className="search__input"
              placeholder="Szukaj produktu"
            />
            <div className="search__icon">
              <img src={searchIcon} alt="Search" />
            </div>
          </div>
        </div>
        <div className="navigation__icon">
          <img
            src={keylockIcon}
            alt="keylock icon"
            className="keylock__icon"
          ></img>
          <img
            src={basketIcon}
            alt="basket icon"
            className="basket__icon"
          ></img>
        </div>
      </nav>
      <SearchModal isOpen={isSearchModalOpen} close={closeSearchModal} />
    </>
  );
};

export default Navigation;
