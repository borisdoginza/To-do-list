import search from "../assets/img/search.svg";
import back from "../assets/img/back.svg"
import clear from "../assets/img/clear.svg"
import { useTranslation } from "react-i18next";

export default function Navbar({changeNav, searchNav, setSearchText, searchText, clearText}) {

  

  const { i18n, t} = useTranslation()
  const changeLang = () => {
    const newLang = i18n.language === 'ru' ? 'en' : 'ru'
    i18n.changeLanguage(newLang);
    localStorage.setItem('lang', newLang)
  }

  

  return (
    <>
    {!searchNav &&
    <nav className="nav">
      <button className="nav__lang" onClick={changeLang}>{i18n.language}</button>
      <h1 className="nav__title">{t('Notes')}</h1>
      <button onClick={changeNav} className="nav__search">
        <img src={search} alt={t('searchIcon')} />
      </button>
    </nav>
    }

    {
      searchNav &&
    <nav className="nav">
      <button className="nav__lang" onClick={changeNav}><img src={back} alt={t('iconBack')}/></button>
      <input 
      type="text" 
      className="nav__input" 
      placeholder={t('search')}
      onChange={(e) => setSearchText(e.target.value)}
      value={searchText}
      />
      
      
      <button className="nav__search">
        <img src={clear} alt={t('clearSearch')} onClick={clearText}/>
      </button>
    </nav>
    }
    </>
  );
}
