import React from "react";

const MovieCard = (props) => {

  const {title, description, director, release_date} = props;
  console.log(props);
  return (
    <div className="film-list">
      <h2>Film Title: {title} </h2>
      <p> Film Description: {description} </p>
      <div className="bottom">
        <p>Director: {director} </p>
        <p>Release Date: {release_date} </p>
      </div>
    </div>
  );
};

export default MovieCard;

// const MovieCard = (props) => {
//   console.log(props);
//   return (
//     <div className="film-list">
//       <h2>Film Title: {props.title} </h2>
//       <p> Film Description: {props.description} </p>
//       <div className="bottom">
//         <p>Director: {props.director} </p>
//         <p>Release Date: {props.release_date} </p>
//       </div>
//     </div>
//   );
// };
