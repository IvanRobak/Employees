import "./search-penal.css"
import AppFilter from "../app-filter/app-filter"

const SearchPenal = () => {
    return (
        <div className="search-penal">
            <input placeholder="Знайти працівника" type="text" className="form-control search-input" />
            <AppFilter/>
        </div>
    )
}
export default SearchPenal