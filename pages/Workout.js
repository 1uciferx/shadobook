import {useState} from 'react'
import Emplayee from '../components/Emplayee'
// import Counter from '../components/Counter';
import  TodoList from '../components/Counter';
import { bubble } from 'react-burger-menu';
import { Button } from 'antd';


function workout(){
  const [count,SetCount]=useState(0)
    const addcount=()=> {
    SetCount(count+1) 
     
   }
   let emp=[{ name:'vijay',age:44},
   {name:'arun',age:33},
   {name:'kumar',age:32}

   ]
  


  return (
    <div>
        <div className='app'>
          <button onClick={addcount}>Add</button>
         {
          emp.map(( obj,index)=>( 
           <Emplayee key={index}{...obj} />
           )

          )

         }
        </div>
    < TodoList/>
    </div>
  );
}

export default workout;