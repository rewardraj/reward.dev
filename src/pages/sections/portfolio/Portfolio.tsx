import { useState } from "react";
import Header from "../../../components/Header/Header";
import styles from "./Portfolio.module.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import {
  AllProjects,
  ReactProjects,
  SvelteProjects,
} from "../../../components/Projects/Projects";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="portfolio" className={styles.main}>
      <Header title="Portfolio" />
      <div>
        <Tabs
          className={styles.Tabs}
          selectedIndex={activeTab}
          onSelect={(tabIndex) => setActiveTab(tabIndex)}
        >
          <TabList className={styles.TabList}>
            <Tab className={styles.Tab} selectedClassName={styles.selected}>
              All
            </Tab>
            <Tab className={styles.Tab} selectedClassName={styles.selected}>
              React
            </Tab>
            <Tab className={styles.Tab} selectedClassName={styles.selected}>
              Svelte
            </Tab>
          </TabList>
          <TabPanel>
            <div className={styles.grid}>
              <div className={styles.gridInner}>
                <AllProjects />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className={styles.grid}>
              <div className={styles.gridInner}>
                <ReactProjects />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className={styles.grid}>
              <div className={styles.gridInner}>
                <SvelteProjects />
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default Portfolio;
