import React from "react";

const Page = React.forwardRef((props, ref) => {
  const { content, pageNum } = props;
  return (
    <div className="book-page logo-img" ref={ref}>
      <h4>Page Header</h4>
      <p>{content}</p>
      <p>Page number: {pageNum}</p>
    </div>
  );
});

export default Page;
