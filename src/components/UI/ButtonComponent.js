import PropTypes from 'prop-types';
import { Button, IconButton, Typography } from '@mui/material';
import ConditionalWrapper from '../ConditionalWrapper';
import TooltipComponent from '../TooltipComponent';

function ButtonComponent({
  children,
  fullWidth,
  variant,
  onClick,
  styles,
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
  tooltipLabel,
}) {
  if (iconButton) {
    return (
      <ConditionalWrapper
        condition={tooltipLabel}
        wrapper={children => (
          <TooltipComponent title={tooltipLabel}>{children}</TooltipComponent>
        )}
      >
        <IconButton
          sx={{
            borderRadius: square ? '0px' : '50%',
            ...styles,
          }}
          selected={active || selected}
          onClick={onClick}
          onMouseDown={e => {
            if (onMouseDown) {
              onMouseDown(e);
            }
          }}
        >
          {children}
        </IconButton>
      </ConditionalWrapper>
    );
  }

  return (
    <Button
      sx={{
        ...(disableHoverEffect
          ? {
              ':hover': {
                bgcolor: 'transparent',
              },
            }
          : {}),
        ...(disableTextTransform
          ? {
              textTransform: 'none',
              textAlign: 'left',
              display: 'inline-block',
            }
          : {}),
      }}
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
  );
}

ButtonComponent.propTypes = {
  children: PropTypes.node.isRequired,
  fullWidth: PropTypes.bool,
  variant: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  styles: PropTypes.objectOf(PropTypes.string).isRequired,
  text: PropTypes.string,
  iconButton: PropTypes.bool,
  size: PropTypes.string,
  color: PropTypes.string,
  disableRipple: PropTypes.bool,
  disableHoverEffect: PropTypes.bool,
  disableTouchRipple: PropTypes.bool,
  disableTextTransform: PropTypes.bool,
};

ButtonComponent.defaultProps = {
  fullWidth: false,
  onClick: undefined,
  iconButton: false,
  size: 'medium',
  color: undefined,
  disableRipple: false,
  disableHoverEffect: false,
  disableTouchRipple: false,
  disableTextTransform: false,
  text: '',
};

export default ButtonComponent;
