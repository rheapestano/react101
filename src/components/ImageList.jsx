import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getImages } from '../services/Images/actions';
import Image from './Image';
import { isArray } from 'util';
import { isNil } from 'lodash';
import { Container, Row, Col } from 'reactstrap';


const ImageListContainer = styled.div`
    margin-top: 25px;
`;

const LoadingText = styled.h3`
    position: relative;
    color: #FFFFFF;
`;

class ImageList extends Component {
    static propTypes = {
        Images: PropTypes.shape({
            images: PropTypes.arrayOf(PropTypes.string.isRequired),
            isLoading: PropTypes.shape({
                getting: PropTypes.bool.isRequired,
            }).isRequired,
        }).isRequired,

    }

    componentWillMount() {
       // this.props.getImages();
    }
    
    render() {
        const {
            images ,
            isLoading: {
                getting,
            },
        } = this.props.Images;

        console.log(this.props.Images)
        return (
            <ImageListContainer>
                {getting  || isNil(images)? (
                    <LoadingText className="text-center">
                        Loading...
                    </LoadingText>
                ) :
                    
                    (
                        <Row>
                            {images.map(image => (
                            <Image
                                key={image}
                                src = {image}
                            />
                        ))}

                     </Row>
                    )    
                                
                }        
            </ImageListContainer>
        );
        

    }
}

const mapStateToProps = state => ({
    Images: state.Images,
});

const mapDispatchToProps = {
    getImages,
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageList);
