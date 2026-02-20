import type { Meta, StoryObj } from '@storybook/react';

import { NavbarItem } from './NavbarItem';

const meta: Meta<typeof NavbarItem> = {
  title: 'Layout/NavbarItem',
  component: NavbarItem,
  tags: ['autodocs'],
  argTypes: {
    innerText: { control: 'text' },
    isActive: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof NavbarItem>;

export const Active: Story = {
  args: {
    innerText: 'About',
    isActive: true,
  },
};

export const Inactive: Story = {
  args: {
    innerText: 'Projects',
    isActive: false,
  },
};

export const ActiveProjects: Story = {
  args: {
    innerText: 'Projects',
    isActive: true,
  },
};

export const ActiveContact: Story = {
  args: {
    innerText: 'Contact',
    isActive: true,
  },
};
