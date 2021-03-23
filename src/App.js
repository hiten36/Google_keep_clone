import React, { useState } from 'react';
import List from './List';

function App()
{

  let [s3,s4]=useState([]);
  document.addEventListener('mouseup',(e)=>{
    let i1=document.querySelector('.inp3');
    if(document.querySelector('.inp3').style.display==='flex')
    {
      if(!i1.contains(e.target))
      {
        f2();
        document.querySelector('.inp2').style.display='block';
        document.querySelector('.inp3').style.display='none';
        document.getElementById('title1').value='';
        document.getElementById('desc1').value='';
      }
    }
  })
  function f2()
  {
    s4((val)=>{
      
      return [...val, {title:document.getElementById('title1').value,desc:document.getElementById('desc1').value}];
    })
  }
  function f3(e)
  {
    s4((val)=>{
      return val.filter((item,ind2)=>{
        if(e.target.id!=ind2)
        {
          return item;
        }
        return null;
      })
    })
  }
  return(
    <>
      <div className="inp2">
        <input placeholder="Take a note..." type="text"/>
      </div>
      <div className="inp3">
        <input autoFocus name="title" id="title1" placeholder="Title" type="text" />
        <textarea name="desc" id="desc1" placeholder="Take a note..." cols="30" rows="10"></textarea>
        <span className="close">close</span>
      </div>
      <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap"}}>
        {s3.map((item,ind1)=>{
          if(item.title !=='' || item.desc!=='')
          {
            return <List item={item} ids={ind1} f3={f3}/>
          }
          return null;
        })}
      </div>
  </>
  )
}
export default App;