interface TwoParam {
  content: React.ReactNode;
}

const Two: React.FunctionComponent<TwoParam> = ({ content }) => {
  return (
    <>
      <h1>Type of Function Component</h1>
      <div>{content}</div>
    </>
  );
};

export default Two;
