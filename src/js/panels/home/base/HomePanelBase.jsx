import React from "react";
import Group from "../../../components/Group/Group";
import { useRouterView } from "@kokateam/router-vkminiapps";
import { Button, Placeholder } from "@vkontakte/vkui";

function HomePanelBase() {
  const { toView } = useRouterView();

  return (
    <Group style={{ background: "#535353", margin: 12 }}>
      <Placeholder
        header="view=home; panel=base;"
        action={
          <Button onClick={() => toView("rating")} children={"Go rating"} />
        }
      >
        Перейди в рейтинг
      </Placeholder>
    </Group>
  );
}

export default HomePanelBase;
