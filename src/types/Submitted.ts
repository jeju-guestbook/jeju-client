import React from "react";

export interface SubmittedProps {
    isClicked: boolean;
    setIsClicked: React.Dispatch<React.SetStateAction<boolean>>
}