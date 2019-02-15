import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getImages } from '../services/Images/actions';
import ImageCarousel from './ImageCarousel';
import { isArray } from 'util';
import { isNil } from 'lodash';
import {  Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
     } from 'reactstrap';


const ImageListContainer = styled.div`
    margin-top: 25px;
    color: red;
`;

const LoadingText = styled.h3`
    position: relative;
    color: #FFFFFF;
`;


const CarouselContainer = styled.div`
    max-width: 100%;
    height: 500px;
    background: black;
`;


class ImageListCarousel extends Component {
    static propTypes = {
        Images: PropTypes.shape({
            images: PropTypes.arrayOf(PropTypes.string.isRequired),
            isLoading: PropTypes.shape({
                getting: PropTypes.bool.isRequired,
            }).isRequired,
        }).isRequired,

    }

    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
      }
    
      onExiting() {
        this.animating = true;
      }
    
      onExited() {
        this.animating = false;
      }
    
      next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === this.props.Images.images.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
      }
    
      previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? this.props.Images.images.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
      }
    
      goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
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

        const { activeIndex } = this.state;

        console.log(this.props.Images)


        return (
            <ImageListContainer>
                {getting ? (
                    <LoadingText className="text-center">
                        Loading...
                    </LoadingText>
                ) :
                    
                    (
                         <Carousel
                            activeIndex={activeIndex}
                            next={this.next}
                            previous={this.previous}
                        >
                            <CarouselIndicators items={images} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                            {images.map((image) => (
                                <CarouselItem
                                    onExiting={this.onExiting}
                                    onExited={this.onExited}
                                    key = {image}
                                    class="carouselContainer"
                                >
                                <img src={image} />
                    
                                </CarouselItem>
                                ) )} 
                            <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                            <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                        </Carousel>    
                        
                        
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

export default connect(mapStateToProps, mapDispatchToProps)(ImageListCarousel);
