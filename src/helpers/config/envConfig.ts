export const getBaseUrl = () => {
  return process.env.NEXT_PUBLIC_BASEURL || "http://localhost:5000/api/v1";
};
