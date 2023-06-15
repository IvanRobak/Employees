import './app.css'
import AppInfo from '../app-info/app-info'
import SearchPenal from '../search-penal/search-penal'
import EmloyeesList from '../employees-list/employees-list'
import EmployeesForm from '../employees-add-form/employees-add-form'

function App() {
    return (
        <div className="app">
            <AppInfo />
            <SearchPenal />  
            <EmloyeesList />
            <EmployeesForm/>
        </div>
    )
}

export default App