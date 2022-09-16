import React from "react";
import ProfileLayout from "../../components/ProfileLayout";
import Profile from "../../components/Profile";
import axios from "axios";
import useSWR from "swr";
import Loading from "../../components/Loading";
import { useLocalStorage } from "@rehooks/local-storage";
const getProfile = (url) => axios.get(url).then((res) => res.data);
export default function Index() {
  const [userInfo] = useLocalStorage("userInfo");
  const { data, error } = useSWR(
    `/api/user/getProfile?phone=${userInfo?userInfo.phone:null}`,
    getProfile
  );

  if (!data) {
    return (
      <ProfileLayout pageTitle="Loading...">
        <Loading />
      </ProfileLayout>
    );
  }
  return (
    <ProfileLayout pageTitle="Profile">
      <Profile data={data} />
    </ProfileLayout>
  );
}
