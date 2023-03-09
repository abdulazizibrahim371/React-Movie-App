import React, { Component } from 'react';
import MoviesTable from './moviesTable';
import ListGroup from './common/ListGroup';
import Pagination from './common/pagination';
import {getMovies} from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import { paginate } from '../utils/paginate';
import _ from 'lodash';
class Movies extends Component {
    state = { 
        movies: [],
        genres: [],
        currentPage:1,
        
        pageSize: 4,
        sortColumn: {path: 'title', order:'asc'}
     } ;
     componentDidMount(){
         const genres=[{_id:"", name:"All Movies"}, ...getGenres()]
         this.setState({movies:getMovies(), genres})
     }
    render() { 
        if(this.state.movies.length===0) return <p>There are no movies inside the database</p>
        const {length:count }=this.state.movies;
        const {currentPage,sortColumn, pageSize, selectedGenre, movies:allMovies}=this.state;
        const filtered=selectedGenre && selectedGenre._id? allMovies.filter(m=>m.genre._id===selectedGenre._id):allMovies;
        const sorted=_.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
        const movies=paginate(sorted, filtered, currentPage, pageSize);
        return (
            <div className='row'>
               <div className="col-2">
                   <ListGroup 
                   items={this.state.genres}
                   selectedItem={this.state.selectedGenre}
                   onItemSelect={this.handleGenreSelect}/>
               </div>
               <div className="col">
               <p>
                There are {filtered.length} movies inside the database</p>
           <MoviesTable 
           movies={movies} 
           onLike={this.handleLike} 
           onDelete={this.handleDelete}
           onSort={this.handleSort}/>
            <Pagination
             itemsCount={filtered.length} 
             pageSize={pageSize}
             currentPage={currentPage}
             onPageChange={this.handlePageChange}/>
               </div>
            
            </div>
        );
    }
    handleDelete=(movie)=>{
        const count=this.state.movies.filter(c=>(c._id!==movie._id))
        this.setState({movies: count})
    }
    handleLike=(movie)=>{
        const movies=[...this.state.movies]
        const index=movies.indexOf(movie)
        movies[index]={...movies[index]}
        movies[index].liked=!movies[index].liked
        this.setState({movies})
    }
    handlePageChange = page =>{
       this.setState({currentPage: page})
    }
    handleGenreSelect=genre=>{
        this.setState({selectedGenre: genre, currentPage:1});
    }
    handleSort=path=>{
        this.setState({sortColumn:{path, order:'asc'}});
    }
}
 
export default Movies; 