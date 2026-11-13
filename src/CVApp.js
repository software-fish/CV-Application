import { General } from "./General"
import { Educational } from "./Educational"
import { Practical } from "./Practical"

function CVApp() {
    return (
        <form>
            <General />
            <Educational />
            <Practical />
        </form>
    )
}

export { CVApp }