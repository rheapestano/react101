import React, { Component } from 'react';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import ImageList from '../components/ImageList';
import SearchImageForm from '../forms/SearchImage';
import backgroundPhoto from '../assets/background.jpg';
import ImageListCarousel from '../components/ImageListCarousel';
import 'bootstrap/dist/css/bootstrap.min.css'; 


const BackgroundImage = styled.img`
  position: fixed;
  top: 0px;
  left: 0px;
  min-width: 100%;
  min-height: 100%;
`;

const Container = styled.div`
  position: center;
  margin-bottom: 25px;
`;

const Title = styled.h1`
  position: relative;
  font-size: 3rem;
  color: #FFFFFF;
  text-align: center;
  margin-top: 25px;
  font-family: 'Libre Barcode 39 Text', cursive;
`;

class Home extends Component {
    render() {
        return (
            <div>
                  <BackgroundImage src={backgroundPhoto} />
                <Container className="container">
                    <ToastContainer />
                    <Title>
                    Search My Shibe
                    </Title>
                    <SearchImageForm />
                    <ImageListCarousel/>
                </Container>
            </div>
        );
    }
}

export default Home;
