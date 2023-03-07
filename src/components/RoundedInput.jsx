import {useState} from 'react';

function RoundedInput(props) {
   const [dataInput, setDataInput] = useState({
      title: "",
      completed: false,
   })

   function onChange(e){
      let updatedValue = {}
      updatedValue['title'] = e.target.value
      setDataInput(dataInput => ({
         ...dataInput,
         ...updatedValue
        }))
    }

      function onSubmit()  {
        if (dataInput.title !== ""){
            props.handleSubmit(dataInput)
        } else {
           alert("Masukan To do")
        }
    }



      return(
         <div className='container d-flex justify-content-center text-submit'>
            <input className="searchbar" type="text" placeholder='Add Todo..' name="title" onChange={onChange}/>
            <button className='button-submit' onClick={() => {onSubmit()}}>Submit</button>
         </div>
      )
   
}

export default RoundedInput;
