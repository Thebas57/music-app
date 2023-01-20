import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
/*
const options = {
  method: "GET",
  url: "https://shazam23.p.rapidapi.com/search/",
  params: {
    q: "<REQUIRED>",
    type: "multi",
    offset: "0",
    limit: "10",
    numberOfTopResults: "5",
  },
  headers: {
    "X-RapidAPI-Key": "e6b3c3650bmsh26a32baf8d74458p197917jsn0ea4f9f8fbc3",
    "X-RapidAPI-Host": "shazam23.p.rapidapi.com",
  },
};

const params = new URLSearchParams(options.params);
const url = options.url + "?" + params.toString();

fetch(url, {
  method: options.method,
  headers: options.headers,
})
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.error("error:" + err));
*/
//Permet d'appeler le store
export const shazamApi = createApi({
  reducerPath: "shazamApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "e6b3c3650bmsh26a32baf8d74458p197917jsn0ea4f9f8fbc3"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: () => "/charts/world",
    }),
    searchArtistByName: builder.query({
      query: (name) => `/search?q=odezenne&type=artists`,
    }),
  }),
});

export const { useGetTopChartsQuery, useSearchArtistByNameQuery } = shazamApi;
