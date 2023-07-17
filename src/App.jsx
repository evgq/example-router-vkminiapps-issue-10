import React, { lazy, Suspense } from "react";

import {
  ConfigProvider,
  AppRoot,
  SplitLayout,
  ScreenSpinner,
} from "@vkontakte/vkui";

import { Epic, View, Panel } from "@kokateam/router-vkminiapps";

const HomePanelBase = lazy(() => import("./js/panels/home/base/HomePanelBase"));
const RatingPanelBase = lazy(() =>
  import("./js/panels/rating/base/RatingPanelBase")
);

function App() {
  return (
    <ConfigProvider platform={"android"} appearance={"dark"} isWebView>
      <AppRoot>
        <SplitLayout style={{ justifyContent: "center" }}>
          <Epic>
            <View id="home">
              <Panel id="base">
                <Suspense fallback={<ScreenSpinner />}>
                  <HomePanelBase />
                </Suspense>
              </Panel>
            </View>

            <View id="rating">
              <Panel id="base">
                <Suspense fallback={<ScreenSpinner />}>
                  <RatingPanelBase />
                </Suspense>
              </Panel>
            </View>
          </Epic>
        </SplitLayout>
      </AppRoot>
    </ConfigProvider>
  );
}

export default App;
