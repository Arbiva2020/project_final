import React from "react";
import SimpleMap from "./maps";

function LocationMaps() {
  return (
    <div>
        <Row>
        <Col xs={1}>

        </Col>
        <Col xs={10}>
         <Card style={{length:"200px", width:"200px"}}>
    <Card.Body>
      <SimpleMap />
    </Card.Body>
  </Card>
     <Button>Search</Button>
</Col>
<Col xs={1}>
            
        </Col>
        </Row>
    </div>
  );
}

export default LocationMaps;
