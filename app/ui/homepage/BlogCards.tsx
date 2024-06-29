import { cards } from "@/app/lib/homepageCards";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Image from "next/image";

const BlogCards = () => {
  return (
    <div className="flex flex-col gap-2 mt-2">
      {cards.map((c) => (
        <Card key={c.title}>
          <CardHeader className="prose">
            <h4>{c.title}</h4>
          </CardHeader>
          <CardBody>
            <div className="flex flex-col lg:flex-row gap-4 ">
              <Image
                src={c.img}
                width="200"
                height="100"
                alt={c.title}
                className="rounded-md"
              />
              {c.description}
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default BlogCards;
