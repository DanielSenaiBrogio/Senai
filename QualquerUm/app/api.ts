import axios from 'axios';

const api = axios.create({
    baseURL: 'http://aledocs.runasp.net/api/cie/',
    timeout: 5000
});

export interface CartaoInterface {
    id: string;
    rm: number;
    nome: string;
    unidade: string;
    curso: string;
    nascimento: string;
    urlFoto: string;
}

export async function BuscarPorId(id: string): Promise<CartaoInterface> {
    const response = await api.get(id);
    return response.data;
}

export async function BuscarTodos(): Promise<CartaoInterface[]> {
    const response = await api.get('');
    return response.data;
}

export async function AtualizarCartao(id: string, cartao: CartaoInterface): Promise<void> {
    try {
        console.log('Atualizando cartão ID:', id);
        console.log('Dados enviados:', cartao);
        console.log('URL base:', api.defaults.baseURL);
        
        let response;
        
        // Tentativa 1: PUT /cartao/{id}
        try {
            console.log('🔄 Tentativa 1: PUT /cartao/{id}');
            response = await api.put(`/cartao/${id}`, cartao);
            console.log('✅ PUT /cartao/{id} funcionou!');
        } catch (error1) {
            console.log('❌ PUT /cartao/{id} falhou');
            
            // Tentativa 2: PUT {id}
            try {
                console.log('🔄 Tentativa 2: PUT {id}');
                response = await api.put(id, cartao);
                console.log('✅ PUT {id} funcionou!');
            } catch (error2) {
                console.log('❌ PUT {id} falhou');
                
                // Tentativa 3: PATCH /cartao/{id}
                try {
                    console.log('🔄 Tentativa 3: PATCH /cartao/{id}');
                    response = await api.patch(`/cartao/${id}`, cartao);
                    console.log('✅ PATCH /cartao/{id} funcionou!');
                } catch (error3) {
                    console.log('❌ PATCH /cartao/{id} falhou');
                    
                    // Tentativa 4: PATCH {id}
                    try {
                        console.log('🔄 Tentativa 4: PATCH {id}');
                        response = await api.patch(id, cartao);
                        console.log('✅ PATCH {id} funcionou!');
                    } catch (error4) {
                        console.log('❌ PATCH {id} falhou');
                        
                        // Tentativa 5: POST /cartao/{id}
                        try {
                            console.log('🔄 Tentativa 5: POST /cartao/{id}');
                            response = await api.post(`/cartao/${id}`, cartao);
                            console.log('✅ POST /cartao/{id} funcionou!');
                        } catch (error5) {
                            console.log('❌ POST /cartao/{id} falhou');
                            
                            // Tentativa 6: POST {id}
                            try {
                                console.log('🔄 Tentativa 6: POST {id}');
                                response = await api.post(id, cartao);
                                console.log('✅ POST {id} funcionou!');
                            } catch (error6) {
                                console.log('❌ POST {id} falhou');
                                console.log('🚫 Nenhum método de atualização funcionou');
                                throw new Error('Esta API não permite atualização de registros.');
                            }
                        }
                    }
                }
            }
        }
        
        console.log('Resposta da API:', response.data);
    } catch (error: any) {
        console.log('❌ Erro na atualização:', error.response?.data || error.message);
        console.log('Status:', error.response?.status);
        console.log('Headers:', error.response?.headers);
        throw error;
    }
}

export async function CriarCartao(cartao: Omit<CartaoInterface, 'id'>): Promise<CartaoInterface> {
    try {
        console.log('=== TENTANDO CRIAR NOVO CARTÃO ===');
        console.log('Dados completos:', JSON.stringify(cartao, null, 2));
        console.log('URL base:', api.defaults.baseURL);
        
        // Lista de endpoints para tentar
        const endpoints = [
            '',           // POST na raiz
            '/cartao',    // POST /cartao 
            '/cartoes',   // POST /cartoes (plural)
            '/funcionario', // POST /funcionario
            '/funcionarios', // POST /funcionarios (plural)
            '/aluno',     // POST /aluno
            '/alunos'     // POST /alunos (plural)
        ];
        
        for (let i = 0; i < endpoints.length; i++) {
            const endpoint = endpoints[i];
            try {
                console.log(`🔄 Tentativa ${i + 1}: POST ${endpoint || '(raiz)'}`);
                const response = await api.post(endpoint, cartao);
                console.log(`✅ POST ${endpoint || '(raiz)'} funcionou!`);
                console.log('Resposta:', response.data);
                return response.data;
            } catch (error: any) {
                console.log(`❌ POST ${endpoint || '(raiz)'} falhou - Status: ${error.response?.status}`);
                
                if (error.response?.status === 400) {
                    console.log('Resposta do servidor:', JSON.stringify(error.response?.data, null, 2));
                }
                
                // Se for o último endpoint, lança o erro
                if (i === endpoints.length - 1) {
                    console.log('🚫 Todos os endpoints falharam');
                    throw new Error(`API não permite criação. Status 400: dados inválidos ou campos faltando`);
                }
            }
        }
        
        throw new Error('Não foi possível criar o funcionário');
        
    } catch (error: any) {
        console.log('❌ ERRO FINAL:');
        console.log('Mensagem:', error.message);
        throw error;
    }
}
