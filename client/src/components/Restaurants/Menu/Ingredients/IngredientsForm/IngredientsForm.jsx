import React from 'react';


class IngredientsForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fields: {"itemNum": "", "id": `${Date.now() + Math.random()}` },
            errors: {}
        }
    }

    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Item
        if (!fields["itemNum"]) {
            formIsValid = false;
            errors["itemNum"] = "Cannot be empty";
        }

        this.setState({ errors: errors });
        return formIsValid;
    }

    handleSubmit(e) {
        e.preventDefault();

        if (this.handleValidation()) {
            this.props.generateIngres(this.state.fields.itemNum, this.state.fields.id, this.props.item)
            console.log(this.props.item)
            console.log(this.props.thing)
            console.log(this.props.restMenu)
            this.props.handleClose();
        } else {
            alert("Form has errors.")
        }

    }

    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <fieldset className="restForm">                    
                    <label>Number of Ingredients:</label>
                    <input ref="itemNum" type="number" min="1" max="15" onChange={this.handleChange.bind(this, "itemNum")} value={this.state.fields["itemNum"]}></input>
                    <input className="formBtn" type="submit" value="Submit"/>
                </fieldset>
            </form>
        );
    }
}

export default IngredientsForm