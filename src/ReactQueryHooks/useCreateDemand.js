import {useMutation} from "react-query";
import {createDemand} from "../API/API";

export function useCreateDemand(setFormInput) {
  const mutation = useMutation(
    async (demand) => {
      const response = await createDemand(demand)
      console.log('useCreateDemand useMutation response', response)
      if (response) {
        console.log('useCreateDemand useMutation response', response)
        let responseArray = JSON.parse(response.jsonResponse);
        console.log('useCreateDemand useMutation responseArray', responseArray)
        setFormInput({demandId: responseArray[0].id})
        return response
      }
    },
    {
      onSuccess: () => {
        console.log("useCreateDemand useMutation onSuccess onSuccess")
        window.alert("useCreateDemand useMutation onSuccess Demand Created")

      },
      onError: (error) => {
        window.alert(error.response.data.message)
      },
      onSettled: () => {
        console.log("useCreateDemand useMutation onSettled")
      },

    }
  )
  console.log("useCreateDemand mutation : ", mutation)
  return mutation
}