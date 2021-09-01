import { CenterLayout } from '../Center';
import { Block } from '../../components';

export const CenterBlockLayout: React.FC = ({ children }) => {
  return (
    <CenterLayout>
      <Block>{children}</Block>
    </CenterLayout>
  );
};
