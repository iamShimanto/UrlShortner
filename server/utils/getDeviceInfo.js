const getDeviceInfo = (req) => {
  const details = req.get("user-agent") || "";

  let deviceType = "desktop";

  if (/mobile/i.test(details)) deviceType = "mobile";
  if (/tablet|ipad/i.test(details)) deviceType = "tablet";

  let os = "unknown";
  if (/windows/i.test(details)) os = "Windows";
  else if (/android/i.test(details)) os = "Android";
  else if (/iphone|ipad|ipod/i.test(details)) os = "iOS";
  else if (/mac/i.test(details)) os = "macOS";
  else if (/linux/i.test(details)) os = "Linux";

  let browser = "unknown";
  if (/chrome/i.test(details) && !/edg/i.test(details)) browser = "Chrome";
  else if (/safari/i.test(details) && !/chrome/i.test(details))
    browser = "Safari";
  else if (/firefox/i.test(details)) browser = "Firefox";
  else if (/edg/i.test(details)) browser = "Edge";

  return { deviceType, os, browser };
};

module.exports = getDeviceInfo;
