import PropTypes from "prop-types";
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
  selected,
  onMouseDown,
  active,
  square,
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
      {disableTextTransform ? <Typography>{text}</Typography> : text}
    </Button>
  ) : (
    <IconButton
      sx={{
        borderRadius: square ? "0px" : "50%",
      }}
      selected={active || selected}
      className={classes}
      onClick={onClick}
      onMouseDown={(e) => {
        if (onMouseDown) {
          onMouseDown(e);
        }
      }}
    >
      {children}
    </IconButton>
  );
}

ButtonComponent.propTypes = {
  children: PropTypes.node.isRequired,
  fullWidth: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  text: PropTypes.string.isRequired,
  iconButton: PropTypes.bool,
  size: PropTypes.string,
  color: PropTypes.string,
  disableRipple: PropTypes.bool,
  disableHoverEffect: PropTypes.bool,
  disableTouchRipple: PropTypes.bool,
  disableTextTransform: PropTypes.bool,
};

ButtonComponent.defaultProps = {
  onClick: undefined,
  iconButton: false,
  size: "medium",
  color: undefined,
  disableRipple: false,
  disableHoverEffect: false,
  disableTouchRipple: false,
  disableTextTransform: false,
};

export default ButtonComponent;
