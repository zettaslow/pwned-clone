import React from "react";
import BreachInformationPage from "../components/app/BreachInformationPage";

interface BreachInformationProps {

}

interface BreachInformationState {

}

export default class BreachInformation extends React.Component<BreachInformationProps, BreachInformationState> {
  constructor(props: BreachInformationProps) {
    super(props);
  }

  render() {
    return (
      <div>
        <BreachInformationPage/>
      </div>
    )
  }
}