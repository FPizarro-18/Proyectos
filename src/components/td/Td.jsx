import React, { Component } from 'react';
import { users } from '../../utils/mock-data';
import { Button} from 'reactstrap';

class Td extends Component {

    constructor(props) {
        super(props);
        this.state = {
          users,  
        };
    }

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
            
            this.state.users.map(item =>(

                <>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{this.getAlive(item.alive)}</td>
                            <td>
                                <Button
                                block
                                    color={item.alive ? 'danger' : 'success'}
                                    onClick={this.handlerToggleAlive(item)} >{this.getAction(item.alive)}</Button>
                            </td>
                </>
            ))
                
        );
    }
}

export default Td;