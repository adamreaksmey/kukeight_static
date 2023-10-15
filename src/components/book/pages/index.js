import Image from "next/image";
import React from "react";
import CoverTheFaultInOurStars from "@/public/photos/recommendation/fault-in-our-stars.jpeg";

const Page = React.forwardRef((props, ref) => {
  const { content, pageNum, key } = props;
  return (
    <div className="book-page p-4" ref={ref} data-density="hard">
      <h4>Chapter {pageNum + 1}</h4>
      <hr />
      <div className="d-flex justify-content-center pb-3">
        <Image
          width={400}
          height={200}
          alt={"image"}
          src={CoverTheFaultInOurStars.src}
        />
      </div>

      <p className="pb-3">{content}</p>
      <p>Page number: {pageNum + 1}</p>
    </div>
  );
});

export default Page;
