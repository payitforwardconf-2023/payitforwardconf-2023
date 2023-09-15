import React from "react";
import Navigator from "./components/Navigator";
import SectionLayout from "./components/SectionLayout";

type Props = {};

export default function App({}: Props) {
  return (
    <div id="wrap" className="font-pretendard">
      <Navigator />
      <div id="container">
        <div id="main" className=""></div>
        <SectionLayout
          sectionId="session-info"
          title={`SESSION\nINFORMATION`}
          subtitle="세션 정보"
        >
          hello
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
