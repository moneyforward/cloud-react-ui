import './styles.css';

export const parameters = {
  layout: 'fullscreen'
}

export const decorators = [
  (Story, {kind}) => {
    if (kind.startsWith('components')) {
      return <div style={{padding: '15px'}}><Story /></div>;
    }
    return <Story />;
  },
];
