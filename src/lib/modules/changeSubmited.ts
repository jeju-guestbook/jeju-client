import { SubmittedProps } from "../../types/Submitted";

export function changeSubmitted({isClicked, setIsClicked}:SubmittedProps) {
    setIsClicked(!isClicked);
}