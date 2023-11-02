import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";

function App() {
  return (
    <>
      <SimpleGrid gap={3} columns={{ base: 1, md: 3, xl: 6, "2xl": 8 }}>
        {/*Card*3>CardHeader>Heading[size="md"]>lorem2^^CardBody>lorem15^CardFooter>Button>lorem1*/}
        <Card>
          <CardHeader>
            <Heading size="md">Lorem ipsum.</Heading>
          </CardHeader>
          <CardBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequatur doloremque possimus repellendus suscipit voluptatibus.
            Odio!
          </CardBody>
          <CardFooter>
            <Button>Lorem.</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Aperiam, assumenda.</Heading>
          </CardHeader>
          <CardBody>
            Alias aperiam architecto beatae ducimus, nostrum quas, quidem quis
            recusandae, repellat sapiente sunt vel voluptates!
          </CardBody>
          <CardFooter>
            <Button>Temporibus!</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Ex, harum?</Heading>
          </CardHeader>
          <CardBody>
            Adipisci aperiam est harum magnam maxime omnis quidem similique vel
            voluptatem voluptatibus. Accusamus, mollitia, voluptatem?
          </CardBody>
          <CardFooter>
            <Button>Ex.</Button>
          </CardFooter>
        </Card>
      </SimpleGrid>
    </>
  );
}

export default App;
