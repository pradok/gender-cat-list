export const get = async <T>(request: RequestInfo) => {
  const response = await fetch(request);
  const data:T = await response.json();
  return data;
};