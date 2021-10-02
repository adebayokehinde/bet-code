import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import PredictionTable from "./predictionTable";

export default function TabPage() {
  return (
    <div className="container mt-5">
      <Tabs>
        <TabList>
          <Tab>Mario</Tab>
          <Tab>Luigi</Tab>
          <Tab>Peach</Tab>
        </TabList>

        <TabPanel>
          <>
            {/* <PredictionTable /> */}
          </>
        </TabPanel>

        <TabPanel>
          <p>
            character featured in video games and related media released by
            Nintendo. Created by prominent game designer Shigeru Miyamoto, Luigi
            is portrayed as the slightly younger but taller fraternal twin
            brother of Nintendomascot Mario, and appears in many games
            throughout the Mario franchise, often as a sidekick to his brother.
          </p>
          <p>

          
          </p>
        </TabPanel>

        <TabPanel>
          <p>
            character featured in video games and related media released by
            Nintendo. Created by prominent game designer Shigeru Miyamoto, Luigi
            is portrayed as the slightly younger but taller fraternal twin
            brother of Nintendos mascot Mario, and appears in many games
            throughout the Mario franchise, often as a sidekick to his brother.
          </p>
          <p>
          
          
          </p>
        </TabPanel>
      </Tabs>
    </div>
  );
}
