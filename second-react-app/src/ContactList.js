
function ContactList(props){
    console.log(props)
    return(
        <ol>
            {
                props.contacts.map((contact)=>(
                    <li 
                    key={contact.id} 
                    className="contact-list-item">
                        <div
                            className="contact-avatar"
                            style={{
                                background: `url(${contact.avatarURL})`
                            }}
                            >

                        </div>
                        <div className="contact-details">
                            <p className="">{contact.name}</p>
                            <p className="">{contact.handle}</p>
                        </div>
                        <button 
                            className="contact-remove" 
                            onClick={() => props.onDeleteContacts(contact)}>Remove</button>
                    </li>
                ))
            }
        </ol>

    );
}


export default ContactList; 