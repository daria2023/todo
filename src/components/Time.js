import './time.css'
import html2canvas from 'html2canvas';

const Time = () => {
    let today = new Date(Date.now());
    today = today.toDateString();
    let rootDiv = document.querySelector('#root')
    const screenShot = ()=>{
      html2canvas(rootDiv,{
        scrollX: 0,
        scrollY: -window.scrollY
    }).then((canvas) => {
        let a = document.createElement("a");
        a.download = `${today}.png`
        a.href = canvas.toDataURL("image/png");
        a.click(); 
      });
    }

  return (
    <div className='time'>
        <h2 className='header'>Z-ToDo</h2>
        <p className='sentence'>时光一去不复回</p>
        <div className='today'>
            <span>{today}</span>
            <button onClick={screenShot}>save</button>
        </div>   
    </div>
  )
}

export default Time