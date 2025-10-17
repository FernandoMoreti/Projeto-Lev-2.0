import Link from "next/link";
import { IoDocumentTextOutline  } from "react-icons/io5";
import { IoMdReturnLeft } from "react-icons/io";


export default function Header() {
    return (
        <header className="flex items-center py-5 px-7 bg-white border-b-1 border-gray-300 justify-between">
            <div className="flex gap-5">
                <div>
                    <h1 className="bg-gradient-to-br from-purple-700 to-purple-400 p-2 rounded-xl">{<IoDocumentTextOutline  size={30} color="white" />}</h1>
                </div>
                <div>
                    <h1 className="text-xl font-bold">Mapeamento de Colunas</h1>
                    <p className="text-sm text-gray-400">Importe e associe suas planilhas</p>
                </div>
            </div>
            <div className="flex justify-end">
                <Link href={"/main"} prefetch={true} className="transition-all duration-300 cursor-pointer hover:-translate-y-1"><IoMdReturnLeft size={40} className="text-purple-700" /></Link>
            </div>
        </header>
    )
}