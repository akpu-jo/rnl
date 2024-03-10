import React from "react";

const JsonData = ({ data }: { data: any }) => {
  return (
    <pre className="dark-border m-5 mx-auto max-w-md overflow-hidden rounded-lg border p-8">
      {JSON.stringify(data, null, 1)}
    </pre>
  );
};

export default JsonData;
