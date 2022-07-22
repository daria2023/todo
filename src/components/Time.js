import './time.css'

const Time = () => {
    let today = new Date(Date.now());
    today = today.toDateString();

  return (
    <div className='time'>
        <h2 className='header'>Z-ToDo</h2>
        <p className='sentence'>时光一去不复回</p>
        <div className='today'>
            {today}
        </div>   
    </div>
  )
}

export default Time