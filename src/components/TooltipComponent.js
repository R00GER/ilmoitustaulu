import { Tooltip } from '@mui/material';

function TooltipComponent({ children, title }) {
  return <Tooltip title={title}>{children}</Tooltip>;
}

export default TooltipComponent;
