
import './App.css';
import Header from './componants/Header';
import Movie from './componants/Movie';
import movies from './componants/data.json'


function App(props) {
  
 
  return (
    
    <div className='app'>

    <Header />


    <div className="main">
        {
          movies.map((element, index) => {

           return (<Movie
           key = {index}
              title ={element.Title}
              imdb = {element.imdb}
              year = {element.Year}
              time = {element.Runtime}
              img = {element.Poster}
             />)
          })
        }
 
     
    </div>

    </div>

  );
}

export default App;
