import {useMutation} from "react-query";
import {dispatchDemand} from "../API/API";

export function useDispatchDemand() {
    const mutation = useMutation(
        (demand) =>  dispatchDemand(demand),
        {
            onSuccess: () => {
                console.log("useDispatchDemand useMutation useSaveIntent onSuccess")
                window.alert("useDispatchDemand useMutation Demand Created")
            },
            onError: (error) => {
                window.alert(error.response.data.message)
            },
            onSettled: () => {
                console.log("useDispatchDemand useMutation onSettled")
            },
        }
    )
    console.log("useDispatchDemand mutation : " , mutation)
    return mutation
}