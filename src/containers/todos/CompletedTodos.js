import React, {useEffect} from 'react'
import TodoList from '../../components/todos/TodoList';
import {connect} from 'react-redux';
import {fetchTodos} from '../../store/actions/todosActions';
import AddTodoForm from '../../components/todos/AddTodoForm';
import FilterMenu from './FilterMenu';
import { COMPLETED } from '../../constants/filter';

const CompletedTodos = ({fetchTodos, todos}) => {

    useEffect(() => {
        fetchTodos(COMPLETED);
       return () => {
           fetchTodos(COMPLETED)
       }
   }, [fetchTodos])

    return (
            <>
                <AddTodoForm />
                <FilterMenu />
                <TodoList data={todos}/>
            </>
    )
}

const mapStateToProps = (ref) => {
    return {todos: ref.todos.items};
}

export default connect(mapStateToProps, {fetchTodos})(CompletedTodos)
