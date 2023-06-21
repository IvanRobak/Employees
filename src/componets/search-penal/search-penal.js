import { Component } from "react"
import "./search-penal.css"
import AppFilter from "../app-filter/app-filter"

class SearchPenal extends Component{
    constructor(props) {
        super(props)
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value
        this.setState({ term })
        this.props.onUpdateSearch(term)
    }

    render() {
        return (
            <div className="search-penal">
                <input 
                    placeholder="Знайти працівника" 
                    type="text" 
                    className="form-control search-input"
                    value={this.state.term}
                    onChange={this.onUpdateSearch}/>
                
                <AppFilter/>
            </div>
        )
    }
}
export default SearchPenal