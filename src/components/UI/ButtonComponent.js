import { Button, IconButton } from "@mui/material";

function ButtonComponent({
  children,
  fullWidth,
  variant,
  onClick,
  classes,
  text,
  iconButton,
}) {
  return !iconButton ? (
    <Button
      className={classes}
      fullWidth={fullWidth}
      variant={variant}
      onClick={onClick}
    >
      {text}
    </Button>
  ) : (
    <IconButton className={classes} onClick={onClick}>
      {children}
    </IconButton>
  );
}

export default ButtonComponent;
