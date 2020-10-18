import React from 'react';
import { Paper, TextField } from '@material-ui/core';
import '../style/SearchBarStyle.css';

class SearchBar extends React.Component {
    state = {
        searchTerm: '',
    }

    handleChange = (event) => {
        this.setState({searchTerm: event.target.value});
    }

    handleSubmit = (event) => {
        const {searchTerm} = this.state;
        const {onFormSubmit} = this.props;

        onFormSubmit(searchTerm);

        event.preventDefault();
    }

    render() {
        return(
            <Paper elevation={6} className="text-field-paper">
                <form className="form-text-field" onSubmit={this.handleSubmit}>
                    <TextField className="text-field" fullWidth label="Search a movie" onChange={this.handleChange}/>
                </form>
            </Paper>
        )
    }
}


export default SearchBar;