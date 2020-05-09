import React, { Component } from 'react'
import MovieRow from './MovieRow'
import $ from 'jquery'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {}

    this.performSearch("12")
  }

  performSearch(searchTerm) {
    console.log("perform search using movie db")

    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query="+searchTerm
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("Fetched data successfully")

        const results = searchResults.results

        var movieRows = []

        results.forEach((movie) => {
          movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path

          const movies = <MovieRow
            key={movie.id}
            movie={movie} />

          movieRows.push(movies)
        });

        this.setState({
          rows: movieRows
        })

      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data")
      }
    })
  }

  searchEventHandler(event) {
    const searchTerm = event.target.value
    this.performSearch(searchTerm)
  }

  render() {
    return (
      <div className="App">
        <table
          style={{
            backgroundColor: '#202020',
            display: 'block',
            paddingLeft: 10,
            paddingRight: 10,
            color: '#f1f1f1',
            fontSize: 24
          }}
        >
          <tbody>
            <tr>
              <td>
                <h3>Movie Search</h3>
              </td>
            </tr>
          </tbody>
        </table>

        <input
          style={{
            display: 'block',
            width: '50%',
            padding: 8,
            marginTop: 8,
            marginBottom: 16,
            marginRight: 16,
            marginLeft: 16,
            fontSize: 16
          }}
          onChange={this.searchEventHandler.bind(this)}
          placeholder="I want to watch ..." />

        {this.state.rows}
      </div>
    )
  }
}

export default App;