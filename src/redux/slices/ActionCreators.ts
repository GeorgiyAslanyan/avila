import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Item } from "../../types/types";
import { AppDispatch } from "../store";

// export const fetchItems = () => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(itemsFetching())
//         const response = await axios.get<Item[]>('https://63625d277521369cd06ba3c2.mockapi.io/items')
//         dispatch(itemsFetchingSuccess(response.data))

//     } catch (e: any) {
//         dispatch(itemsFetchingError(e.message))
//     }
// }

export const fetchItems = createAsyncThunk(
    'items/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<Item[]>('https://63625d277521369cd06ba3c2.mockapi.io/items')
            return response.data
            
        } catch (e) {
            return thunkAPI.rejectWithValue("Не удалось загрузить массив объектов")
        }
    }
) 