import React, { useState } from 'react';
import Copy from '../Icon/Copy';
import Check from '../Icon/Check';
import * as Style from './styled';

type IconType = 'copy' | 'check';

interface CopyButtonProps {
  text: string;
}

function CopyButton({ text }: CopyButtonProps) {
  const [iconType, setIconType] = useState<IconType>('copy');
  const copyToClipboard = (value: string) => {
    if (iconType !== 'copy') return;
    navigator.clipboard.writeText(value);

    setIconType('check');
    setTimeout(() => {
      setIconType('copy');
    }, 700);
  };

  return (
    <Style.IconWrapper onClick={() => copyToClipboard(text)}>
      {iconType === 'copy' ? <Copy /> : <Check />}
    </Style.IconWrapper>
  );
}

export default CopyButton;
