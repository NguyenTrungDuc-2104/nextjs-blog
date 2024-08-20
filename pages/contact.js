import ContacForm from "@/components/contact/contact-form";
import Head from "next/head";
const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta title="description" content="Send me your message!" />
      </Head>
      <ContacForm />;
    </>
  );
};

export default ContactPage;
