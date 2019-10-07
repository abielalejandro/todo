import React from 'react';
import PropTypes from 'prop-types';
import {Table, ButtonGroup, Button } from 'reactstrap';

const List = ({todos, onEdit,onDelete}  ) =>{
    return (<Table responsive hover>
        <thead>
            <tr>
            <th style={{width:'80%'}}>Name</th>
            <th></th>
            </tr>
        </thead>
        <tbody>
        {todos && todos.map( (row,i)=>{
                return (<tr key={row.id}>
                    <td style={{width:'80%'}}>{row.name}</td>
                    <td className='text-center'>
                        <ButtonGroup >
                            <Button type='button' color="info" onClick={()=>onEdit(row)}>Edit</Button>
                            <Button type='button' color="danger" onClick={()=>onDelete(row)}>Delete</Button>
                        </ButtonGroup>
                    </td>
                </tr>)
            })}            
        </tbody>
    </Table>);
}

List.propTypes = {
    todos: PropTypes.array.isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default List;