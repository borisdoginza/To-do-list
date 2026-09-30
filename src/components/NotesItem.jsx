import edit from "../assets/img/pens.svg";
import del from "../assets/img/basket.svg";
import { useTranslation } from "react-i18next";

export default function NotesItem( {note, view, requestDelete, changeNote} ) {
  const {title, text, date, id } = note
  const { t } = useTranslation()
  const topClass = view ? 'note__top between' : 'note__top';
  return (
    <div className="note">
      <div className={topClass}>
      <h3 className="h2 note__title">{title}</h3>

      
        <span className="note__date">{date}</span>
        
      </div>
      <p className="note__text">{text}</p>
      
      <div className="note__btns">

        <button className="note__btn edit btn" onClick={() => changeNote(note)}><img src={edit} alt=""/>{t('edit')}</button>
        <button className="note__btn del btn" onClick={() => requestDelete(id, note)}><img src={del} alt=""/>{t('del')}</button>

      </div>
    </div>
  )
}

