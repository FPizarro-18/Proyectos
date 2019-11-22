import React, { Component } from 'react';
import Td from '../../components/td/Td';
import { users } from '../../utils/mock-data';



class Tr extends Component {
    


    render() 
    {
        return(
            users.map(item => (
                <>
                    <tr key={item.id}>
                        <Td/>
                    </tr>
                </>
             ))
        );

    }
}

export default Tr;