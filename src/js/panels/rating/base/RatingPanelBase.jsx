import React from "react";
import Group from "../../../components/Group/Group";
import { useRouterBack } from "@kokateam/router-vkminiapps";
import { Button, Placeholder } from "@vkontakte/vkui";

const RatingPanelBase = () => {
  const toBack = useRouterBack();

  return (
    <Group style={{ background: "#535353", margin: 12 }}>
      <Placeholder
        header={"view=rating; panel=base;"}
        action={<Button onClick={() => toBack(-1)} children={"Go back"} />}
      >
        Вернись обратно, затем снова сюда
      </Placeholder>
    </Group>
  );
};

export default RatingPanelBase;
