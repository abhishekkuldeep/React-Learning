import { useState } from 'react'
import '../App.css'
import { postData } from '../api/PostApi';


function Form({data, setData}) {

    const [addData, setAddData] = useState({
        title:"",
        body:""
    })

    const handleInputChallenge = (e) =>{
        const name = e.target.name;
        const value = e.target.value;


        setAddData( (prev)=> {
            return{
                ...prev,
                [name]:value,

            };

        });

    }



    const addPostData = async() => {
        const res = await postData(addData);
        if((res.status === 201)){
            setData([...data,res.data])
            setAddData({title: "", body: ""});
        }

    }

    // form submission
    const handleFormSubmit = (e) => {
        e.preventDefault();
        addPostData();
    }



  return (
    <>
    <form className='section-form' onSubmit={handleFormSubmit}>
        <div>
            <label htmlFor="title"></label>
            <input
             type="text"
             autoComplete='off'
             id='title'
             name='title'
             placeholder='Add title'
             value={addData.title}
             onChange={handleInputChallenge} 
             />
        </div>

        <div>
            <label htmlFor="body"></label>
            <input 
            type="text"
            autoComplete='off'
            placeholder='Add Post'
            id='body'
            name='body'
            value={addData.body}
            onChange={handleInputChallenge} />
        </div>
        <button type='submit'>Add</button>
    </form>
    </>
  )
}

export default Form