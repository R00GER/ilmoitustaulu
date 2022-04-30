import { PropTypes } from "prop-types";
import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ButtonComponent from "./ButtonComponent";

const useStyles = makeStyles({
  textFieldButtonRowContainer: {
    display: "flex",
    alignItems: "center",
  },
});

export const EditableTextField = ({
  autoComplete,
  name,
  fullWidth,
  InputProps,
  placeholder,
  value,
  onChange,
  variant,
  size,
  onFocus,
  onBlur,
  autoFocus,
}) => {
  return (
    <TextField
      autoFocus={autoFocus}
      autoComplete={autoComplete}
      name={name}
      fullWidth={fullWidth}
      variant={variant || "outlined"}
      value={value}
      onChange={(e) => onChange(e.target)}
      inputProps={{ style: { color: "#f2f2f2" } }}
      InputProps={{ ...InputProps }}
      placeholder={placeholder}
      size={size}
      onFocus={(e) => {
        if (onFocus) {
          onFocus(e);
        }
      }}
      onBlur={(e) => {
        if (onBlur) {
          console.log("blur");
          onBlur(e);
        }
      }}
    />
  );
};

EditableTextField.propTypes = {
  name: PropTypes.string.isRequired,
  autoComplete: PropTypes.string,
  fullWidth: PropTypes.bool,
  InputProps: PropTypes.instanceOf(Object),
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func,
  variant: PropTypes.string,
  size: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  autoFocus: PropTypes.bool,
};

EditableTextField.defaultProps = {
  autoComplete: "off",
  fullWidth: false,
  InputProps: {},
  placeholder: undefined,
  onChange: undefined,
  variant: undefined,
  size: undefined,
  onFocus: undefined,
  onBlur: undefined,
  autoFocus: false,
};

export const EditableTextFieldAndButtonRow = ({
  buttonText,
  buttonVariant,
  fullWidth,
  InputProps,
  placeholder,
  value,
  onChange,
  onClick,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.textFieldButtonRowContainer}>
      <EditableTextField
        fullWidth={fullWidth}
        InputProps={InputProps}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <ButtonComponent
        text={buttonText}
        variant={buttonVariant}
        onClick={onClick}
      />
    </div>
  );
};

EditableTextFieldAndButtonRow.propTypes = {
  buttonText: PropTypes.string.isRequired,
  buttonVariant: PropTypes.string,
  fullWidth: PropTypes.bool,
  InputProps: PropTypes.instanceOf(Object),
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func,
  onClick: PropTypes.func.isRequired,
};

EditableTextFieldAndButtonRow.defaultProps = {
  buttonVariant: undefined,
  fullWidth: false,
  InputProps: {},
  placeholder: undefined,
  onChange: undefined,
};
