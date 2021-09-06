
export const HostEndPoints = {
    localHost8080: "http://local.amazon.com:8080/",
}

const endPointMapping = {

    // It is for testing in local (Dont Remove the below configs).
    "http://localhost:3000": HostEndPoints.localHost8080,
    "https://localhost:3000": HostEndPoints.localHost8080,

}

export function getEndPoint() {
    console.log("getEndPoint endPointMapping", endPointMapping)
    console.log("getEndPoint ORIGINS.WINDOW_ORIGIN : ", window.location.origin)
    let endPoint = endPointMapping[window.location.origin];
    console.log("getEndPoint endPointMapping : ", endPoint)
    return endPoint
}
