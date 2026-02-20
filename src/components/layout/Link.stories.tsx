import type { Meta, StoryObj } from '@storybook/react';

import { Link } from './Link';

const meta: Meta<typeof Link> = {
  title: 'Layout/Link',
  component: Link,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['normal', 'hover', 'selected', 'visited'],
    },
    children: { control: 'text' },
    href: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Normal: Story = {
  args: {
    variant: 'normal',
    children: 'Link',
    href: '#',
  },
};

export const Hover: Story = {
  args: {
    variant: 'hover',
    children: 'Link',
    href: '#',
  },
};

export const Selected: Story = {
  args: {
    variant: 'selected',
    children: 'Link',
    href: '#',
  },
};

export const Visited: Story = {
  args: {
    variant: 'visited',
    children: 'Link',
    href: '#',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-3 items-start">
      <Link href="#" variant="normal">
        Link — Normal
      </Link>
      <Link href="#" variant="hover">
        Link — Hover
      </Link>
      <Link href="#" variant="selected">
        Link — Selected
      </Link>
      <Link href="#" variant="visited">
        Link — Visited
      </Link>
    </div>
  ),
};
