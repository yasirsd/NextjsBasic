'use client';

import React, {useState} from "react";

interface dataFormProps{
    searchCallback: (v: string)=>void
}
export default function SearchBar ({searchCallback = () => {} }: dataFormProps) {
    console.log("searchCallback(searchText)===", searchCallback)
    const [searchText, setSearchText] = useState('')
    console.log('SEARCHTEXT', searchText)

    const onSearch =() => {
        searchCallback(searchText)
        setSearchText('')
    }
    return (
        <>
         <div className="input-group">
            <h1>This Search is made Using NEXTJS & Prisma...</h1>
            <h1>NOTE: Search functionality is not yet Implemented. Working on it :) </h1>
                <div>
                    <input value={searchText} type="text" className="input" id="Email" name="Email" placeholder="Enter a Course Name" onChange={e => setSearchText(e.target.value)}/>
                    <input className="button--submit" value="Search" type="submit" onClick={() => onSearch()}/>
                </div>
          </div>
      </>
    )
}