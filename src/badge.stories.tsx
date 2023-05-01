import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from ".";

const meta: Meta<typeof Badge> = {
  title: "Badge",
  component: Badge,
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "main", "green", "red", "gold", "blue"],
    },
    size: {
      control: "select",
      options: [18, 20, 24, 28],
    },
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
type Story = StoryObj<typeof Badge>;

export const Def: Story = {
  args: {
    variant: "default",
    children: "some text",
    size: 28,
  },
};

export const Main: Story = {
  args: {
    variant: "main",
    children: "some text",
    size: 28,
  },
};

export const Green: Story = {
  args: {
    ...Main.args,
    variant: "green",
  },
};

export const Red: Story = {
  args: {
    ...Main.args,
    variant: "red",
  },
};

export const Gold: Story = {
  args: {
    ...Main.args,
    variant: "gold",
  },
};

export const Blue: Story = {
  args: {
    ...Main.args,
    variant: "blue",
  },
};
