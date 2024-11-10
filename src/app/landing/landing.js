'use client'
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {useRef} from 'react';

export function Landing() {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  }
  return (
    <>
    <div className="bg-gradient-to-br from-cyan-500 to-violet-600  h-screen w-full flex flex-col justify-center items-center shadow-sm">
      <div className="top-2 right-2 absolute flex text-slate-100 p-2">
        <Button variant="outline" className="bg-transparent mr-2">Cadastre-se</Button>
        <Button variant="outline" className="bg-transparent">Log In</Button>
      </div>
      <Image
        src="/assets/images/reletrify_title.png"
        width={773/1.5}
        height={216/1.5}
        alt="Reletrify logo"
      />
      <div className="space-y-4 w-full">
        <div className="flex flex-col items-center">
          <h1 className="text-yellow-300 text-xl font-semibold">Reparar, reutilizar, reciclar.</h1>
          <p className="text-slate-100">Conheça Reletrify, os três R’s da sustentabilidade moderna.</p>
        </div>
        <div className="flex flex-col items-center">
          <Button variant="outline" onClick={handleClick} className="bg-transparent text-slate-100 mt-12">Conheça mais</Button>
        </div>
      </div>
    </div>
    <div ref={ref} className="bg-gradient-to-br from-blue-700 to-violet-950 h-[250vh] w-full flex flex-col justify-center items-center transition-all">
      <div className="flex flex-col justify-center items-center w-1/2">
        <h1 className="text-slate-100 font-bold text-6xl">FAQ</h1>
        <div className="FAQ flex flex-col justify-start">
          <p className="text-slate-100 text-xl">Q: Tenho um item eletrônico sem conserto, o que posso fazer com ele?</p>
          <p className="text-slate-100 text-xl">A: A melhor escolha numa situação assim é procurar um dos ecopontos 
             e realizar o descarte sugerido pela Associação Brasileira de Reciclagem de Eletroeletrônicos e Eletrodomésticos</p>
          <br></br>
          <p className="text-slate-100 text-xl">Q: O que é um ecoponto?</p>
          <p className="text-slate-100 text-xl">A: Um ponto de coleta sugerido pela ABREE</p>
          <br></br>
          <p className="text-slate-100 text-xl">Q: Onde posso encontrar um ecoponto?</p>
          <p className="text-slate-100 text-xl">A: No <a className="underline" href="https://abree.org.br/pontos-de-recebimento" target="_blank">site oficial da ABREE</a>, colocando seu CEP
            e o item a ser descartado</p>
          <br></br>
        </div>
      </div>
      <div className="w-2/5 m-12 mr-[45vw]">
        <h1 className="text-slate-100 font-bold text-5xl">Sobre a Reletrify</h1>
        <p className="text-slate-100 text-xl">Nossa história começou num hackathon, o HackhaUSP, no final do ano de 2024. Pensando no tema Sustentabilidade, decidimos
          por criar essa aplicação destinada ao consumo consciente de aparelhos projetados para falhar em um tempo determinado pelos
          seus fabricantes. Com isso em mente, nossa missão é reunir quem precisa de conserto dos seus aparelhos com quem pode
          consertá-los.
        </p>
      </div>
      <div className="w-2/5 m-12 ml-[45vw]">
        <h1 className="text-slate-100 font-bold text-5xl">Quem Somos?</h1>
        <p className="text-slate-100 text-xl">
          Estudantes da Universidade de São Paulo apaixonados por tecnologia, nos conhecemos no Ensino Médio na Etec de São Paulo
          e continuamos nossa amizade durante os anos, o que facilitou a criação de um projeto pela conexão preestabelecida entre nós.
        </p>
      </div>
      <div className="w-2/5 m-12 mr-[45vw]">
        <h1 className="text-slate-100 font-bold text-5xl">O Projeto</h1>
        <p className="text-slate-100 text-xl">
          Uma rede de conexões entre técnicos e pessoas em necessidade de reparar seus eletrônicos para diminuir descartes, acima de 
          tudo os ilegais, se provou como uma ótima ideia após o brainstorm sobre sustentabilidade e uma pesquisa com diversas pessoas 
          sobre o mercado disponível para algo desse calibre.
        </p>
      </div>
    </div>
    </>
  )
}
