export type TipoLaudo = 
  | 'acidentes-transito'
  | 'crimes-vida'
  | 'crimes-patrimonio'
  | 'constatacao-drogas'
  | 'incendios'
  | 'crimes-meio-ambiente'
  | 'identificacao-veiculos'
  | 'fisico-descritivo';

export interface LaudoBase {
  id: string;
  tipo: TipoLaudo;
  numeroLaudo: string;
  dataLaudo: string;
  perito: string;
  titulo: string;
  createdAt: string;
  updatedAt: string;
}

export interface AcidenteTransito extends LaudoBase {
  tipo: 'acidentes-transito';
  dados: {
    dataHoraAcidente: string;
    localExato: string;
    coordenadas?: string;
    condicoesClimaticas: string;
    veiculosEnvolvidos: Array<{
      marca: string;
      modelo: string;
      placa: string;
      cor: string;
      danos: string;
    }>;
    vitimas?: Array<{
      nome: string;
      idade: string;
      lesoes: string;
    }>;
    croquiDescricao: string;
    dinamicaAcidente: string;
    conclusoes: string;
  };
}

export interface CrimesVida extends LaudoBase {
  tipo: 'crimes-vida';
  dados: {
    dataHoraFato: string;
    localOcorrencia: string;
    descricaoVitima: string;
    lesoesEncontradas: string;
    instrumentosUtilizados: string;
    analiseDinamica: string;
    conclusoesMedicoLegais: string;
    observacoes?: string;
  };
}

export interface CrimesPatrimonio extends LaudoBase {
  tipo: 'crimes-patrimonio';
  dados: {
    dataHoraOcorrencia: string;
    localOcorrencia: string;
    tipoLocal: 'residencia' | 'estabelecimento' | 'veiculo' | 'outro';
    bensSubtraidos: string;
    bensDanificados: string;
    valorEstimado: string;
    metodoUtilizado: string;
    vestigiosEncontrados: string;
    analiseTecnica: string;
    conclusoes: string;
  };
}

export interface ConstatacaoDrogas extends LaudoBase {
  tipo: 'constatacao-drogas';
  dados: {
    dataHoraApreensao: string;
    localApreensao: string;
    descricaoMaterial: string;
    pesoQuantidade: string;
    testesPreliminares: string;
    acondicionamento: string;
    aspectoFisico: string;
    conclusoes: string;
    observacoes?: string;
  };
}

export interface Incendios extends LaudoBase {
  tipo: 'incendios';
  dados: {
    dataHoraSinistro: string;
    localAfetado: string;
    areaAtingida: string;
    possivelOrigem: string;
    materiaisCombustiveis: string;
    danosCausados: string;
    hipotesesCausa: string;
    vestigiosEncontrados: string;
    conclusoes: string;
  };
}

export interface CrimesMeioAmbiente extends LaudoBase {
  tipo: 'crimes-meio-ambiente';
  dados: {
    dataHoraConstatacao: string;
    localInfracao: string;
    tipoDanoAmbiental: string;
    areaAfetada: string;
    especiesAtingidas: string;
    impactoEstimado: string;
    medidasNecessarias: string;
    legislacaoAplicavel: string;
    conclusoes: string;
  };
}

export interface IdentificacaoVeiculos extends LaudoBase {
  tipo: 'identificacao-veiculos';
  dados: {
    dadosVeiculo: {
      marca: string;
      modelo: string;
      ano: string;
      cor: string;
      combustivel: string;
    };
    chassi: string;
    motor: string;
    placas: string;
    documentacao: string;
    sinaisAdulteracao: string;
    estadoConservacao: string;
    observacoesTecnicas: string;
    conclusoes: string;
  };
}

export interface FisicoDescritivo extends LaudoBase {
  tipo: 'fisico-descritivo';
  dados: {
    descricaoDetalhada: string;
    dimensoes: string;
    peso: string;
    caracteristicasFisicas: string;
    estadoConservacao: string;
    origemProcedencia: string;
    valorEstimado: string;
    materialComposicao: string;
    observacoesTecnicas: string;
    conclusoes: string;
  };
}

export type Laudo = 
  | AcidenteTransito 
  | CrimesVida 
  | CrimesPatrimonio 
  | ConstatacaoDrogas 
  | Incendios 
  | CrimesMeioAmbiente 
  | IdentificacaoVeiculos 
  | FisicoDescritivo;

export interface LaudoTemplate {
  tipo: TipoLaudo;
  nome: string;
  descricao: string;
  campos: Array<{
    nome: string;
    label: string;
    tipo: 'text' | 'textarea' | 'date' | 'datetime-local' | 'number' | 'select';
    obrigatorio: boolean;
    opcoes?: string[];
    placeholder?: string;
  }>;
  template: string;
}
