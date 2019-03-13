import React, {Component} from 'react';

import Details from './Details';

class Contact extends Component {
    constructor() {
        super();
        this.state = {
            contactDetails: [
                {
                    name: "Raj Barnwal", contact: 8527884743
                },

                {
                    name: "Arun", contact: 9528741025
                },
                {
                    name: "Arvind", contact: 7815420150
                }
            ],
            showContact: false,
            showText: false
        };
    }

    updateDetails = (newName) => {
        this.setState({
            contactDetails: [
                {
                    name: newName, contact: 8460884743
                },

                {
                    name: newName, contact: 9528741025
                },
                {
                    name: newName, contact: 7815420150
                }
            ]
        })
    };

    nameChangeHandler = (event) => {
        this.setState({
            contactDetails: [
                {
                    name: event.target.value, contact: 8527884743
                },

                {
                    name: "Agam Agarwal", contact: 8514039505
                },
                {
                    name: "Jitender", contact: 7815420150
                }
            ]
        })
    };

    showHideContact = () => {
        const isShow = this.state.showContact;
        const isShowText = this.state.showText;
        this.setState({
            showContact : ! isShow,
            showText : !isShowText
        });
    };

    render() {
        let message = null ;
        if(this.state.showText) {
            message = (
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, hic.</div>

            )
        }
        return (
            <div>
                <button className="btn" onClick={() => this.updateDetails("Raj Kumar")}>Data Updated</button>
                <button className="btn" onClick={this.showHideContact}>Data Show/Hide</button>
                {
                    (this.state.showContact) ?
                        <Details name={this.state.contactDetails[0].name}
                                 contact={this.state.contactDetails[0].contact}
                                 clickCheck={() => this.updateDetails("Noida")}
                                 changedName={this.nameChangeHandler}
                        />
                        : null
                }
                {message}
            </div>
        )
    }
}

export default Contact;
