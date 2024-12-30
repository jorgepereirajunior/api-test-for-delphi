import { Injectable } from '@nestjs/common'
import { CreateApProductDto } from './dto/create-ap-product.dto'
import { UpdateApProductDto } from './dto/update-ap-product.dto'

export type ApProduct = {
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

const apProduct: ApProduct = {
  store_id: 123,
  id: 456,
  nmProduto: 'Smartphone Ultra X25',
  vlVarejo: 1999.99,
  vlAtacado: 1799.99,
  nmGrupo: 'Eletrônicos',
  nmSubGrupo: 'Smartphones',
  cdBarras: '7894561230123',
  url_imagem: 'https://example.com/images/product123.jpg',
  url_default: 'https://example.com/images/default.jpg',
  qtdEstoque: 50,
  vlVarejoPromocao: 1899.99,
  vlAtacadoPromocao: 1699.99,
  dsObservacao: 'Produto com garantia de 1 ano.',
  nmFabricante: 'TechBrand',
  nmFornecedor: 'Distribuidora Global Tech',
  ativo: true,
  dsPrateleira: 'A3-05',
  dsReferenciaInterna: 'INT-12345',
  dsReferenciaFabrica: 'FAB-67890',
  vlVarejoMinimo: 1800.0,
  vlVarejoMaximo: 2100.0,
  vlAtacadoMinimo: 1600.0,
  vlAtacadoMaximo: 1900.0
}

@Injectable()
export class ApProductsService {
  create(createApProductDto: CreateApProductDto) {
    return 'This action adds a new apProduct'
  }

  findAll() {
    return `This action returns all apProducts`
  }

  findOne(id: number, storeId: number): ApProduct {
    return apProduct
  }

  update(id: number, updateApProductDto: UpdateApProductDto) {
    return `This action updates a #${id} apProduct`
  }

  remove(id: number) {
    return `This action removes a #${id} apProduct`
  }
}
