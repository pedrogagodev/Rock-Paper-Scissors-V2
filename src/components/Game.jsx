import rockIcon from "../../public/icon-rock.svg"
import paperIcon from "../../public/icon-paper.svg"
import scissorsIcon from "../../public/icon-scissors.svg"

export function Game({isOpen, onTryAgain}) {

    if (!isOpen) {
        return null
    }
    return (
        <div className="flex flex-col items-center mt-24">
            <div className="flex justify-center items-center text-xs my-1 gap-32">
                <h3>Player</h3>
                <h3>Machine</h3>
            </div>
            <div className="flex justify-center items-center gap-12 text-5xl font-bold">
                <img src={rockIcon} alt="Player choice"/>
                <p>X</p>
                <img src={paperIcon} alt="Machine choice"/>
            </div>
            <div className="flex flex-col text-center justify-center mt-7 gap-2">  
                <h3 className="text-xl font-bold text-blue-800">DRAW</h3>
                <button className="self-center bg-gray-900 text-white rounded-lg text-lg p-1 w-24" onClick={onTryAgain}>Try again</button>
                </div>
        </div>
    )
}