import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import configs from 'configs'

const {
  api: { dapp },
} = configs

/**
 * Interface & Utility
 */
export type DappManifest = ComponentManifest & {
  author: { walletAddress: string }
  createdAt: Date
  updatedAt: Date
}
export type State = Record<string, DappManifest>

/**
 * Store constructor
 */

const NAME = 'dapp'
const initialState: State = {}

/**
 * Actions
 */

export const getDApps = createAsyncThunk(`${NAME}/getDApps`, async () => {
  const { data } = await axios.get(dapp.author, {
    withCredentials: true,
  })
  const dapps: State = {}
  data.forEach((dapp: DappManifest) => (dapps[dapp.appId] = dapp))
  return dapps
})

export const submitDApp = createAsyncThunk(
  `${NAME}/submitDApp`,
  async (manifest: Omit<DappManifest, 'createdAt' | 'updatedAt'>) => {
    const { data } = await axios.put(dapp.index, manifest, {
      withCredentials: true,
    })
    return { [data.appId]: data }
  },
)

export const deleteDApp = createAsyncThunk(
  `${NAME}/deleteDApp`,
  async (appId: string) => {
    await axios.delete(`${dapp.index}/${appId}`, {
      withCredentials: true,
    })
    return { appId }
  },
)

/**
 * Usual procedure
 */

const slice = createSlice({
  name: NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    void builder
      .addCase(
        getDApps.fulfilled,
        (state, { payload }) => void Object.assign(state, payload),
      )
      .addCase(
        submitDApp.fulfilled,
        (state, { payload }) => void Object.assign(state, payload),
      )
      .addCase(
        deleteDApp.fulfilled,
        (state, { payload }) => void delete state[payload.appId],
      ),
})

export default slice.reducer
