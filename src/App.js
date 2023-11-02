import {
  Box,
  Center,
  Checkbox,
  CheckboxGroup,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";

function App() {
  return (
    <div>
      <Center>
        <Box maxW={"480px"}>
          <FormControl>
            <FormLabel>이름</FormLabel>
            <Input />
            <FormHelperText>입력시 도움이 될만한 텍스트 입력</FormHelperText>
          </FormControl>
        </Box>
      </Center>
      <Center mt={5}>
        <Box w={"480px"}>
          <FormControl>
            <FormLabel>하나만 골라라 좀</FormLabel>
            <RadioGroup>
              <Flex gap={5}>
                <Radio value="value1">Lorem.</Radio>
                <Radio value="value2">Lorem ipsum.</Radio>
                <Radio value="value3">Lorem ipsum dolor.</Radio>
                <Radio value="value4">Lorem ipsum dolor sit.</Radio>
              </Flex>
            </RadioGroup>
          </FormControl>
        </Box>
      </Center>
      <Center>
        <Box w={"480px"}>
          <FormControl>
            <FormLabel>골라 잡숴봐</FormLabel>
            <CheckboxGroup>
              <Checkbox>Lorem.</Checkbox>
              <Checkbox>Lorem ipsum.</Checkbox>
              <Checkbox>Lorem.</Checkbox>
            </CheckboxGroup>
          </FormControl>
        </Box>
      </Center>
    </div>
  );
}

export default App;
