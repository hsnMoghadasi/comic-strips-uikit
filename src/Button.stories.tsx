import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    variant: {
      control: "select",
      options: [
        "primary_red",
        "primary_green",
        "primary_navy",
        "secondary_red",
        "secondary_green",
        "secondary_navy",
        "tertiary_red",
        "tertiary_green",
        "tertiary_navy",
        "primary_floating",
        "secondary_floating",
      ],
    },
    size: {
      control: "select",
      options: ["xlg", "lg", "md", "sm", "xs"],
    },
    disabled: {
      control: "boolean",
    },
    rounded: {
      control: "boolean",
    },
    isLoading: {
      control: "boolean",
    },
  },
  decorators: [
    (Story) => (
      <div className="flex justify-end items-center bg-white p-2">
        <Story />
      </div>
    ),
  ],
} as Meta;

type Story = StoryObj<typeof Button>;

export const PrimaryRed: Story = {
  args: {
    variant: "primary_red",
    children: "some text!",
    size: "md",
  },
};

export const PrimaryGreen: Story = {
  args: {
    ...PrimaryRed.args,
    variant: "primary_green",
  },
};

export const PrimaryNavy: Story = {
  args: {
    ...PrimaryRed.args,
    variant: "primary_navy",
  },
};

export const SecondaryRed: Story = {
  args: {
    ...PrimaryRed.args,
    variant: "secondary_red",
  },
};

export const SecondaryGreen: Story = {
  args: {
    ...PrimaryRed.args,
    variant: "secondary_green",
  },
};

export const SecondaryNavy: Story = {
  args: {
    ...PrimaryRed.args,
    variant: "secondary_navy",
  },
};

export const TertiaryRed: Story = {
  args: {
    ...PrimaryRed.args,
    variant: "tertiary_red",
  },
};

export const TertiaryGreen: Story = {
  args: {
    ...PrimaryRed.args,
    variant: "tertiary_green",
  },
};

export const TertiaryNavy: Story = {
  args: {
    ...PrimaryRed.args,
    variant: "tertiary_navy",
  },
};

export const PrimaryFloating: Story = {
  args: {
    ...PrimaryRed.args,
    variant: "primary_floating",
  },
};

export const SecondaryFloating: Story = {
  args: {
    ...PrimaryRed.args,
    variant: "secondary_floating",
  },
};
