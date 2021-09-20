import React from 'react'
import '../App.css';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import SearchIcon from '@mui/icons-material/Search';

export default function Header() {
    return (
<nav className="navbar navbar-light bg-light">
    <div className="container-fluid">
    <FastfoodIcon className="mx-3" sx={{ fontSize: 80 }} color="success"/>
        <a href="/" className="navbar-brand" id="title">Recipe</a>
        <form className="d-flex">
            <input className="form-control" type="search" placeholder="Search a recipe" aria-label="Search"/>
            <button className="btn btn-success mx-4" type="submit"><SearchIcon/></button>
        </form>
    </div>
</nav>
    )
}
