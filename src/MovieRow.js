import React, { Component } from 'react'

class MovieRow extends Component {

    viewMovie() {
        const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
        window.location.href = url
    }

    render() {
        return (
            <table
                key={this.props.movie.id}
                style={{
                    paddingTop: 8,
                    paddingRight: 16,
                    paddingLeft: 16,
                    paddingBottom: 8
                }}>
                <tbody>
                    <tr>
                        <td>
                            <img alt="poster" width="120" src={this.props.movie.poster_src} />
                        </td>
                        <td
                            style={{
                                textAlign: 'left',
                                paddingLeft: 16
                            }}>
                            <h3>{this.props.movie.title}</h3>
                            <p>{this.props.movie.overview}</p>

                            <input
                                onClick={this.viewMovie.bind(this)}
                                type="button"
                                value="View" />
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default MovieRow
