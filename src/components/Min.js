import './min.css'

const Min = ( props) => {

  return (
    <div className='min' onClick={ e => e.currentTarget.classList.toggle('fill')}>  
     <p>{props.min}</p> 
    </div>
  )
}

export default Min