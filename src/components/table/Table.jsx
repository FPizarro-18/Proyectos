import React, { Component } from 'react';
import Tr from '../../components/tr/Tr';
import {Table as TableRS } from 'reactstrap';



class Table extends Component {

    getAlive = a => a ? 'SI' : 'NO';
    getAction = a => a ? 'Matar' : 'Revivir';

    handlerToggleAlive = (user) => {
        const i = this.state.users.findIndex(e => e.id === user.id);
        return (event) => {
            const nL = this.state.users;
            nL[i].alive = !nL[i].alive;

            this.setState({
                users: nL,
            })
        }
    }

    render() {
        return (
            <TableRS hover striped>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Edad</th>
                        <th>Vive</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                <Tr/>
                </tbody>
                
                
            </TableRS>
            
        );
    }
}

export default Table;