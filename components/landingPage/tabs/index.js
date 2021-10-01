import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

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
          <p>
            <b>Mario</b> (<i>Japanese: マリオ Hepburn: Mario, [ma.ɾʲi.o]</i>) (
            <i>English: /ˈmɑːrioʊ/; Italian: [ˈmaːrjo]</i>) is a fictional
            character in the Mario video game franchise, owned by Nintendo and
            created by Japanese video game designer Shigeru Miyamoto. Serving as
            the company's mascot and the eponymous protagonist of the series,
            Mario has appeared in over 200 video games since his creation.
            Depicted as a short, pudgy, Italian plumber who resides in the
            Mushroom Kingdom, his adventures generally center upon rescuing
            Princess Peach from the Koopa villain Bowser. His younger brother
            and sidekick is Luigi.
          </p>
          <p>
            Source:{" "}
            <a href="https://en.wikipedia.org/wiki/Mario" target="_blank">
              Wikipedia
            </a>
          </p>
        </TabPanel>

        <TabPanel>
          <p>
            <b>Luigi</b> (<i>Japanese: ルイージ Hepburn: Ruīji, [ɾɯ.iː.dʑi̥]</i>)
            (<i>English: /luˈiːdʒi/; Italian: [luˈiːdʒi]</i>) is a fictional
            character featured in video games and related media released by
            Nintendo. Created by prominent game designer Shigeru Miyamoto, Luigi
            is portrayed as the slightly younger but taller fraternal twin
            brother of Nintendo's mascot Mario, and appears in many games
            throughout the Mario franchise, often as a sidekick to his brother.
          </p>
          <p>
            Source:{" "}
            <a href="https://en.wikipedia.org/wiki/Luigi" target="_blank">
              Wikipedia
            </a>
          </p>
        </TabPanel>

        <TabPanel>
          <p>
            <b>Luigi</b> (<i>Japanese: ルイージ Hepburn: Ruīji, [ɾɯ.iː.dʑi̥]</i>)
            (<i>English: /luˈiːdʒi/; Italian: [luˈiːdʒi]</i>) is a fictional
            character featured in video games and related media released by
            Nintendo. Created by prominent game designer Shigeru Miyamoto, Luigi
            is portrayed as the slightly younger but taller fraternal twin
            brother of Nintendo's mascot Mario, and appears in many games
            throughout the Mario franchise, often as a sidekick to his brother.
          </p>
          <p>
            Source:{" "}
            <a href="https://en.wikipedia.org/wiki/Luigi" target="_blank">
              Wikipedia
            </a>
          </p>
        </TabPanel>
      </Tabs>
    </div>
  );
}