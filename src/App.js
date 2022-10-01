import { useState } from 'react';
import './App.css';

function App() {

  const [msg, setMsg] = useState("")
  const [items, setItems] = useState([])

    const handleSubmit = ()  => {
      if(msg === ''){
        window.alert("enter todo!")
        return
      }
      const ll = {
        id: Math.floor(Math.random() * 1000),
        value: msg
      }
      // console.log(ll)
      setItems([...items,ll])
      setMsg('')
    }
     const deleteItem = (id) => {
      const nayaArr = [...items].filter((item) => item.id !== id)
      setItems(nayaArr)
     }
  
  

  return (
    <div className="App">
     <h1  className='hs'><span className='yy'>Todo</span> App</h1>
     <input 
     className='in'
      type='text'
      placeholder='enter the todo'
      onChange={(e) => {
        setMsg(e.target.value)
        }}
    value={msg}
     />
     <button className='sbtn'  onClick={handleSubmit}>add todo</button>
     <div className='tada'>
      {items.map((item) => <div className='tn' key={item.id}>{item.value} <button className='xbtn' onClick={() => deleteItem(item.id)}>❌</button></div>)}
     </div>
    </div>
  );
}

export default App;

