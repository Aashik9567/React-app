import React, { useEffect, useState } from "react";

const Dictionary = () => {
    const [meanings,setMeanings]=useState()
    const [text, setText] = useState();
    const [word,setWord]=useState()
    async function fetchData(){
        try{
         let data=await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
         var finalData=await data.json()
        }catch(error){
           console.log(error)
        }
        setMeanings(finalData[0].meanings)
        console.log(finalData[0].meanings)
    }
    const handleWord=(e)=>{
        setText(e.target.value)
    }
    function handleSearch(e){
        e.preventDefault()
        setWord(text)
    }
    useEffect(()=>{
     fetchData()
   },[word])
  return (
    <>
    
     <div className="mt-10 max-w-md mx-auto font-bold">
     
     <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <form>
        <input type="text" id="default-search" className="block w-full p-4 ps-10 text-xl text-gray-900 border border-gray-300 rounded-xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleWord} placeholder="Search Words..."/>
        <button className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleSearch} type="submit">Search</button>
        </form>
       </div>
       <div/>
     <div>
        <div className="block mx-auto mt-6 p-2.5 text-md bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            
        {
            meanings?.map((item)=>{
                return(
                    <>
                    <p><span className="text-red-400">Part of speech:</span> {item.partOfSpeech}</p>
                    <p><span className="text-red-400">Meaning:</span> {item.definitions[0].definition}</p>
                    <hr />
                    </>
                )
            })
        }
       </div>
       
      </div>
        
      </div>
    </>
  );
};

export default Dictionary;
