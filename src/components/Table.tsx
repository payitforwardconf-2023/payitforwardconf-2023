import React from "react";
import classNames from "classnames";

type Props = {
  json: any[];
};

export default function Table({ json }: Props) {
  return (
    <div className="bg-gradient-to-l to-black from-white">
      <div className="flex flex-col bg-white my-[2px]">
        {json.map((item: any, index: number) => {
          return (
            <div
              key={index}
              className={classNames(
                "flex flex-row items-center leading-none py-4 text-lg gap-8",
                {
                  "bg-gradient-to-l to-[#E1D4E4] from-[#9188A4]/0":
                    item.type === "session",
                }
              )}
            >
              <div className="font-bold w-32 font-proxima text-center">
                <p>{item.time}</p>
              </div>
              <div className="font-bold w-64">
                <p className="mt-1">{item.content}</p>
              </div>
              <div className="flex-1">
                <p>{item.more}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
