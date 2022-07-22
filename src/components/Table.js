import Min from './Min'
import './table.css'

const Table = () => {
  const showMins = ()=> {
    let mins = [];
    for (let i = 0; i < 6; i++) {
      mins.push(<Min key={i} min={i*10}/>);
    }
    return mins;
  }
  
  const showHours = ()=> {
    let hours = [];
    for(let i = 6; i <= 24; i++) {
      hours.push(
        <div className='hour' key={i}>
          <span className='hour-time'>{i}:00</span>
          <div className='mins'>
            {showMins()}
          </div>
        </div>
      )
    }
    return hours;
  }
  return (
    <div className='table'>
      {showHours()}
    </div>
  )
}

export default Table