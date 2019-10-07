import React, { Component } from 'react';
import { Container, Row, Col ,Button, Card, CardBody,CardHeader} from 'reactstrap';
import List from '../../components/List';
import TodoForm from '../../components/Form';
import api from '../../services/api';

const initialState = {
    name: ''
}
class Home extends Component {

    state = {
        todos: [],
        todo: initialState
    };

    componentDidMount() {
        this.fetchTodos();
    }

    fetchTodos = () => {
        api.list()
        .then(async (response)=>{
            const data = await response.json();
            this.setState({todos: [...data],todo: initialState})
        })
        .catch((error)=>{
            console.error(error);
        });
    }

    onAdd = () => {
        this.setState({todo: {...initialState}});
    }

    onEdit = (item) => {
        this.setState({todo: {...item}});
    }

    onDelete = (todo) => {
        api.remove(todo.id)
        .then( (response)=>{
            this.fetchTodos();
        })
        .catch((error)=>{
            console.error(error);
        })
    }

    onTodoChange = (evt) => {
        const {todo} = this.state;
        const newTodo = {...todo,name: evt.target.value};
        this.setState({todo: newTodo});
    }

    onTodoSave = (evt) => {
        evt.preventDefault();
        const {todo} = this.state;
        if (todo.hasOwnProperty('id')) {
            api.update(todo)
            .then( (response)=>{
                this.fetchTodos();
            })
            .catch((error)=>{
                console.error(error);
            })
        }
        else {
            api.add(todo)
            .then(async (response)=>{
                this.fetchTodos();
            })
            .catch((error)=>{
                console.error(error);
            })            
        }

    }

    render() {
        const {todos,todo} = this.state;
        return (
            <Container>
                <Card>
                    <CardHeader>
                        Todo managment
                        <Button type='button' style={{float:'right'}} outline  color="primary" onClick={this.onAdd}>Add</Button>
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col sm="12" md="4">
                                <TodoForm 
                                    todo={todo} 
                                    onSubmit={this.onTodoSave}
                                    onChange={this.onTodoChange}/>
                            </Col>

                            <Col>
                                Todo list
                                <List 
                                todos={todos} 
                                onEdit={this.onEdit} 
                                onDelete={this.onDelete} />
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Container>
            
        )
    }
}

export default Home;