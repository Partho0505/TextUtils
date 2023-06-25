import {React, useEffect, useState, Fragment} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'

import {FaArrowCircleLeft}  from "react-icons/fa";
import {HiSpeakerWave} from "react-icons/hi2";

import HashLoader from "react-spinners/HashLoader";
 
export default function Definition(props) {
    const {word} = useParams();
    const navigate = useNavigate();

    const [definitions, setDefinitions] = useState([]);

    const [loading, setLoading] = useState(true);

    const [exist, setExist] = useState(true);

    const [audio, setAudio] = useState(null);


    useEffect(()=>{
        const fetchDefinition = async () => {
            try{
                const resp = await axios.get( `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
                setDefinitions(resp.data);
                setLoading(false);
                const phonetics = resp.data[0].phonetics;
                if(!phonetics.length) return;
                const url = phonetics[0].audio.replace('//ssl', 'https://ssl');
                setAudio(new Audio(url));
            } catch (err){
                setExist(false);
            }
        }
        fetchDefinition();
    },[word])

    if(!exist) return <div className="d-flex align-items-center justify-content-center" style={{margin : "25vh 0", flexDirection : 'column'}}>
        <h3>Word not found</h3>
        <button className = "btn btn-primary my-2" onClick={() => navigate(-1)} style={{border:'none'}}> Go Back</button>
    </div>
    
    if(loading){
        return <div className="d-flex align-items-center justify-content-center" style={{margin : "25vh 0"}}> <HashLoader color="#add7ff" /> </div>
    }

    const logoBG = props.mode === '#212b42' ? '#212b42' : '#f1f3f4';

  return (
    <>
        <button className='my-3' onClick={() => navigate(-1)} style={{border:'none', background : `${logoBG}`}}><FaArrowCircleLeft style={{ fontSize: '40px', fill:'#FCC419' }} /></button>
        <div className="card my-3">
            <div className="container mx-auto my-3 d-flex justify-content-between" style={{height : '55px'}}>
                <h2 style={{textTransform : 'capitalize', color : '#AA336A', marginLeft : "10px", marginTop : '5px'}}>{word}</h2>
                {audio && <button onClick={() => audio.play()} style={{border:'none', background : 'white'}}><HiSpeakerWave style={{ fontSize: '40px', fill:'#FCC419' }}/></button>}
            </div>
        </div>

        {definitions.map((def, ind) =>
            <Fragment key={ind}>
                {def.meanings.map(meaning => 
                    <div className="card mx-auto mb-3" key = {meaning.partOfSpeech}>
                        <div className="container mx-auto my-3" style={{textTransform : 'capitalize'}}><span style={{ fontWeight: 'bold' }}>{meaning.partOfSpeech}</span></div>
                        {meaning.definitions.map((definition, idx) => 
                            <div className="container mx-auto my-2" key={definition.definition}>{`${idx+1}. `}{definition.definition}</div>
                        )}
                    </div>
                )}
            </Fragment>
        )}  
    </>
  )
}
