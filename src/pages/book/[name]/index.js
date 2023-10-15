import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Paper from "@/layout/paper/index";
import HTMLFlipBook from "react-pageflip";
import Page from "@/components/book/pages";
import BookContents from "@/components/functions/books";

const ReadBook = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [bookData, setBookData] = useState({
    cover: "",
    content: [],
  });

  useEffect(() => {
    const { name } = router.query;
    const getBookContents = BookContents(name);
    setBookData({
      cover: getBookContents?.cover,
      content: getBookContents?.content || [],
    });
  }, [router.query.name]);

  return (
    <Paper>
      <HTMLFlipBook
        width={550}
        height={700}
        size="stretch"
        minWidth={315}
        maxWidth={1000}
        minHeight={400}
        maxHeight={1533}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={false}
        minFontSize={12}
        maxFontSize={18}
      >
        <div>
          {
            <div
              className="main-layout"
              style={{ backgroundImage: `url(${bookData.cover})` }}
            ></div>
          }
        </div>
        <div>
          {bookData.content.map((data, index) => {
            return (
              <Page key={index} pageNum={index} content={data.page_content} />
            );
          })}
        </div>
      </HTMLFlipBook>
    </Paper>
  );
};

export default ReadBook;
