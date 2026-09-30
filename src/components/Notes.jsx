import { useState } from "react";
import grid from "../assets/img/layout.svg";
import list from "../assets/img/list.svg";
import NotesItem from "./NotesItem";
import { useTranslation } from "react-i18next";

export default function Notes({ notes, requestDelete, changeNote }) {

  const [view, setView] = useState(false)
  const { t } = useTranslation()

  let btnIcon = view ? grid : list;
  let btnText = view ? t('grid') : t('List');
  const itemsClass = view ? 'notes__items list' : 'notes__items';
  let allNotesText = notes.length ? t('allNotes') : t('noNotes');

  const changeView = () => setView(!view)

  return (
    <div className="notes">
      <div className="notes__top container">
        <h2 className="notes__title">{allNotesText}</h2>
        <button className="notes__btn" onClick={changeView}><img src={btnIcon} alt="" /><span>{btnText}</span></button>
      </div>

      <div className={`${itemsClass} container`}>
        {notes.map((note) => (
          <NotesItem note={note} key={note.id} view={view} requestDelete={requestDelete} changeNote={changeNote}/>
          ))}
      </div>
    </div>
  )
}
