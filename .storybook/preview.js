import './styles.css';

//👇 Configures Storybook
export const parameters = {
  layout: 'fullscreen',
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'figma-canvas',
    values: [
      {
        name: 'figma-canvas',
        value: '#e5e5e5',
      },
    ],
  },
};

export const decorators = [
  (Story, {kind}) => {
    if (kind.startsWith('components')) {
      return <div style={{padding: '15px'}}><Story /></div>;
    }
    return <Story />;
  },
];
