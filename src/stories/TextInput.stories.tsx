import type { Meta, StoryObj } from "@storybook/react";
import { TextInput } from "../components/TextInput";

const meta = {
  title: "Components/TextInput",
  component: TextInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    variant: {
      control: { type: "select" },
      options: ["default", "filled"],
    },
    type: {
      control: { type: "select" },
      options: ["text", "password", "email", "number", "tel", "url"],
    },
    disabled: {
      control: "boolean",
    },
    fullWidth: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter text...",
    label: "Label",
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Email",
    type: "email",
    placeholder: "Enter your email",
    helperText: "We'll never share your email with anyone else.",
  },
};

export const WithError: Story = {
  args: {
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
    error: "Password must be at least 8 characters long",
  },
};

export const Filled: Story = {
  args: {
    label: "Username",
    placeholder: "Enter username",
    variant: "filled",
  },
};

export const Small: Story = {
  args: {
    label: "Small Input",
    placeholder: "Small size",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    label: "Large Input",
    placeholder: "Large size",
    size: "lg",
  },
};

export const FullWidth: Story = {
  args: {
    label: "Full Width Input",
    placeholder: "This input takes full width",
    fullWidth: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Input",
    placeholder: "This input is disabled",
    disabled: true,
  },
};
