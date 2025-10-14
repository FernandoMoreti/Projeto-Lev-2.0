import { IoDocumentTextOutline  } from "react-icons/io5";

export default function Header() {
    return (
        <header className="flex items-center py-5 px-7 gap-5 bg-white border-b-1 border-gray-300">
            <div>
                <h1 className="bg-gradient-to-br from-purple-700 to-purple-400 p-2 rounded-xl">{<IoDocumentTextOutline  size={30} color="white" />}</h1>
            </div>
            <div>
                <h1 className="text-xl font-bold">Mapeamento de Colunas</h1>
                <p className="text-sm text-gray-400">Importe e associe suas planilhas</p>
            </div>
        </header>
    )
}