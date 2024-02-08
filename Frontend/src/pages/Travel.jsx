import React from 'react';
import CommonSection from '../shared/CommonSection';

import '../style/Travel.css';

import { Col, Container, Row } from 'reactstrap';
import tourData from '../file/data/tours';
import SearchBar from '../shared/SearchBar';
import Newsletter from './../shared/Newsletter';
import TourCard from './../shared/TourCard';

const Travel = () => {
  return (
    <>
      <CommonSection title={"We are available in ..."} />
      <section className='First pt-2 mt-5'>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>

      <section className='Second pt-2  mt-5'>
        <Container>
          <Row>
            {
              tourData?.map(tour => (<Col lg='3' md='6' sm='6' className='mb-4' key={tour.id}> <TourCard tour={tour} /> </Col>))
            }
          </Row>
        </Container>
      </section>

      <section className='Third'>
        <Newsletter />
      </section>

    </>
  )
}

export default Travel