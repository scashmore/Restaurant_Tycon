import React from 'react';

class EditForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fields: {"name": "", "cuisine": "", "menu": ""},
            errors: {}
        }
    }

    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Name

        if (!fields["name"]) {
            formIsValid = false;
            errors["name"] = "Cannot be empty";
        }

        //Cuisine

        if (!fields["cuisine"]) {
            formIsValid = false;
            errors["cuisine"] = "Cannot be empty";
        }

        if (typeof fields["cuisine"] !== "undefined") {
            if (!fields["cuisine"].match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                errors["cuisine"] = "Only letters";
            }
        }

        //Menu Item #
        if (!fields["menu"]) {
            formIsValid = false;
            errors["menu"] = "Cannot be empty";
        }

        this.setState({ errors: errors });
        return formIsValid;
    }

    handleSubmit(e) {
        e.preventDefault();

        if (this.handleValidation()) {
            this.props.updateRestaurant(this.state.fields.name, this.state.fields.cuisine, this.state.fields.menu, this.props.restId);
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
                    <label>Change Restaurant Name:</label>
                    <input ref="name" type="text" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]} placeholder={`${this.props.restName}`}></input>
                    <label>Cuisine Type:</label>
                    <input ref="cuisine" type="text" onChange={this.handleChange.bind(this, "cuisine")} value={this.state.fields["cuisine"]} placeholder={`${this.props.restCuisine}`}></input>
                    <label>Number of Menu Itmes:</label>
                    <input ref="menu" type="number" min='1' max='15'onChange={this.handleChange.bind(this, "menu")} value={this.state.fields["menu"]} placeholder={`${this.props.restMenuNum}`}></input>
                    <input className="formBtn" type="submit" value="Submit"/>
                </fieldset>
            </form>
        );
    }
}

export default EditForm