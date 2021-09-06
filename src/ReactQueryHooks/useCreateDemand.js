import {useMutation} from "react-query";
import {createDemand} from "../API/API";

export function useCreateDemand() {
    const mutation = useMutation(
        (intent) =>  createDemand(intent),
        {
            onSuccess: () => {
                console.log("useCreateDemand useMutation useSaveIntent onSuccess")
                window.alert("useCreateDemand useMutation Demand Created")
            },
            onError: (error) => {
                window.alert(error.response.data.message)
            },
            onSettled: () => {
                console.log("useCreateDemand useMutation onSettled")
            },
        }
    )
    console.log("useCreateDemand mutation : " , mutation)
    return mutation
}