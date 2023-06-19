import { Component } from 'react'

import AppInfo from '../app-info/app-info'
import SearchPenal from '../search-penal/search-penal'
import EmloyeesList from '../employees-list/employees-list'
import EmployeesForm from '../employees-add-form/employees-add-form'

import './app.css'


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data : [
                { name: 'John', salary: 1000, increase: false, id:0 },
                { name: 'Kety', salary: 300, increase: true, id:2 },
                { name: 'Mery', salary: 500, increase: false, id:3  }
            ]
        }
        this.maxId = 4
    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name,salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            id: this.maxId ++
        }

        this.setState(({data}) => {
            const newArr = [...data, newItem]
            return {
                data: newArr
            }
        })
    }
    render() {
        return (
            <div className="app">
                <AppInfo />
                <SearchPenal />  
                <EmloyeesList data={this.state.data} onDelete={this.deleteItem} />
                <EmployeesForm onAdd={this.addItem} />
            </div>
        )
    }
}

export default App