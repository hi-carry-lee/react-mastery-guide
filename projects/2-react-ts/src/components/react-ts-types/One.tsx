import type { JSX } from "react";

interface TestOneParam {
  name: string;
  // content: React.ReactElement;
  content: JSX.Element;
}

// interface Element extends React.ReactElement<any, any> {}
const TestOne = ({ content, name }: TestOneParam): JSX.Element => {
  return (
    <div>
      <div>Test One Component</div>
      <div>{name}</div>
      <div>{content}</div>
    </div>
  );
};

export default TestOne;
