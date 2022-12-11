
// import { Link } from "react-router-dom"
import {Link} from "react-router-dom"
import "./Item.css"
import { Card, Col, Row, Button, Text } from "@nextui-org/react";


const Item = ({ element }) => {
  return (
    <Card css={{ w: "20%", h: "20%" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text className="text-titulo" h3 color="white">
          {element.name}
        </Text>
      </Col>
    </Card.Header>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src={element.img}
        width="100%"
        height="100%"
        objectFit="cover"
        alt="Card example background"
      />
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#ffffff66",
        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          <Text color="#000" size={20}>
            {element.price}
          </Text>
        </Col>
        <Col>
          <Row justify="flex-end">
          <Link to={`/itemDetail/${element.id}`}>
            <Button flat auto rounded color="secondary">
              <Text
                css={{ color: "inherit" }}
                size={12}
                weight="bold"
                transform="uppercase"
              >
                Mas info
              </Text>
            </Button>
            </Link>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
  )
}

export default Item
