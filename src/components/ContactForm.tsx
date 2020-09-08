import React, { Component } from 'react';

import '../scss/contactform.scss';

interface IProps {

}
interface IState {

}

class ContactForm extends Component<IProps, IState> {
    constructor (props: IProps) {
        super(props);

        this.state = {
           
        }
    }

    render () {
        return (
          <form className="ContactForm" action="https://formspree.io/geoffrey.frioli@gmail.com" method="POST">
            <label htmlFor="email">
              <input 
                className="FormMail"
                type="email" 
                name="_replyto" 
                placeholder="Email"
                required
              />
            </label>
            <label htmlFor="subject">
              <input 
                className="FormSubject"
                type="text" 
                name="subject" 
                placeholder="Sujet"
                required
              />
            </label>
            <label htmlFor="text">
                <textarea
                  className="FormTextarea"
                  name="text"
                  placeholder="Entrer votre message..." 
                />
            </label>
            <div className="ContactButtonDiv">
            <button className="FormButton" type="submit" value="send">ENVOYER <span></span><span></span><span></span></button>
            </div>
          </form>
        )
    }
};

export default ContactForm;