import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_NODE_SERVER_URL,
    withCredentials: true,
});


let isRefreshing = false;
let failedQueue: Array<{resolve: (value: unknown) => void, reject: (reason?: unknown) => void}> = [];
const processQueue = (error: any) => {
  failedQueue.forEach(promise => {
    if (error) {
      promise.reject(error);
    } else {
      promise.resolve(true);
    }
  });

  failedQueue = [];
};



api.interceptors.response.use(
  response => response,

  async error => {
    const originalRequest = error.config;

    // Only handle 401 errors
    if (error.response?.status === 401 && !originalRequest._retry &&  !originalRequest.url?.includes("/auth/refresh")) {
      originalRequest._retry = true;

      // If refresh already running → wait
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        }).then(() => {
          return api(originalRequest);
        });
      }

      isRefreshing = true;

      try {
        // Call refresh API
        await api.post("/auth/refresh");

        processQueue(null);

        return api(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError);

        // Optional: logout user
        await api.post("/auth/logout");

        window.location.href = "/admin/login/";

        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);


export default api;