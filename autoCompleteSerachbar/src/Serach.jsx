import React, { useEffect, useState } from "react";

const Serach = () => {
  const [search, setSearch] = useState("");
  const[result,setResult ] =useState([])
  const[showResult,setShowResult] = useState(false)
  const[cacehe , setCache] = useState({})

  const SearchINput = async () => {


if(cacehe[search]){
    console.log("Cache Returend", search)
    setResult(cacehe[search])
    return;
}




    console.log("API Call" , search)
    const res = await fetch('https://dummyjson.com/recipes/search?q=' +search
    );

    const data = await  res.json();
    setResult(data?.recipes)

    setCache((prev)=>({...prev,[search]: data?.recipes}))
};

  useEffect(() => {

    const timer = setTimeout( SearchINput,300)
   
    return(()=>{
        clearTimeout(timer)
    })
  },[search]);
  return (
    <div className="container">
    <div>
      <input className="input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Enter your search"
        onFocus={()=>setShowResult(true)}
        onBlur={()=>setShowResult(false)}
      />
    </div>
   {
    showResult &&(
        <div className="search-output">
        {
            result.map((r)=>(
                <span className="span" key={r.id}>{r.name}</span>
            ))
        }
    </div>
    )
   }
    </div>
  );
};

export default Serach;
