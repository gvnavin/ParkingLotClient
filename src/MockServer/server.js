import {createServer, Model} from "miragejs";
import {PATH} from "../API/Path";
import {HostEndPoints} from "../API/HostEndPoints";

const userSelectedOptionToResponse = new Map([

    ]
);

export function makeServer({environment = "test"} = {}) {
    let server = createServer({
        environment,

        models: {
            triggerConversation: Model,
        },

        seeds(server) {
            server.create(PATH.createSupply, {})
        },

        routes() {

            this.passthrough(HostEndPoints.localHost8080 + PATH.createDemand)

            this.get(PATH.createDemand, (schema) => {
                    console.log("Navin, miraje makeServer this.get")
                },
                {timing: 1000}
            )

            this.post(PATH.createDemand, (schema, request) => {
                console.log("Navin, miraje makeServer this.get")
            })
        }
    })

    return server
}
