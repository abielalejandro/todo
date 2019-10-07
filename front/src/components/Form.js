import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Form, Input, Label,FormGroup, Button } from 'reactstrap';

const TodoForm = ({onSubmit, onChange,todo}) =>{

    return (
        <Form onSubmit={onSubmit} id="form">
            <FormGroup >
                <Label>Name</Label>
                <Input
                    value={todo.name}
                    onChange={onChange}
                    required
                    type="text"
                    placeholder='Name' />
            </FormGroup>
            <FormGroup >
                <Button type="submit" color="primary"  disabled={todo.name.length===0}>Save</Button>
            </FormGroup>
    </Form>);
}

TodoForm.propTypes = {};

export default TodoForm;