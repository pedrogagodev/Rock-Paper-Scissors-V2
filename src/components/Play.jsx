import rockIcon from "../../public/icon-rock.svg"
import paperIcon from "../../public/icon-paper.svg"
import scissorsIcon from "../../public/icon-scissors.svg"

export function Play({isOpen, onPlayGame}) {

    if (!isOpen) {
        return null
    }
    return (
        <>
        <div className="flex flex-col items-center h-80 mt-20 text-3xl font-bold">
            <h2>Choose one:</h2>
             <div className="flex items-center justify-center mt-12 gap-10">
                <img src={rockIcon} alt=""  className="hover:scale-150 duration-150 ease-linear
                " onClick={onPlayGame}/>
                <img src={paperIcon} alt="" className="hover:scale-150 duration-150 ease-linear
                " onClick={onPlayGame}/>
                <img src={scissorsIcon} alt="" className="hover:scale-150 duration-150 ease-linear
                " onClick={onPlayGame}/>
            </div>
        </div>
        </>
    )
}