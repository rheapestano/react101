import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {   Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption } from 'reactstrap';

class ImageCarousel extends PureComponent {
    static propTypes = {
        src: PropTypes.string.isRequired,
        onExiting : PropTypes.func.isRequired,
        onExited : PropTypes.func.isRequired,
     }

    render() {
        const { src, onExiting, onExited } = this.props;

        return (
            <CarouselItem
             onExiting={onExiting}
             onExited={onExited}
            >
             <img src={src} />
           </CarouselItem>
        );
    }
        
}

export default ImageCarousel;