export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center w-1/2">
      <h1 className="font-medium text-6xl">Sobre Descartes</h1>
      <br></br>
      <br></br>
      <div className=" text-center">
        <p className="text-2xl">
          O descarte apropriado de eletroeletrônicos é gerida pela <a className="underlined" target="_blank" href="https://abree.org.br/">ABREE</a>, uma entidade 
          sem fins lucrativos, que indica possíveis locais de coleta de eletroeletrônicos e eletrodomésticos, pontos esses conhecidos 
          como ecopontos, possíveis de serem visualizados via <a className="underlined" target="_blank" href="https://abree.org.br/pontos-de-recebimento">site oficial</a>
          encarregado de acompanhar locais que coletam e também divulgar.
        </p>
      </div>
    </div>
  )
}
