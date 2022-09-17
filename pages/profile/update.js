import React from "react";
import ProfileLayout from "../../components/ProfileLayout";
import UpdateProfile from "../../components/UpdateProfile";
import axios from "axios";
import useSWR from "swr";
import Loading from "../../components/Loading";
import { useLocalStorage } from "@rehooks/local-storage";
const getProfile = (url) => axios.get(url).then((res) => res.data);
export default function Index() {
  const [userInfo] = useLocalStorage("userInfo");
  const { data, error } = useSWR(
    `/api/user/getProfile?email=${userInfo?userInfo.email:null}`,
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
    <ProfileLayout pageTitle="Update profile">
      <UpdateProfile data={data} />
    </ProfileLayout>
  );
}
