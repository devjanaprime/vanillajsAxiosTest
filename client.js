let displayResults = ( results ) => {
  let ul = document.getElementById( 'responseOut' );
  ul.innerHTML = '';
  for( item of results.results ){
    let li = document.createElement( 'li' );
    li.innerHTML = item.name;
    ul.appendChild( li );
  } //end for
} // end displayResults
let searchNow = () =>{
  let searchTerm = document.getElementById( 'searchIn' ).value;
  axios.get( 'https://swapi.co/api/people/?search=' + searchTerm )
    .then( function( response ){
      displayResults( response.data );
    });
} // end searchNow
