import closeButton from "../../public/close.svg"

export function Modal({isOpen, onModalClose}) {
    if (!isOpen) {
        return null
    }
    return (
        <div className="bg-gray-500 fixed inset-0 grid place-content-center ">
            <div className="relative bg-white p-2 rounded-md">
            <button>
                <img src={closeButton} alt="Close button" className="absolute top-0 right-0 w-7 pt-1 pr-1" onClick={onModalClose}/>
            </button>

            <h2 className="text-center mb-2 text-2xl">Rules</h2>
                <ul className="bg-indigo-300 list-none p-2 leading-loose text-xs rounded-md">
                    <li>- Rock wins against Scissors.</li>
                    <li>- Paper wins against Rock.</li>
                    <li>- Scissors wins against Paper.</li>
                    <li>- If both players select the same option, it's a draw.</li>
                    <li><b>**It's not permitted to select rock twice in a row.**</b></li>
                </ul>
            </div>
        </div>

    )
     
    }

