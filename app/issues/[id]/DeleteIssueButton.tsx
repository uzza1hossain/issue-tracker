import { Button } from '@radix-ui/themes';
import { TrashIcon } from "@radix-ui/react-icons";
const DeleteIssueButton = async ({ issueId }: { issueId: number }) => {
  return <Button color="red">
    <TrashIcon/> Delete Issue
  </Button>;
};

export default DeleteIssueButton;
