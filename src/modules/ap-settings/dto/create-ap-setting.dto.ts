export class CreateApSettingDto {
  store_id: number
  venderEstoqueNegativo: boolean
  limiteMaxDesconto: number
  url_logo: string
  nmEmpresa: string
  cnpj: string
  dsTelefone: string
  dsEndereco: string
  dsEmail: string
  usaCarteiraVendedor: boolean
  bloquearFormaPagamento: boolean
  lojaAtiva: boolean
}
