import Image from "next/image";
import React from "react";

const Page = React.forwardRef((props, ref) => {
  const { content, pageNum, image } = props;
  return (
    <div
      className="book-page p-4 overflow-scroll page-rounded"
      ref={ref}
      data-density="hard"
    >
      <h4>Chapter 1</h4>
      <hr />
      <div className="d-flex justify-content-center pb-3">
        <Image width={400} height={300} alt={"image"} src={image} />
      </div>

      <p className="pb-3" style={{ textAlign: "justify" }}>
        {content}
      </p>
      <p>Page number: {pageNum + 1}</p>
    </div>
  );
});

export default Page;
