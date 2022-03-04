
import { HeroList } from "../hero/HeroList"

const publisher = 'Marvel Comics'

export const MarvelScreen = () => {
    return (
        <div>
            <h1>MarvelScreen</h1>
            <hr />

            <HeroList publisher={publisher} />

        </div>
    )
}

