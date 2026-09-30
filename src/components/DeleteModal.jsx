
import { useTranslation } from "react-i18next";

export default function DeleteModal({ closeDeleteModal, deleteId, delNote, note }) {
  const { t } = useTranslation()

  return (
    <div className="modal" onClick={closeDeleteModal}>
      <div className="modal__block" onClick={(e) => e.stopPropagation()}>
        <h3 className="modal__title">Вы уверены, что хотите удалить?</h3>
        <p className="modal__text">{note?.title || deleteId}</p>

        <div className="modal__btns">
          <button className="modal__btn del btn" onClick={() => delNote(deleteId)}>{t('del')}</button>
          <button className="modal__btn edit btn" onClick={closeDeleteModal}>{t('cancel')}</button>
        </div>
      </div>
    </div>
  )
}
