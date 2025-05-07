import React from "react";

class FormInput extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            body : ''
        }
        this.onTitleSubmitHandler = this.onTitleSubmitHandler.bind(this)
        this.onBodySubmitHandler = this.onBodySubmitHandler.bind(this)
        this.onSubmitHandler = this.onSubmitHandler.bind(this)
    }
    onTitleSubmitHandler(event) {
        this.setState(() => {
            return {
                title: event.target.value,
            }
        })
    }
    onBodySubmitHandler(e) {
        this.setState(() => {
            return {
                body : e.target.value,
            }
        })
    }
    onSubmitHandler(e) {
        e.preventDefault()
        this.props.addNotes(this.state)
        this.setState({ title: '', body: '' });
    }
    render() {
        return (
            <form className="note-input" onSubmit={this.onSubmitHandler}>
                <input
                    className="note-input__title"
                    type="text"
                    placeholder="created title..."
                    value={this.state.title}
                    onChange={this.onTitleSubmitHandler}
                />
                <textarea className="note-input__body" name="messgae" id="message" placeholder="created message" value={this.state.body} onChange={this.onBodySubmitHandler}></textarea>
                <button>add</button>
           </form>
       )
    }
}

export default FormInput