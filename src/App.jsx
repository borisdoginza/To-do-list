import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Notes from "./components/Notes";
import Button from "./components/Button";
import Modal from "./components/Modal";
import DeleteModal from "./components/DeleteModal";

export default function App(){

  const initialNotes = JSON.parse(localStorage.getItem('notes') || '[]')

  const [notes, setNotes] = useState(initialNotes)

  const [modalOpen, setModalOpen] = useState(false)
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const [deleteId, setDeleteId] = useState(null)
  const [noteToDelete, setNoteToDelete] = useState(null)
  const [editText, setEditText] = useState(false)
  const [editedNote, setEditedNote] = useState(null)
  const [searchNav, setSearchNav] = useState(false)
  
  const [searchText, setSearchText] = useState('')

  const changeNav = () => setSearchNav(!searchNav)
  const clearText = () => setSearchText('')

  
  const filteredNotes = notes.filter(note => note.title.toLowerCase().includes(searchText.toLowerCase()))
  

  const open = () => setModalOpen(!modalOpen)
  const requestDelete = (id, note) => {
    setDeleteId(id)
    setNoteToDelete(note)
    setDeleteModalOpen(true)
  }

  const close = () => {
    setModalOpen(false)
    setEditText(false)
    setEditedNote(null)
  }

  const closeDeleteModal = () => {
    setDeleteModalOpen(false)
    setDeleteId(null)
  }

  const addNotes = (note) => {
    if (editedNote){
      setNotes(notes.map(item => item.id === note.id ? note : item))
      
    } else {
      setNotes([...notes, note])
    }
    
  }

  const delNote = (id) => {
    setNotes(notes.filter(item => item.id !== id))
    closeDeleteModal()
  }

  const changeNote = (note) => {
    setEditedNote(note)
    setEditText(true)
    open()
    
  }

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  

  return (
    <>
      <Navbar changeNav={changeNav} searchNav={searchNav} setSearchText={setSearchText} searchText={searchText} clearText={clearText}/>
      {/* {searchNav && <Navbar />} */}
      <Notes notes={filteredNotes} requestDelete={requestDelete} changeNote={changeNote}/>
      <Button open={open}/>
      {modalOpen && <Modal addNotes={addNotes} close={close} editText={editText} editedNote={editedNote}/>} 
      {deleteModalOpen && <DeleteModal closeDeleteModal={closeDeleteModal} deleteId={deleteId} delNote={delNote} note={noteToDelete} />}
    </>
  )
}

// {
//         id:crypto.randomUUID(),
//         title: 'Первая заметка',
//         text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum qui, natus perspiciatis',
//         date: new Date().toLocaleString()
//       },

//       {
//         id:crypto.randomUUID(),
//         title: 'Вторая заметка',
//         text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum qui, natus perspiciatis',
//         date: new Date().toLocaleString()
//       },

//       {
//         id:crypto.randomUUID(),
//         title: 'Третья заметка',
//         text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum qui, natus perspiciatis',
//         date: new Date().toLocaleString()
//       }