import React, { useEffect, useState } from "react";
import Navigator from "./components/Navigator";
import SectionLayout from "./components/SectionLayout";
import Tab from "./components/Tab";
import Table from "./components/Table";

import sessionInfo from "./data/session-info";
import timeTable from "./data/time-table";


export default function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const changeTab = (nextIndex: number) => {
    setSelectedIndex(nextIndex);
  };

  return (
    <div id="wrap" className="font-pretendard">
      <Navigator />
      <div id="container">
        <div
          id="main"
          className="w-full h-screen bg-violet-50 bg-main bg-cover bg-center flex flex-col justify-between py-32 px-14"
        >
          <div>
            <h1 className="font-proxima font-black text-7xl text-white">
              1<sup>st</sup> SSHS
              <br />
              PAY IT FORWARD
              <br />
              CONFERENCE
            </h1>
          </div>
          <div>
            <h2 className="font-proxima font-black text-4xl text-white leading-10">
              2023 OCTOBER 28 (SAT)
              <br />
              10:00 - 18:00{" "}
              <span className="font-pretendard">@서울과학고등학교</span>
            </h2>
          </div>
        </div>
        <SectionLayout
          sectionId="session-info"
          title={`SESSION\nINFORMATION`}
          subtitle="세션 정보"
        >
          <Tab changeTab={changeTab} json={sessionInfo} />
          <div className="flex-1">
            <h4 className="font-proxima text-3xl font-extrabold leading-8 mt-10">
              SESSION #{selectedIndex + 1}
              <br />
              {sessionInfo[selectedIndex].title}
            </h4>
            <p className="text-lg mt-6 whitespace-pre-wrap leading-7 font-bold">
              {sessionInfo[selectedIndex].description}
            </p>
            <div className="moderator-container flex flex-row mt-10">
              <div className="w-40 font-bold font-proxima">MODERATOR</div>
              <div>
                <ul className="font-medium">
                  {sessionInfo[selectedIndex].moderator}
                </ul>
              </div>
            </div>
            <div className="panels-container flex flex-row mt-6">
              <div className="w-40 font-bold font-proxima">PANELS</div>
              <ul className="columns-2 font-medium h-[84px]">
                {sessionInfo[selectedIndex].panels.map(
                  (panel: string, index: number) => {
                    return (
                      <li key={index} className="leading-7">
                        <div>
                          <span>{panel}</span>
                        </div>
                      </li>
                    );
                  }
                )}
              </ul>
            </div>
          </div>
        </SectionLayout>
        <SectionLayout
          sectionId="time-table"
          title={`TIME TABLE`}
          subtitle="컨퍼런스 일정"
        >
          <Table json={timeTable} />
        </SectionLayout>
        <SectionLayout
          sectionId="live-streaming"
          title={`YOUTUBE\LIVE STREAMING`}
          subtitle={`유튜브\n라이브 스트리밍`}
        >
          hello
        </SectionLayout>
        <SectionLayout
          sectionId="location"
          title="LOCATION"
          subtitle="위치 정보"
        >
          hello
        </SectionLayout>
      </div>
    </div>
  );
}
