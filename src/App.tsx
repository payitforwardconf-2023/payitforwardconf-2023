import React, { useEffect, useState } from "react";
import Navigator from "./components/Navigator";
import SectionLayout from "./components/SectionLayout";
import Tab from "./components/Tab";
import sessionInfo from "./data/session-info";

type Props = {};

export default function App({}: Props) {
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
        </SectionLayout>
        <SectionLayout
          sectionId="time-table"
          title={`TIME TABLE`}
          subtitle="컨퍼런스 일정"
        >
          hello
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
