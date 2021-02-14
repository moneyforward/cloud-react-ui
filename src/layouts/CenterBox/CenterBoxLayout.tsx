import { CenterLayout } from "@layouts/Center";
import { Box } from "@components";

export type CenterBoxLayoutProps = {
  children: React.ReactNode;
};

export function CenterBoxLayout({
  children,
}: CenterBoxLayoutProps): React.ReactElement {
  return (
    <CenterLayout>
      <Box>{children}</Box>
    </CenterLayout>
  );
}
