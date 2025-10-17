"use client";

import { useState, useEffect } from "react"
import Image from "next/image";
import { MdAddCircleOutline } from "react-icons/md";
import Link from "next/link"

export default function main() {
    const [bancos, setBancos] = useState([])
    const [banco, setBanco] = useState("")
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("http://localhost:8000", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                
                const data = await response.json()
                console.log(data)

                setBancos(data)

            } catch (error) {
                console.error(error)
            }
        }
        fetchData()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(banco)
    }
    
    return (
        <>
            <div>
                <section className='flex flex-col h-screen'>
                    <div className="flex justify-end">
                        <Link href={"/"} prefetch={true} className="absolute m-5 transition-all duration-300 cursor-pointer hover:-translate-y-1"><MdAddCircleOutline size={50} className="text-purple-700" /></Link>
                    </div>
                    <div className='flex-1 flex justify-center items-center'>
                        <div className='flex flex-col p-10 h-120 w-120 shadow-2xl bg-white shadow-gray-700 rounded-l-4xl'>
                            <h1 className='flex justify-center text-xl font-semibold'>Bem vindo ao Conversor WORKBANK</h1>
                            <form onSubmit={handleSubmit} className='flex flex-col gap-5' action="">
                                <p className='text-lg pt-5'>Importe o relatorio:</p>
                                <input className="border rounded-xl p-5 shadow-lg cursor-pointer" onChange={(e) => setFile(e.target.files[0])} type="file" />
                                <p className='text-lg'>Escolha o banco:</p>
                                <select onChange={(e) => {setBanco(e.target.value)}} className='border rounded-xl p-5 shadow-lg cursor-pointer' name="Banco" id="">
                                    <option className='hidden'>Escolha um banco</option>
                                    {
                                        bancos.map((banco) => (
                                            <option key={banco.id} value={banco.nome} className="bg-black text-white">{banco.nome}</option>
                                        ))
                                    }
                                </select>
                                <button className='border rounded-xl p-5 shadow-lg transition-all durarion-400 cursor-pointer bg-gradient-to-br from-purple-700 to-purple-400 text-white hover:-translate-y-0.5' type='submit'>{loading ? "Carregando..." : "Criar arquivo"}</button>
                            </form>
                        </div>
                        <Image src="/logo.jpg" className="rounded-r-4xl" width={480} height={480} alt="" />
                    </div>
                </section>
            </div>
        </>
    )
}