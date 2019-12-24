import React from 'react';

interface HelpSectionProps {
  resetClicked?: () => void;
  hintClicked?: () => void;
  newGameClicked?: () => void;
}

const defaultProps: HelpSectionProps = {
  resetClicked: () => null,
  hintClicked: () => null,
  newGameClicked: () => null,
};

export const HelpSection: React.FC<HelpSectionProps> = (defaultProps: HelpSectionProps) => {
  return (
    <div>Help section</div>
  )
};

