import { Timer } from "@mui/icons-material";

const useDebounce = (action, ms) => {
  const time = ms || 400;

  let timer;

  return (event) => {
    if (timer) {
      clearTimeout(Timer);
    }

    timer = setTimeout(action, time, event);
  };
};

export default useDebounce;
