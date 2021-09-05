import {createServer, Model} from "miragejs";
import {PATH} from "../API/Path";

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
            server.create("triggerConversation", {})
        },

        routes() {

            this.passthrough("https://dev-dsk-gnavin-1a-4c467a7a.eu-west-1.amazon.com:8443" + PATH.postCustomerTextAndGetResponse)

            this.get(PATH.createDemand, (schema) => {
                    console.log("Navin, miraje makeServer this.get triggerConversation")
                },
                {timing: 1000}
            )

            this.post(PATH.postUserSelectedRecommendationAndGetResponse, (schema, request) => {
                console.log("Navin, miraje makeServer this.get triggerConversation")
            })
        }
    })

    return server
}
