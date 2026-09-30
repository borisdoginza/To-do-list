import { useState } from "react";
import { useTranslation } from "react-i18next";


export default function Modal( {addNotes, close, editText, editedNote}) {

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const { t } = useTranslation()

  const hasTitle = title.trim() ? 'title' : ''
  const hasContent = content.trim() ? 'content' : ''
  const titleText = editText ? t('editNotes') : t('addNotes')
  const btnText = editText ? t('edit') : t('add')

  const addNote = () => {
    if (title.length > 2 && content.length > 2){
      const newNote = {
      id: editedNote ? editedNote.id : crypto.randomUUID(),
      title,
      text: content,
      date: new Date().toLocaleString()
    }
    addNotes(newNote)
    close();
    }
    

    
  }



  return (
    <div className="modal" onClick={close}>
      <div className="modal__block" onClick={(e) => e.stopPropagation()}>
        <h3 className="modal__title">{titleText}</h3>
        <div className="modal__inputs">

          <label className="modal__label">
            <input className={hasTitle} type="text" onChange={(e) => setTitle(e.target.value)} value={title}/>
            <span>{t('title')}</span>
          </label>

          <label className="modal__label">
            <input className={hasContent} type="text" onChange={(e) => setContent(e.target.value)} value={content}/>
            <span>{t('content')}</span>
          </label>

        </div>

        <div className="modal__btns">
          <button className="madal__btn del btn" onClick={close}>{t('cancel')}</button>
          <button className="madal__btn edit btn" onClick={addNote}>{btnText}</button>
        </div>
      </div>
    </div>
  );
}
