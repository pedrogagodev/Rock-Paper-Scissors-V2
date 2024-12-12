export function Header() {

    return (
        <header className="flex place-content-around bg-blue-950 text-white items-center pb-4">
            <h1 className="text-3xl font-bold w-52 ml-4">Rock Paper Scissors</h1>
            <div className="p-2 ">
                <div className="border p-4 leading-relaxed rounded-lg rounded-b-none text-lg">
                    <h2 className="font-bold text-2xl text-center">Score: </h2>
                    <p className="pt-1">Player: 10</p>
                    <p className="pt-1">Machine: 10</p>
                </div>
                <button className="text-center w-full border border-t-0 py-2 rounded-b-lg text-lg">Reset</button>
            </div>
        </header>
    )
}