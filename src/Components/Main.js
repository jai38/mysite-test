import React from "react";
import { BodyHeader } from "./BodyHeader";
import { PermissionsScreen } from "./PermissionsScreen";
import { TeamScreen } from "./TeamScreen";

export const Main = ({
  activeBody,
  changeBody,
  screen,
  changeScreen,
  activeAccess,
  changeAccess,
  goBack,
}) => {
  return (
    <>
      <div className="w-100">
        <BodyHeader activeBody={activeBody} changeBody={changeBody} />
        {!screen && <PermissionsScreen changeScreen={changeScreen} />}
        {screen && (
          <TeamScreen
            activeAccess={activeAccess}
            changeAccess={changeAccess}
            screen={screen}
            goBack={goBack}
          />
        )}
      </div>
    </>
  );
};
