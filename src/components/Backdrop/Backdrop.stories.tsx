import { useState } from "react";
import { Backdrop as BackdropComponent } from "./Backdrop";
import { Button } from "../Button";

export default {
  component: BackdropComponent,
  title: "components/Backdrop",
};

export const Backdrop = (): JSX.Element => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <BackdropComponent open={open} onClick={() => setOpen(false)} />
      <Button onClick={() => setOpen(!open)}>Show Backdrop</Button>
    </>
  );
};
