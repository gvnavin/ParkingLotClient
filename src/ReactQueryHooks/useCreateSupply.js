import {useMutation} from "react-query";
import {createSupply} from "../API/API";

export function useCreateSupply() {
    const mutation = useMutation(
        (intent) =>  createSupply(intent),
        {
            onSuccess: () => {
                console.log("useCreateSupply useMutation onSuccess")
                window.alert("useCreateSupply useMutation Saved")
            },
            onError: (error) => {
                window.alert(error.response.data.message)
            },
            onSettled: () => {
                console.log("useCreateSupply useMutation onSettled")
            },
        }
    )
    console.log("useCreateSupply useMutation mutation : " , mutation)
    return mutation
}