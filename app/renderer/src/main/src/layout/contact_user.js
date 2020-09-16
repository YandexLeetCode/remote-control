import React from 'react';
import contact_user from '../style/contact_user.module.css'

class ContactUser extends React.Component {
    constructor(props) {
        super(props)
    }


    render () {
        return (
            <div className={contact_user.container}>ContactUser</div>
        )
    }
}

export default ContactUser