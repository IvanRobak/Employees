import { Component } from 'react'
import './employees-add-form.css'

class EmployeesForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            salary: ""
        }
    }

    onValueChange = (e) => {       
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit = (e) => {
       e.preventDefault();
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
    }

    render() {
        const {name, salary}= this.state

        return (
            <div className="app-add-form" onSubmit={this.onSubmit}>
                <h3>Додайте нового працівника</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Як його звати?" 
                        onChange={this.onValueChange}
                        name="name"
                        value={name}
                        />                       
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="З/П в $?" 
                        onChange={this.onValueChange}
                        name="salary"
                        value={salary}
                        />
                    <button type="submit"
                        className="btn btn-outline-light">Додати</button>
                </form>
            </div>
        )
    }
}
export default EmployeesForm