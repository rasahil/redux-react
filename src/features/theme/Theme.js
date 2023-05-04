import { useState } from "react"
import { useDispatch } from "react-redux"
import { changeTextColor } from "./themeSlice"

const Theme = () => {
 const [color, setColor] = useState("blue")
 const [color1, setColor1] = useState("red")
 const dispatch = useDispatch()
 return (
  <div>
   <input className="textbox" type="text" onChange={(e) => setColor(e.target.value)} />
   <button className="button" onClick={() => { dispatch(changeTextColor(color)) }} onDoubleClick={() => { dispatch(changeTextColor(color1)) }}>Change Text Color</button>
  </div>
 )
}

export default Theme
