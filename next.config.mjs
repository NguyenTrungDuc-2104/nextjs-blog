export default () => {
  let env;
  if (process.env.NODE_ENV === "development") {
    env = {
      mongodb_username: "trungduc",
      mongodb_password: "trungduc2104",
      mongodb_clustername: "cluster0",
      mongodb_database: "my-site-dev",
    };
  } else {
    env = {
      mongodb_username: "trungduc",
      mongodb_password: "trungduc2104",
      mongodb_clustername: "cluster0",
      mongodb_database: "my-site",
    };
  }
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    reactStrictMode: true,
    env,
  };
  return nextConfig;
};
