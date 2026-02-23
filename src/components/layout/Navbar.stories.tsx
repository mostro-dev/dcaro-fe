import type { Meta, StoryObj } from '@storybook/react';

import { Navbar } from './Navbar';

const meta: Meta<typeof Navbar> = {
  title: 'Layout/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  argTypes: {
    activeItem: {
      control: 'select',
      options: ['about', 'projects', 'contact', null],
    },
    isLanding: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  args: {
    activeItem: null,
  },
};

export const AboutActive: Story = {
  args: {
    activeItem: 'about',
  },
};

export const ProjectsActive: Story = {
  args: {
    activeItem: 'projects',
  },
};

export const ContactActive: Story = {
  args: {
    activeItem: 'contact',
  },
};

export const LandingRow: Story = {
  args: {
    activeItem: null,
    isLanding: true,
  },
};
