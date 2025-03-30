const API_URL = process.env.REACT_APP_URL;
const AUTH_BASE = `${API_URL}${process.env.REACT_APP_AUTH_ENDPOINT}`;

const AUTH_ENDPOINTS = {
  SIGN_IN: `${AUTH_BASE}/sign-in`,
  SIGN_UP: `${AUTH_BASE}/sign-up`,
  SIGN_OUT: `${AUTH_BASE}/sign-out`,
};

const BLOG_ENDPOINT = `${API_URL}${process.env.REACT_APP_BLOG_ENDPOINT}`;
const TOUR_ENDPOINT = `${API_URL}${process.env.REACT_APP_TOUR_ENDPOINT}`;

export { API_URL, AUTH_ENDPOINTS, BLOG_ENDPOINT, TOUR_ENDPOINT };
