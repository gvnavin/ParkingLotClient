import {useQuery} from "react-query";
import {findDispatchEntitiesByFilter} from "../API/API";
import {queryClient} from "../Root.dev";

export function useFindDispatchEntitiesByFilter(requiredEntityType, requiredFilterKey, requiredFilterValue, submit) {
  const queryInfo = useQuery(['findDispatchEntitiesByFilter', requiredEntityType, requiredFilterKey, requiredFilterValue],
    async () => {
      const entities = await findDispatchEntitiesByFilter(requiredEntityType, requiredFilterKey, requiredFilterValue)
      console.log(JSON.stringify(entities, null, 2));
      entities.forEach(intent => {
        queryClient.setQueryData(['intent', intent.name], intent)
      });
      return entities
    },
    {
      staleTime: Infinity,
      refetchOnWindowFocus: false,
      enabled: requiredEntityType !== "" && requiredFilterKey !== "" && requiredFilterValue !== "" && submit !== false
    }
  )
  console.log("useFindDispatchEntitiesByFilter queryInfo : " , queryInfo)
  return queryInfo
}