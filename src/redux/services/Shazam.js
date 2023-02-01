import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

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
    getSongDetail: builder.query({
      query: ({ songId }) => `/tracks/details?track_id=${songId}`,
    }),
    getRelatedSong: builder.query({
      query: ({ songId }) => `/tracks/related?track_id=${songId}`,
    }),
    searchArtistByName: builder.query({
      query: (name) => `/search?q=odezenne&type=artists`,
    }),
  }),
});

export const { useGetTopChartsQuery, useSearchArtistByNameQuery, useGetSongDetailQuery, useGetRelatedSongQuery } = shazamApi;
