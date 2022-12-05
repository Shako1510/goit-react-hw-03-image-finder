import { React, Component } from 'react';
import PropTypes from "prop-types";
import css from "./Searchbar.module.css";

class Searchbar extends Component {

    render() {

        return (

            <header className={css.searchBar} >
                <form className={css.searchForm}>
                    <button type="submit" className={css.searchFormButton}>
                        <span className={css.searchFormLabel} >Search</span>
                    </button>

                    <input
                        className={css.searchFormInput}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header >
        )
    }

}

export default Searchbar;



Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,

};