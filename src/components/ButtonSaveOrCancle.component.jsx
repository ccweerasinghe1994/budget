import { Button, ButtonGroup, ButtonOr } from "semantic-ui-react";

const ButtonSaveOrCancle = () => (
  <ButtonGroup style={{ marginTop: 20 }}>
    <Button>Cancle</Button>
    <ButtonOr />
    <Button primary>Ok</Button>
  </ButtonGroup>
);

export default ButtonSaveOrCancle;
