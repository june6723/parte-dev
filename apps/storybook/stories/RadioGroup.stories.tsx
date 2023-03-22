import { RadioGroup } from "../../../packages/parte-ui/src/RadioGroup/RadioGroup";
import { Story, Meta } from "@storybook/react";
import { Radio } from "../../../packages/parte-ui/src/Radio/Radio";
import { RadioGroupProps } from "../../../packages/parte-ui/src/RadioGroup/RadioGroup.types";
import { ChangeEvent, useState } from "react";
import { Box } from "../../../packages/parte-ui/src/Layout";

export default {
  title: "Components/Controls/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
} as Meta;

const Template: Story<RadioGroupProps> = ({ ...args }) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(e.target.value);
  };

  const [selectedValue, setSelectedValue] = useState<string>("TEST");

  return (
    <RadioGroup {...args} onChange={onChange} value={selectedValue}>
      <Box display="flex" gap={10} flexDirection="column">
        <Radio value="TEST" label="TEST" />
        <Radio value="TEST1" label="TEST1" />
        <Radio value="TEST2" label="TEST2" />
        <Radio value="TEST3" label="TEST3" />
      </Box>
    </RadioGroup>
  );
};

export const Default = Template.bind({});

Default.args = {
  name: "my",
};

export const Disabled = Template.bind({});

Disabled.args = {
  name: "my",
  disabled: true,
};
