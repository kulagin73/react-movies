import { Component } from 'react';

class Search extends Component {
    state = {
        search:'',
        searchType: 'all'
    }

    searchFunc = (e) => {
       if(e.key === 'Enter') {
           this.props.cb(this.state.search, this.state.searchType);
       }
    }

    handleFilter = (e) => {
        this.setState(() => ({searchType: e.target.dataset.type}),() => {
            this.props.cb(this.state.search, this.state.searchType);
        });
    }

    render() {
        return (
            <div className="container search__block">
            <div className="row">
                <div className="col s12 relative">
                    <input 
                    placeholder="Search"
                    id="email_inline"
                    type="search"
                    className="validate" 
                    value={this.state.search}
                    onChange={(e) => this.setState({search: e.target.value})}
                    onKeyDown={this.searchFunc}
                    />
                        <button className="waves-effect waves-light btn-small search-btn" onClick={() => this.props.cb(this.state.search)}>Enter</button>
                </div>
            </div>
            <div className="center">
                <label>
                        <input className="with-gap" name="searchName" type="radio" data-type="all" onChange={this.handleFilter} checked={this.state.searchType === 'all'}/>
                    <span>All</span>
                </label>
                <label>
                        <input className="with-gap" name="searchName" type="radio" data-type="movie" onChange={this.handleFilter} checked={this.state.searchType  === 'movie'}/>
                    <span>Movie</span>
                </label>
                <label>
                        <input className="with-gap" name="searchName" type="radio" data-type="series" onChange={this.handleFilter} checked={this.state.searchType  === 'series'}/>
                    <span>Series</span>
                </label>
                <label>
                        <input className="with-gap" name="searchName" type="radio" data-type="game" onChange={this.handleFilter} checked={this.state.searchType === 'game'}/>
                    <span>Game</span>
                </label>
            </div>
        </div>
        )
    }
}

export default Search;