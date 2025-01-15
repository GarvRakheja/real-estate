import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const projectApi = createApi({
  reducerPath: 'projectApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getProjectsByCity: builder.query({
      query: (cityName) => `/scrape?city=${cityName}`,
    }),
  }),
});

export const { useGetProjectsByCityQuery } = projectApi;