import React from 'react';
import Like from './common/like';
const MoviesTable = (props) => {
    const {movies, onDelete, onLike, onSort}= props
    return ( <table className='table'>
    <thead>
        <tr>
        <th onClick={()=>onSort('title')}>Title</th>
        <th onClick={()=>onSort('genre')}>Gener</th>
        <th onClick={()=>onSort('numberInStock')}>NumberInStock</th>
        <th onClick={()=>onSort('dailyRentalRate')}>DailyRentalRate</th>
        <th></th>
        <th></th>
        </tr>
    </thead>
    <tbody>
    {movies.map(movie=> (
      <tr key={movie._id}>
            <td>{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td>
                <Like onLiked={()=>onLike(movie)} liked={movie.liked}/>
            </td>
            <td><button onClick={()=>onDelete(movie)} className='btn btn-danger btn-sm'>Delete</button></td>
        </tr>
        ))}
   </tbody>
</table>  );
}
 
export default MoviesTable;