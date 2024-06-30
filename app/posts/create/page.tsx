import dynamic from "next/dynamic";

const Form = dynamic(() => import("./NewPostFields"), {
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
