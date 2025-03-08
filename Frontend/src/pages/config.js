const config = {
    API_BASE_URL:
      process.env.NODE_ENV === "production"
        ? "https://jswebsite-ocj7.vercel.app/api"
        : "http://localhost:3000/api",
  };
  
  export default config;
  