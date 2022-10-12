import React from 'react'

const Search = ({ text, setText }) => {
    const handleChange = (value) => {
        setText(value)
    }
    return (
        <>
            <form action="">
                <input type="text" placeholder='Enter coin name' onChange={(e) => handleChange(e.target.value)} style={{ margin: "2%", width: "50%", height: "50px", borderRadius: "5px" }} />
            </form>
        </>
    )
}

export default Search