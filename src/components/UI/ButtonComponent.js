import { Button, IconButton, Typography } from "@mui/material";

function ButtonComponent({
  children,
  fullWidth,
  variant,
  onClick,
  classes,
  text,
  iconButton,
  size,
  color,
  disableRipple,
  disableHoverEffect,
  disableTouchRipple,
  disableTextTransform,
}) {
  return !iconButton ? (
    <Button
      sx={{
        ...(disableHoverEffect
          ? {
              ":hover": {
                bgcolor: "transparent",
              },
            }
          : {}),
        ...(disableTextTransform
          ? {
              textTransform: "none",
              textAlign: "left",
              display: "inline-block",
            }
          : {}),
      }}
      className={classes}
      fullWidth={fullWidth}
      variant={variant}
      onClick={onClick}
      size={size}
      color={color}
      disableRipple={disableRipple}
      disableTouchRipple={disableTouchRipple}
    >
      {disableTextTransform ? <Typography>{text}</Typography> : { text }}
    </Button>
  ) : (
    <IconButton className={classes} onClick={onClick}>
      {children}
    </IconButton>
  );
}

export default ButtonComponent;
