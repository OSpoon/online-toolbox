import axios from "axios";
import { getLocalStorageWithExpiry, setLocalStorageWithExpiry } from ".";

function saveToken(
  access_token: string,
  refresh_token: string,
  created_at: number,
  expires_in: number
) {
  setLocalStorageWithExpiry(
    "access_token",
    access_token,
    created_at,
    expires_in
  );
  setLocalStorageWithExpiry(
    "refresh_token",
    refresh_token,
    created_at,
    expires_in
  );
}

export const authorizationCode = async (code: string) => {
  const res = await axios.post("https://gitee.com/oauth/token", {
    grant_type: "authorization_code",
    code,
    client_id: import.meta.env.VITE_VERCEL_CLIENT_ID,
    client_secret: import.meta.env.VITE_VERCEL_CLIENT_SECRET,
    redirect_uri: import.meta.env.VITE_VERCEL_REDIRECT_URI,
  });
  const { access_token, refresh_token, created_at, expires_in } = res.data;
  saveToken(access_token, refresh_token, created_at, expires_in);
  window.close();
};

export const refreshToken = async () => {
  const _refresh_token = getLocalStorageWithExpiry("refresh_token");
  const res = await axios.post("https://gitee.com/oauth/token", {
    grant_type: "refresh_token",
    refresh_token: _refresh_token,
  });
  const { access_token, refresh_token, created_at, expires_in } = res.data;
  saveToken(access_token, refresh_token, created_at, expires_in);
};

export const createArticle = async (
  content: string,
  opt: {
    owner: string;
    repo: string;
    path: string;
  }
) => {
  const { owner, repo, path } = opt;
  const res = await axios.post(
    `https://gitee.com/api/v5/repos/${owner}/${repo}/contents/${path}`,
    {
      access_token: getLocalStorageWithExpiry("access_token"),
      content: btoa(content),
      message: `add ${path}`,
    }
  );
  console.log(res.data);
};

export const trees = async (opt: { owner: string; repo: string }) => {
  const { owner, repo } = opt;
  const access_token = getLocalStorageWithExpiry("access_token");
  const res = await axios.get(
    `https://gitee.com/api/v5/repos/${owner}/${repo}/git/trees/master?access_token=${access_token}`
  );
  return res.data;
};

export const content = async (opt: {
  owner: string;
  repo: string;
  path: string;
}) => {
  const { owner, repo, path } = opt;
  const access_token = getLocalStorageWithExpiry("access_token");
  const res = await axios.get(
    `https://gitee.com/api/v5/repos/${owner}/${repo}/contents/${path}?access_token=${access_token}`
  );
  return res.data;
};
