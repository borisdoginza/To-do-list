import pens from "../assets/img/pens.svg"

export default function Button({open}) {
  return (
    <button className="add" onClick={open}>
        <img src={pens} alt=""></img>
    </button>
  )
}
