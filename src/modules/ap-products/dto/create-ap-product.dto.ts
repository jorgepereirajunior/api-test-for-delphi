export class CreateApProductDto {
  store_id: number
  id: number
  nmProduto: string
  vlVarejo: number
  vlAtacado: number
  nmGrupo: string
  nmSubGrupo: string
  cdBarras: string
  url_imagem: string
  url_default: string
  qtdEstoque: number
  vlVarejoPromocao: number
  vlAtacadoPromocao: number
  dsObservacao: string
  nmFabricante: string
  nmFornecedor: string
  ativo: boolean
  dsPrateleira: string
  dsReferenciaInterna: string
  dsReferenciaFabrica: string
  vlVarejoMinimo: number
  vlVarejoMaximo: number
  vlAtacadoMinimo: number
  vlAtacadoMaximo: number
}
