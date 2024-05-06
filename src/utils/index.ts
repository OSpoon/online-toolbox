export function setLocalStorageWithExpiry(
  key: string,
  value: string,
  created_at: number,
  expires_in: number
) {
  const expiry = created_at + expires_in; // 过期时间戳（秒）
  const item = {
    value: value,
    expiry: expiry,
  };
  localStorage.setItem(key, JSON.stringify(item));
}

export function getLocalStorageWithExpiry(key: string) {
  const itemStr = localStorage.getItem(key);
  if (!itemStr) {
    return null;
  }
  const item = JSON.parse(itemStr);
  const now = Math.floor(Date.now() / 1000); // 当前时间戳（秒）
  if (now > item.expiry) {
    // 数据已过期
    localStorage.removeItem(key);
    return null;
  }
  return item.value;
}
