import {
  Button,
  Dialog,
  DialogBody,
  DialogContent,
  DialogSurface,
  DialogTitle,
  DialogTrigger,
} from "FCB-ui";
import { Dismiss24Regular } from "fish-ui-sy-react-icons";

const TitleCustomAction = () => {
  return (
    <Dialog backdropClosable={false}>
      <DialogTrigger disableButtonEnhancement>
        <Button>Open dialog</Button>
      </DialogTrigger>
      <DialogSurface>
        <DialogBody>
          <DialogTitle
            action={
              <DialogTrigger action="close">
                <Button
                  appearance="subtle"
                  aria-label="close"
                  icon={<Dismiss24Regular />}
                />
              </DialogTrigger>
            }
          >
            Dialog title
          </DialogTitle>
          <DialogContent>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            explicabo repudiandae impedit doloribus laborum quidem maxime
            dolores perspiciatis non ipsam, nostrum commodi quis autem sequi,
            incidunt cum? Consequuntur, repellendus nostrum?
          </DialogContent>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
};

export default TitleCustomAction;
