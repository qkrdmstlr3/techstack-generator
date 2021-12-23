import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import CopyButton from '.';

export default {
  title: 'Component/CopyButton',
  component: CopyButton,
  decorators: [withKnobs],
};

const textToCopy = text('text', 'text');
export const copyButton = (): React.ReactElement => <CopyButton text={textToCopy} />;
