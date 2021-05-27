import { forwardRef } from "react";

export type Props = {
  children?: React.ReactNode
};

const Modal = forwardRef<Props>( () => <div></div>);

export { Modal }
