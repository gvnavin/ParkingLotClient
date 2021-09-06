import {useMutation} from "react-query";

export function useCloseDispatch() {
    const mutation = useMutation(
        (intent) =>  closeDispatch(intent),
        {
            onSuccess: () => {
                console.log("useCloseDispatch useMutation onSuccess")
                window.alert("useCloseDispatch Dispatch Closed")
            },
            onError: (error) => {
                window.alert(error.response.data.message)
            },
            onSettled: () => {
                console.log("useCloseDispatch useMutation onSettled")
            },
        }
    )
    console.log("useCloseDispatch mutation : " , mutation)
    return mutation
}