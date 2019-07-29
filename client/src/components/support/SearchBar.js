//Search form to filter support types by medical condition & location

import React, { Fragment, useState } from "react";
//redux
import { connect } from "react-redux";
import { search } from "../../actions/support";
import PropTypes from "prop-types";

const SearchBar = ({ filterSupports }) => {
  const [searchFormData, setFormData] = useState({
    location: "",
    condition: ""
  });

  const { location, condition } = searchFormData;

  const onChange = e =>
    setFormData({ ...searchFormData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    search({ location, condition });
  };

  return (
    <Fragment>
      <div className='ui segment'>
        <form className='ui form' onSubmit={e => onSubmit(e)}>
          <div className='field'>
            <label>Province</label>
            <select
              name='location'
              value={location}
              onChange={e => onChange(e)}
            >
              <option value='Ontario'>Ontario</option>
              <option value='British Columbia'>British Columbia</option>
              <option value='Quebec'>Quebec</option>
              <option value='Alberta'>Alberta</option>
            </select>
          </div>
          <div className='field'>
            <label>Medical Condition</label>
            <select
              name='condition'
              value={condition}
              onChange={e => onChange(e)}
            >
              <option value='CDI'>C. difficile</option>
              <option value='MRSA'>MRSA</option>
              <option value='Surgical Site Infections'>
                Surgical Site Infections
              </option>
            </select>
          </div>
          <button type='submit' className='ui primary button' value='submit'>
            Submit
          </button>
        </form>
      </div>
    </Fragment>
  );
};

SearchBar.propTypes = {
  search: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { search }
)(SearchBar);
