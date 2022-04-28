import React,{useEffect,useState} from 'react';
import axios from 'axios';
const UseEffectExample = () => {
    const [color,setColor]=useState('blue')
    const [weather,setWeather]=useState([])
    useEffect(()=>{
       axios.get('https://weatherdbi.herokuapp.com/data/weather/london')
       .then(response=>setWeather(response.data.next_days))
    },[])
    useEffect(()=>{
     console.log(10);
     });
     useEffect(()=>{
         console.log('poxvec guyn@');
     },[color])
    return (
        <div>
            {color}
            <button onClick={()=>color==='blue' ? setColor('pink') :setColor('blue')}>pink</button>
            {weather.length!==0 ? weather.map(i=>(
                <div key={i.id}>{i.day}</div>
            ) ) : null}
        </div>
    );
};

export default UseEffectExample;
