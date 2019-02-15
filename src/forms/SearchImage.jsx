import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getImages } from '../services/Images/actions';
import SearchForm from './Image';

const Card = styled.div`
  margin-top: 25px;
`;

class SearchImage extends Component {
    static propTypes = {
        getImages: PropTypes.func.isRequired,
    }

    render() {
        return (
            <Card className="card">
                <div className="card-body">
                    <SearchForm
                        onSubmit={({ imageCount }) => {
                            this.props.getImages(imageCount);
                        }}
                    />
                </div>
            </Card>
        );
    }
}

const mapDispatchToProps = {
    getImages,
};

export default connect(() => ({}), mapDispatchToProps)(SearchImage);
