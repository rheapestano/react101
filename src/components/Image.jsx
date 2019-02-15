import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';

class Image extends PureComponent {
    static propTypes = {
        src: PropTypes.string.isRequired,
     }

    render() {
        const { src } = this.props;

        return (
            <Col>
                <img src={src} />
            </Col>
        );
    }
        
}

export default Image;