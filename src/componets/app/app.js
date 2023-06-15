import './app.css'
import AppInfo from '../app-info/app-info'
import SearchPenal from '../search-penal/search-penal'
import EmloyeesList from '../employees-list/employees-list'
import EmployeesForm from '../employees-add-form/employees-add-form'

const data = [
    { name: 'John', salary: 1000, increase: false, id:1 },
    { name: 'Kety', salary: 300, increase: true, id:2 },
    { name: 'Mery', salary: 500, increase: false, id:3  }
]

function App() {
    return (
        <div className="app">
            <AppInfo />
            <SearchPenal />  
            <EmloyeesList data={data} />
            <EmployeesForm/>
        </div>
    )
}

export default App