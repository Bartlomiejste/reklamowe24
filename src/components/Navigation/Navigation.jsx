import React, { useState } from "react";
import "../../styles/Navigation/Navigation.css";
import keylockIcon from "../../assets/keylock-black.png";
import basketIcon from "../../assets/basket-black.png";
import searchIcon from "../../assets/search.svg";
import DropdownMenu from "./DropdownMenu";
import SearchModal from "./SearchModal";

const Navigation = () => {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const openSearchModal = () => {
    setIsSearchModalOpen(true);
  };

  const closeSearchModal = () => {
    setIsSearchModalOpen(false);
  };

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
    { label: "inspiracje" },
    { label: "Gadżety do 1 zł" },
  ];
  const discountsItems = [
    { label: "Produkty w niższych cenach" },
    { label: "Promocja miesiąca" },
    { label: "Prezent dla pracownika" },
    { label: "Prezenty dla firm" },
    { label: "Giftbox" },
    { label: "Wypoczynek" },
    { label: "Archiwalne promocje" },
  ];

  return (
    <>
      <nav className="navigationWrapper">
        <div className="navigation">
          <DropdownMenu title="Oferta gadżetów" items={gadgetsItems} />
          <DropdownMenu title="Oferta tematyczna" items={tematicItems} />
          <DropdownMenu title="Rabaty i promocje" items={discountsItems} />
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
