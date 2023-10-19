"use client";
import Loading from "@/app/loading";
import { useBlogsQuery } from "@/redux/api/blogApi";
import { CalendarOutlined } from "@ant-design/icons";
import { Avatar, Card, Col, Row } from "antd";
import Meta from "antd/es/card/Meta";
const BlogeCard = () => {
  const { data, isLoading } = useBlogsQuery({});
  const blogs = data?.data;
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <Row
        style={{
          height: "100%",
        }}
      >
        {blogs?.map((blog: any, i: number) => (
          <Col
            style={{
              marginBottom: "20px",
            }}
            key={i}
            span={8}
          >
            <Card
              hoverable
              style={{ width: 340 }}
              cover={
                <Avatar shape={"square"} size={340} src={blog?.imageLink} />
              }
            >
              <p
                style={{
                  color: "gray",
                  marginBottom: "10px",
                }}
              >
                <CalendarOutlined
                  style={{
                    color: "green",
                    marginRight: "10px",
                  }}
                />
                {new Date(blog?.createdAt).toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "numeric",
                })}
              </p>
              <Meta
                title={blog?.title}
                description={blog?.content.slice(0, 240)}
              />
              {/* <p
              style={{
                padding: "10px 0",
                fontSize: "17px",
              }}
              dangerouslySetInnerHTML={{ __html: blog?.content }}
            /> */}
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default BlogeCard;
