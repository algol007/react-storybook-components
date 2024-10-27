import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "../components/Select";

const defaultOptions = [
  { value: "", label: "Select an option", disabled: true },
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const countryOptions = [
  { value: "", label: "Select a country", disabled: true },
  { value: "us", label: "United States" },
  { value: "uk", label: "United Kingdom" },
  { value: "ca", label: "Canada" },
  { value: "au", label: "Australia" },
];

const meta = {
  title: "Components/Select",
  component: Select,
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
    disabled: {
      control: "boolean",
    },
    fullWidth: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Select Option",
    options: defaultOptions,
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Country",
    options: countryOptions,
    helperText: "Please select your country of residence",
  },
};

export const WithError: Story = {
  args: {
    label: "Country",
    options: countryOptions,
    error: "Please select a country",
  },
};

export const Filled: Story = {
  args: {
    label: "Select Option",
    options: defaultOptions,
    variant: "filled",
  },
};

export const Small: Story = {
  args: {
    label: "Small Select",
    options: defaultOptions,
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    label: "Large Select",
    options: defaultOptions,
    size: "lg",
  },
};

export const FullWidth: Story = {
  args: {
    label: "Full Width Select",
    options: defaultOptions,
    fullWidth: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Select",
    options: defaultOptions,
    disabled: true,
  },
};
