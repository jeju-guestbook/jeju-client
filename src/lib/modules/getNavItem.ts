import { NavigateFunction } from "react-router-dom";

export function getNavItem(
  e: React.ChangeEvent<HTMLInputElement>,
  navHanlder: React.Dispatch<React.SetStateAction<string>>,
  navigate: NavigateFunction
) {
  const targetValue = e.target.value;

  navHanlder(targetValue);
  navigate(targetValue);
}
