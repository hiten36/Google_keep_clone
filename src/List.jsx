import React from 'react';

function List(props)
{
    return(<div className="main">
    <p className="first">{props.item.title}</p>
    <p className="second">{props.item.desc}</p>
    <span id={props.ids} onClick={props.f3} className="material-icons dlt-icon">
    delete
    </span>
  </div>
  )
}
export default List;