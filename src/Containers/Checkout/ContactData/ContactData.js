import React, {Component} from 'react';
import Button from '../../../Components/UI/Button/Button';
import CDClaases from './ContactData.css';

class ContactData extends Component {
    state = {
        
                    name: 'Amit Ashekar',
                    address: {
                        street: 'test street 1',
                        zipCode: '43256',                        
                    },
                    email: 'abc@test.com'
            
    }
    render() {
        return(
            <div className = {CDClaases.ContactData}>
                <input type = "text" name="name" placeholder="name" />
                <input type = "email" name="street" placeholder="street" />
                <input type = "street" name="name" placeholder="street" />
                <input type = "zipcode" name="zipcode" placeholder="zipcode" />
                <Button type = "Success" >Order</Button>                
            </div>
        )
    }
}

export default ContactData;