import { Component } from 'react'

import AppInfo from '../app-info/app-info'
import SearchPenal from '../search-penal/search-penal'
import EmloyeesList from '../employees-list/employees-list'
import EmployeesForm from '../employees-add-form/employees-add-form'
import AppFilter from '../app-filter/app-filter'

import './app.css'
class App extends Component {
        state = {
            data : [
                { name: 'John', salary: 1000, increase: false, rise: true, id:1 },
                { name: 'Kety', salary: 300, increase: true, rise: false, id:2 },
                { name: 'Mery', salary: 500, increase: false, rise: false, id:3  }
            ],
            term: "",
            filter: "all",
        }

        maxId = 4       

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
            rise: false,
            id: this.maxId ++
        }

        this.setState(({data}) => {
            const newArr = [...data, newItem]
            return {
                data: newArr
            }
        })
    }

    onToggleIncrease = (id) => {
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, increase: !item.increase}
                }
                return item;
            })
        }))
    }

    onToggleRise = (id) => {
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, rise: !item.rise}
                }
                return item;
            })
        }))
    }

    searchEmp = (items, term)=>{
        if (term.length === 0) {
            return items
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term})
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.rise);
            case 'moreThen1000':
                return items.filter(item => item.salary > 1000 )
            default:
                return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter})
    }

    render() {
        const {data, term, filter} = this.state
        const employees = this.state.data.length
        const increased = this.state.data.filter(item => item.increase).length
        const visibleData = this.filterPost(this.searchEmp(data,term), filter)

        return (
            <div className="app">
                <AppInfo employees={employees} increased={increased} />

                <div className="search-penal">
                    <SearchPenal onUpdateSearch={this.onUpdateSearch} />  
                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
                </div>
                
                <EmloyeesList 
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleRise={this.onToggleRise}
                />
                <EmployeesForm onAdd={this.addItem} />
            </div>
        )
    }
}

export default App