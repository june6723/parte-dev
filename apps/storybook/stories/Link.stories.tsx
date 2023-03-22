import { Meta, Story } from "@storybook/react";
import { Paragraph } from "../../../packages/parte-ui/src/@foundations/Typography";
import { Box } from "../../../packages/parte-ui/src/Layout";
import { Link } from "../../../packages/parte-ui/src/Link/Link";
import { LinkProps } from "../../../packages/parte-ui/src/Link/Link.types";

export default {
  title: "Components/Buttons/Link",
  component: Link,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
} as Meta;

const Template: Story<LinkProps> = ({ children, ...args }) => {
  return (
    <Box>
      <Link {...args}>{children}</Link>
    </Box>
  );
};
const LinkInParagraphTemplate: Story<LinkProps> = ({ children, ...args }) => {
  return (
    <Box>
      <Paragraph size={200}>
        <>
          {`Hello! It's a `}
          <Link {...args}>{children}</Link> {`Component`}
        </>
      </Paragraph>
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: "Link",
  href: "https://google.com",
  target: "_blank",
};
export const LinkInParagraph = LinkInParagraphTemplate.bind({});
LinkInParagraph.args = {
  children: "Link",
  href: "https://google.com",
  target: "_blank",
};
export const Disabled = Template.bind({});
Disabled.args = {
  children: "Disabled Link",
  href: "https://google.com",
  disabled: true,
  target: "_blank",
};
