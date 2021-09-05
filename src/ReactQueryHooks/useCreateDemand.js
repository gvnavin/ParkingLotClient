import {useMutation} from "react-query";
import {createDemand} from "../API/API";

export function useCreateDemand() {
    const mutation = useMutation(
        (intent) =>  createDemand(intent),
        {
            onSuccess: () => {
                console.log("useMutation useSaveIntent onSuccess")
                window.alert("SaveIntent Saved")
            },
            onError: (error) => {
                window.alert(error.response.data.message)
            },
            onSettled: () => {
                console.log("useMutation useSaveIntent onSettled")
            },
        }
    )
    console.log("useSaveIntent mutation : " , mutation)
    return mutation
}