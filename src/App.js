import {
  Box,
  Button,
  Flex,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

function App() {
  return (
    <Flex
      px={{ base: "0px", md: "70px", lg: "120px", xl: "150px" }}
      justify="space-between"
      py="8px"
      my={"8px"}
      bg={"blue.50"}
    >
      <Flex gap="7px" align={"center"}>
        <Text as="b">Navbar</Text>
        <Button variant={"ghost"}>Home</Button>
        <Button variant={"ghost"}>Link</Button>

        <Menu>
          <MenuButton
            variant="ghost"
            as={Button}
            rightIcon={<ChevronDownIcon />}
          >
            Dropdown
          </MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>

        <Button variant={"ghost"} isDisabled={true}>
          Disabled
        </Button>
      </Flex>
      <Flex gap="7px" align={"center"}>
        <Input size="sm" bg="white" />
        <Button size="sm" colorScheme="pink" variant="outline">
          Search
        </Button>
      </Flex>
    </Flex>
  );
}

export default App;
