import { useState } from "react"
import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import { Modal } from "../Modal"
import { Button } from "../../Button";

type TestModalProps = {
  initOpenValue: boolean
};

const TestModal = ({ initOpenValue }: TestModalProps): JSX.Element => {
  const [open, setOpen] = useState(initOpenValue);

  return (
    <>
      <Button onClick={() => setOpen(!open)}>Show Modal</Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Modal.Header handleClose={() => setOpen(false)}>Header</Modal.Header>
        <Modal.Content>Content</Modal.Content>
        <Modal.Actions>
          <Button>Action</Button>
        </Modal.Actions>
      </Modal>
    </>
  );
};

describe("Modal", () => {
  it("snapshot test", () => {
    const {asFragment} = render(<TestModal initOpenValue={true} />)
    expect(asFragment()).toMatchSnapshot();
  })

  it("opened modal", async () => {
    const {asFragment} = render(<TestModal initOpenValue={false} />)
    
    fireEvent.click(screen.getByText('Show Modal'));

    await waitFor( () => {
      expect(screen.getByRole('dialog')).toBeInTheDocument();
    }) 
    
    expect(asFragment()).toMatchSnapshot();
  })

  it("closed modal with close button", async () => {
    const {asFragment} = render(<TestModal initOpenValue={true}/>)
    
    fireEvent.click(screen.getByLabelText('閉じる'));

    await waitFor( () => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    }) 

    expect(asFragment()).toMatchSnapshot();
  })
})
