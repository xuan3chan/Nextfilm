import { useAccessToken } from "../hook/useAccessToken";

export default function browse() {
  const accessToken = useAccessToken();

  if (!accessToken) {
    return null; // or a loading spinner
  }

  return (
    <h1>Protected</h1>
  );
}