import axios from "axios";
// Your access token
const accessToken = 'YOUR_ACCESS_TOKEN';
const url = "URL"

export const client = axios.create({
  baseURL: url ,
  
});


// Add a request interceptor to include the access token in every request
client.interceptors.request.use(config => {
  // Modify the request config to include the access token in the headers
  config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
}, error => {
  return Promise.reject(error);
});

// // Add a request interceptor to log the request type, URL, and request body
// client.interceptors.request.use(config => {
//   // Log the request type, URL, and request body (if available)
//   console.log(`Request Type: ${config.method}`);
//   console.log(`Request URL: ${config.url}`);
//   if (config.data) {
//     console.log('Request Body:', config.data);
//   }
//   return config;
// }, error => {
//   return Promise.reject(error);
// });