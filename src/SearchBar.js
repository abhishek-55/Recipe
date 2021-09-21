import React from 'react'
import './App.css';

export default function SearchBar() {
    return (
    <>
    <p className="helper-text">Have ingredients but don't know which food to make enter your ingredients seperated by a comma to match a recipe for your ingredients </p>
        <div class="input-group mb-3 ingredients-input">
            <input type="text" class="form-control" placeholder="eg: tomato,potato" aria-label="Recipient's username" aria-describedby="button-addon2"/>
            <button class="btn btn-success" type="button" id="button-addon2">Search</button>
        </div>
    </>
    )
}
