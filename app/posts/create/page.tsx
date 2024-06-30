import dynamic from "next/dynamic";

const Form = dynamic(() => import("../components/PostsForm"), {
  ssr: false,
});

const Page = () => {
  return (
    <div>
      <Form />
    </div>
  );
};

export default Page;
