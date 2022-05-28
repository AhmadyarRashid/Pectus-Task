import React from 'react';
import { DropdownWrapper, DropdownLabel, DropdownSelect, DropdownOption } from './Dropdown.styled';

interface OptionProps {
  key: string;
  title: string;
}

interface DropdownProps {
  label: string;
  options: OptionProps[];
  onChange: (selectedValue: OptionProps) => void;
}

function Dropdown({ label = 'Choose one', options = [], onChange }: DropdownProps) {
  return (
    <DropdownWrapper>
      <DropdownLabel htmlFor="dropdown label">{label}</DropdownLabel>
      <DropdownSelect
        name="dropdown"
        id="dropdown"
        onChange={(event: any) => {
          onChange({
            title: event.target.options[event.target.selectedIndex].text,
            key: event.target.value
          });
        }}>
        {options.map((option: OptionProps, index: number) => (
          <DropdownOption key={index} value={option.key}>
            {option.title}
          </DropdownOption>
        ))}
      </DropdownSelect>
    </DropdownWrapper>
  );
}

export default Dropdown;
