import React, { Component } from 'react';

const post = async (data) => {
    const { url } = data;

    delete data.url;

    const params = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    };

    const response = await fetch(url, params);

    if (response.status < 200 && response.status >= 300) {
        const res = await response.json();

        throw new Error(res);
    }

    return response.json();
};

class FormComponent extends Component {
    state = {
        error: null,
        submitted: false,
        fields: { name: '', email: '', message: '' }
    };

    submitForm(event) {
        const formElement = event.target;
        const { name, email, message } = formElement.elements;
        // build the request payload which includes the url of the end-point we want to hit
        const payload = {
            url: 'api/contact',
            name: name,
            email: email,
            message: message,
        };

        // call the post helper function which returns a promise, which we can use to update the
        // state of our component once returned
        post(payload)
            .then(() => {
                // on success, clear any errors and set submitted state to true
                this.setState({ error: null, submitted: true });
            })
            .catch(error => {
                // on error, update error state with the error message and set submitted to false
                this.setState({ error: error.message, submitted: false });
            });
    }

    render() {
        return (
            <form ref={this.formElement}
                onSubmit={(event) => this.submitForm(event)}>
                <input type="text"
                    name="name"
                    id="name" />
                <input type="email"
                    name="email"
                    id="email" />
                <input type="textarea"
                    name="message"
                    id="message" />
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default FormComponent;