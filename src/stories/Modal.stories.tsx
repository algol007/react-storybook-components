import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "../components/Modal";
import { Button } from "../components/Button";
import { useState } from "react";

const meta = {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    showCloseButton: {
      control: "boolean",
    },
    closeOnOverlayClick: {
      control: "boolean",
    },
  },
  decorators: [
    (Story) => (
      <div className="h-[400px] flex items-center justify-center">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

const ModalDemo = (args: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {args.children}
      </Modal>
    </>
  );
};

export const Default: Story = {
  render: (args) => <ModalDemo {...args} />,
  args: {
    title: "Modal Title",
    children: (
      <div>
        <p className="text-gray-600">
          This is a simple modal with some content. You can close it by clicking
          the X button, clicking outside the modal, or pressing the ESC key.
        </p>
      </div>
    ),
  },
};

export const LongContent: Story = {
  render: (args) => <ModalDemo {...args} />,
  args: {
    title: "Terms and Conditions",
    size: "lg",
    children: (
      <div className="space-y-4">
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p className="text-gray-600">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        <div className="flex justify-end space-x-2 pt-4">
          <Button variant="outline" onClick={() => {}}>
            Decline
          </Button>
          <Button onClick={() => {}}>Accept</Button>
        </div>
      </div>
    ),
  },
};

export const WithForm: Story = {
  render: (args) => <ModalDemo {...args} />,
  args: {
    title: "Contact Form",
    children: (
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div className="flex justify-end">
          <Button onClick={() => {}}>Send Message</Button>
        </div>
      </div>
    ),
  },
};

export const Small: Story = {
  render: (args) => <ModalDemo {...args} />,
  args: {
    title: "Small Modal",
    size: "sm",
    children: (
      <p className="text-gray-600">
        This is a small modal with minimal content.
      </p>
    ),
  },
};

export const Large: Story = {
  render: (args) => <ModalDemo {...args} />,
  args: {
    title: "Large Modal",
    size: "lg",
    children: (
      <p className="text-gray-600">
        This is a large modal with more space for content.
      </p>
    ),
  },
};

export const NoCloseButton: Story = {
  render: (args) => <ModalDemo {...args} />,
  args: {
    title: "No Close Button",
    showCloseButton: false,
    children: (
      <div className="space-y-4">
        <p className="text-gray-600">
          This modal doesn't have a close button. You can still close it by
          clicking outside or pressing ESC.
        </p>
      </div>
    ),
  },
};

export const NoOverlayClick: Story = {
  render: (args) => <ModalDemo {...args} />,
  args: {
    title: "Modal",
    closeOnOverlayClick: false,
    children: (
      <div className="space-y-4">
        <p className="text-gray-600">
          This modal can't be closed by clicking outside. You must use the close
          button or press ESC.
        </p>
      </div>
    ),
  },
};
