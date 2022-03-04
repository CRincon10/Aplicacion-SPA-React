import { HeroList } from "../hero/HeroList"


const publisher = 'DC Comics'

export const DcScreen = () => {
    return (
        <div>
            <h1>DcScreen</h1>
            <hr/>

            <HeroList publisher={publisher}/>
        </div>
    )
}
