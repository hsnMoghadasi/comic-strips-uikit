import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Input } from ".";

const meta: Meta<typeof Input> = {
  title: "Input",
  component: Input,
  argTypes: {
    disabled: { control: "boolean" },
    error: { control: "boolean" },
  },
  decorators: [
    (Story) => (
      <div className="flex justify-end items-center bg-white p-2">
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "تایپ کنید...",
  },
};

export const WithError: Story = {
  args: {
    placeholder: "تایپ کنید...",
    error: true,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "تایپ کنید...",
    disabled: true,
  },
};
