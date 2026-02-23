import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { LogoTopBar } from './LogoTopBar';

const meta: Meta<typeof LogoTopBar> = {
  title: 'Layout/LogoTopBar',
  component: LogoTopBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof LogoTopBar>;

export const TopBar: Story = {
  args: {
    isLanding: false,
  },
};

export const Landing: Story = {
  args: {
    isLanding: true,
  },
};

function InteractiveTransitionStory() {
  const [isLanding, setIsLanding] = useState(true);

  return (
    <div className="relative h-[400px] w-[600px] bg-white">
      <LogoTopBar isLanding={isLanding} />
      <button
        className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded bg-black px-4 py-2 text-white"
        onClick={() => setIsLanding((prev) => !prev)}
        type="button"
      >
        Toggle: {isLanding ? 'Landing → TopBar' : 'TopBar → Landing'}
      </button>
    </div>
  );
}

export const InteractiveTransition: Story = {
  render: () => <InteractiveTransitionStory />,
};
