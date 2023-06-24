import { Component } from "react"
import "./search-penal.css"

class SearchPenal extends Component{
        state = {
            term: ''
        }

    onUpdateSearch = (e) => {
        const term = e.target.value
        this.setState({ term })
        this.props.onUpdateSearch(term)
    }

    render() {
        return (
            <input 
                placeholder="Знайти працівника" 
                type="text" 
                className="form-control search-input"
                value={this.state.term}
                onChange={this.onUpdateSearch}
            />
        )
    }
}
export default SearchPenal