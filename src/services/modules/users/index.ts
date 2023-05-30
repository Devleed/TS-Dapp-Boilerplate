import { api } from '../../api'

export type User = {
  id: number
  name: string
}

export const userApi = api.injectEndpoints({
  endpoints: build => ({
    // * For get requests
    fetchOne: build.query<User, string>({
      query: id => `users/${id}`,
    }),
    // * For post requests
    createUser: build.mutation<User, Partial<User>>({
      query: user => ({
        url: 'users',
        method: 'POST',
        body: user,
      }),
    }),
    deleteUser: build.mutation<void, number>({
      query: id => ({
        url: `users/${id}`,
        method: 'DELETE',
      }),
    }),
    updateUser: build.mutation<User, Partial<User>>({
      query: ({ id, ...updates }) => ({
        url: `users/${id}`,
        method: 'PATCH',
        body: updates,
      }),
    }),
  }),
  overrideExisting: false,
})

export const { useLazyFetchOneQuery, useFetchOneQuery } = userApi
