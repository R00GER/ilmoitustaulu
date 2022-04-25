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
}) => {
  return (
    <TextField
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
    />
  );
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
