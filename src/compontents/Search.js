import React,{useState} from 'react';

const Search = (props) => {
    
    const [search,setSearch] = useState('');
    const [searchType,setSearchType] = useState('all');

    const searchFunc = (e) => {
       if(e.key === 'Enter') {
           props.cb(search, searchType);
       }
    }

    const handleFilter = (e) => {
        setSearchType(e.target.dataset.type);
        props.cb(search, searchType);      
    }

    
    return (
        <div className="container search__block">
            <div className="row">
                <div className="col s12 relative">
                    <input 
                    placeholder="Search"
                    id="email_inline"
                    type="search"
                    className="validate" 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={searchFunc}
                    />
                        <button className="waves-effect waves-light btn-small search-btn" onClick={() => props.cb(search)}>Enter</button>
                </div>
            </div>
            <div className="center">
                <label>
                        <input className="with-gap" name="searchName" type="radio" data-type="all" onChange={handleFilter} checked={searchType === 'all'}/>
                    <span>All</span>
                </label>
                <label>
                        <input className="with-gap" name="searchName" type="radio" data-type="movie" onChange={handleFilter} checked={searchType  === 'movie'}/>
                    <span>Movie</span>
                </label>
                <label>
                        <input className="with-gap" name="searchName" type="radio" data-type="series" onChange={handleFilter} checked={searchType  === 'series'}/>
                    <span>Series</span>
                </label>
                <label>
                        <input className="with-gap" name="searchName" type="radio" data-type="game" onChange={handleFilter} checked={searchType === 'game'}/>
                    <span>Game</span>
                </label>
            </div>
        </div>
    )
    
}

export default Search;