import React from "react";
import Layout from "../../components/Layout";
import VerifyPhone from "../../components/VerifyPhone";
import useLocalStorage from "@rehooks/local-storage";

export default function Index() {
  const [userInfo] = useLocalStorage("userInfo");

  return (
    <Layout pageTitle="Phone verification">
      <VerifyPhone phone={userInfo?userInfo.phone:null}/>;
    </Layout>
  );
}
