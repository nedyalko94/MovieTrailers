import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Footer() {
  return (
    <Container fluid className=" footer "  >
      <Row className='p-3 m-0 text-warning  justify-content-center align-items-center'>  
    <Col md={6} className="p-0 d-flex justify-content-center "> <p className='mx-3'>Coded by Nedyalko for contact </p> <a href="mailto:nedyalko.todorov94@gmail.com">Email</a> <p className=' mx-4'></p>   </Col>
    <Col md={6} className="p-0 d-flex justify-content-center "><p> &#169; Have Fun  2022  </p>   </Col>
     </Row>

    </Container>

  )
}

export default Footer