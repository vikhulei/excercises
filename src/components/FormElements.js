import styled from "styled-components";

const Select = styled.select``;

const Option = styled.option``;

const ContactsList = () => {
  return (
    <div>
      <Select>
        <Option>Hello1</Option>
        <Option>Hello2</Option>
        <Option>Hello3</Option>
      </Select>
    </div>
  );
};

export default ContactsList;

// change color on selected options in select
// select size="" noty working on mobile. Use radio buttons istead

// &:focus option:checked {
//   background: linear-gradient(0deg, #d29dfb 0%, #b153f9 100%);
// }
