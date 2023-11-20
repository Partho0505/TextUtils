import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

export default function Meaning() {
    const [word, setWord] = useState("");

    const navigate = useNavigate(); 

    const onChangeHandler = (e) => {
      setWord(e.target.value);
    }

    const onSubmitHandler = (event) => {
      event.preventDefault(); 
      const trimmedWord = word.trim().toLowerCase();
      if(trimmedWord && trimmedWord.split(" ").length>1)  return;
      navigate(`/search/${word}`);
    }
  return (
    <>
      <div className="container my-3">
        <h1 className='text-center mb-5'>Search Word Meanings</h1>
        <form className="form" role="search" onSubmit={onSubmitHandler}>            
          <input className="form-control form-control-lg shadow-none rounded my-3"  placeholder='Enter your word' value={word} onChange={onChangeHandler}/>
          <div className="text-center">
            <button disabled={word.length === 0} className="btn btn-primary btn-lg" style={{width : '150px'}}>Search</button>
          </div>
        </form>
      </div>
    </>
  )
}


