import { Button } from "@chakra-ui/react";
import { ArrowRightIcon, EmailIcon } from "@chakra-ui/icons";

function App() {
  return (
    <>
      <Button>Lorem.</Button>
      <Button colorScheme="green">Lorem.</Button>
      <Button colorScheme="red">Dolore?</Button>
      <Button colorScheme="orange">Vero?</Button>
      <Button colorScheme="teal" size={"sm"}>
        Aliquid.
      </Button>
      <Button colorScheme="facebook" size={"lg"}>
        Veritatis?
      </Button>
      <Button colorScheme="whatsapp" variant={"outline"}>
        Nulla?
      </Button>
      <Button colorScheme="messenger" variant={"ghost"}>
        Nisi.
      </Button>
      <Button colorScheme="blackAlpha" variant={"link"}>
        Repellat!
      </Button>
      <Button leftIcon={<EmailIcon />}>Quis?</Button>
      <Button rightIcon={<ArrowRightIcon />}>Tenetur.</Button>
      <Button isLoading>Velit!</Button>
      <Button isLoading loadingText="지금, 곤란, 대기">
        Unde.
      </Button>
    </>
  );
}

export default App;
