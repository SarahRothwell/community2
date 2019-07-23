import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getSupports } from "../../actions/support";

const SupportList = ({ getSupports, support: { supports, loading } }) => {
  useEffect(() => {
    getSupports();
  }, [getSupports]);

  return (
    <Fragment>
      <div className='ui segment'>
        <h1>Support</h1>
        <h4>Find physicians and allied health professionals in your area</h4>
        <div className='search-filters'>
          <select class='ui dropdown'>
            <option value='0'>Province</option>
            <option value='1'>Ontario</option>
            <option value='2'>British Columbia</option>
          </select>
          <select class='ui dropdown'>
            <option value='0'>Condition</option>
            <option value='1'>MRSA</option>
            <option value='2'>C.difficile</option>
            <option value='3'>Surgical Site Infections</option>
          </select>
        </div>

        <div className='support-wrapper'>
          {supports.map((support, key) => (
            <div key={support.id} className='ui card'>
              <p className='header'>{support.name}</p>
              <div className='content'>
                <p>{support.description}</p>
                <p>Phone Number:{support.phone}</p>
                <p>
                  Website:{" "}
                  <a target='_blank' href='{support.website}'>
                    {support.website}
                  </a>
                </p>
                <p>
                  Address: {support.street}, {support.city}, {support.country}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

SupportList.propTypes = {
  getSupports: PropTypes.func.isRequired,
  support: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  support: state.support
});

export default connect(
  mapStateToProps,
  { getSupports }
)(SupportList);
