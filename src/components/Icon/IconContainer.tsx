import { library } from '@fortawesome/fontawesome-svg-core';
import { faBell } from '@fortawesome/free-solid-svg-icons/faBell';
import { faBullhorn } from '@fortawesome/free-solid-svg-icons/faBullhorn';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons/faCaretDown';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons/faCaretUp';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons/faChevronUp';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons/faQuestionCircle';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { IconPresenter } from './IconPresenter';

library.add(
  faBell,
  faBullhorn,
  faCaretDown,
  faCaretUp,
  faChevronUp,
  faPlus,
  faQuestionCircle,
  faEnvelope
);

export const Icons = [
  'bell',
  'bullhorn',
  'caretUp',
  'chevronUp',
  'plus',
  'question',
  'envelope',
] as const;

export type IconTypes = typeof Icons[number];

export type IconRotation = 90 | 180 | 270;

export type IconProps = {
  width?: string;
  height?: string;
  icon: IconTypes;
  flip?: 'both' | 'vertical' | 'horizontal';
  rotation?: IconRotation;
  onClick?: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
  className?: string;
};

export const IconContainer: React.FC<IconProps> = (props) => {
  return <IconPresenter {...props} />;
};
