import React from 'react'

const Button = ({row, index, handleInput}) => {
  return (
    <React.Fragment>
        <div className={`row row_${index + 1}`}>
            {
                row.map((element, elemIndex)=>{
                    return <button key={elemIndex} className="btn" value={element} onClick={handleInput}>{element}</button>
                })
            }
        </div>
  </React.Fragment>
  )
}

export default Button
