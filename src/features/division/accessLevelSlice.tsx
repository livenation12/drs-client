import { createSlice } from '@reduxjs/toolkit'
import { AccesLevel } from '../../models/accesLevel.model'

const initialState: AccesLevel = {
          id: undefined,
          level: undefined,
          description: '',
          createdAt: '',
          updatedAt: ''
}

export const accessLevelSlice = createSlice({
          name: 'counter',
          initialState,
          reducers: {
          },
})

// Action creators are generated for each case reducer function
export const { } = accessLevelSlice.actions

export default accessLevelSlice.reducer