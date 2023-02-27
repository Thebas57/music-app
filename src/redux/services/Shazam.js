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
    getSongsByGenre: builder.query({
      query: (genre) => `/charts/genre-world?genre_code=${genre}`,
    }),
    getSongsBySearch: builder.query({
      query: (search) => `/search/multi?search_type=SONGS_ARTISTS&query=${search}`,
    }),
    getSongDetail: builder.query({
      query: ({ songId }) => `/tracks/details?track_id=${songId}`,
    }),
    getRelatedSong: builder.query({
      query: ({ songId }) => `/tracks/related?track_id=${songId}`,
    }),
    getSongCountry: builder.query({
      query: () => `/charts/country?country_code=FR`,
    }),
  }),
});

//Permet d'appeler le store
export const shazamApiArtist = createApi({
  reducerPath: "shazamApiArtist",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v2",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "e6b3c3650bmsh26a32baf8d74458p197917jsn0ea4f9f8fbc3"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getArtistDetail: builder.query({
      query: ({ artistId }) => `/artists/details?artist_id=${artistId}`,
    }),
  }),
});

export const {
  useGetTopChartsQuery,
  useSearchArtistByNameQuery,
  useGetSongDetailQuery,
  useGetRelatedSongQuery,
  useGetSongCountryQuery,
  useGetSongsByGenreQuery,
  useGetSongsBySearchQuery
} = shazamApi;

export const { useGetArtistDetailQuery } = shazamApiArtist;
