import styled from "styled-components";

const Box = styled.div`
  position: absolute;
  width: 300px;
  height: 100px;
  overflow: auto;
  border: black solid 1px;
  top: 10px;
`;

const Select = styled.datalist`
  width: 100%;
`;

const Option = styled.option`
  &:checked {
    background-color: red;
  }
  &:active {
    background-color: red;
  }
`;

const SelectElement = () => {
  return (
    <div>
      <Box>
        <label for="browser">Choose your browser from the list:</label>
        {/* <input list="browsers" name="browser" id="browser">
  <datalist id="browsers">
    <option value="Edge">
    <option value="Firefox">
    <option value="Chrome">
    <option value="Opera">
    <option value="Safari">
  </datalist> */}

        {/* <input type="text" list="contacts" />
        <Select id="contacts">
          <Option>Option1</Option>
          <Option>Option2</Option>
          <Option>Option3</Option>
          <Option>Option4</Option>
        </Select> */}
      </Box>
    </div>
  );
};

export default SelectElement;
