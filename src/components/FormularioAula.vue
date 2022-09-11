<template>
    <div class="container">
        <div class="row">
            <div class="col-6 bg-light">
                <span class="fs-4">ENTRADA DE DADOS</span>
                <hr>
                <form @submit.prevent="enviarFormulario($event)" @reset.prevent="resetarFormulario()">
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Nome:</label>
                        <div class="col">
                            <input type="text" class="form-control" v-model.lazy="form.nome">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">E-mail:</label>
                        <div class="col">
                            <input type="email" class="form-control" v-model.lazy.trim="form.email">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Senha:</label>
                        <div class="col">
                            <input type="password" class="form-control" v-model="form.senha">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Idade:</label>
                        <div class="col">
                            <input type="number" class="form-control" range='1' v-model="form.idade">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label" >Gênero:</label>
                        <div class="col">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio"
                                    v-model="form.genero"
                                    value="Feminino"
                                >
                                <label class="form-check-label">
                                    Feminino
                                </label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio"
                                    v-model="form.genero"
                                    value="Masculino"
                                >
                                <label class="form-check-label">
                                    Masculino
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Licença:</label>
                        <div class="col">
                            <div class="form-check form-switch">
                                <input 
                                    class="form-check-input" 
                                    type="checkbox" 
                                    v-model="form.licenca"
                                    true-value="Aceita"
                                    false-value="Não Aceita">
                                <label class="form-check-label">Li e aceito os termos</label>
                            </div>
                        </div>
                    </div>

                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Interesses:</label>
                        <div class="col">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" 
                                value="JavaScript"
                                v-model="form.interesses">
                                <label class="form-check-label">
                                    JavaScript
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" 
                                value="VueJS"
                                v-model="form.interesses">
                                <label class="form-check-label">
                                    VueJS
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" 
                                value="Angular"
                                v-model="form.interesses">
                                <label class="form-check-label">
                                    Angular
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" 
                                value="NodeJS"
                                v-model="form.interesses">
                                <label class="form-check-label">
                                    NodeJS
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Telefone:</label>
                        <div class="col">
                            <input type="tel" class="form-control" v-model="form.telefone" v-maska="'(##) #####-####'">
                            <small class="text-muted">Formato: 11 97777-5555</small>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">CEP:</label>
                        <div class="col">
                            <input type="tel" class="form-control" v-model="form.cep" v-maska="'##.###-###'">
                            <small class="text-muted">Formato: 12.345-000</small>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">CNPJ:</label>
                        <div class="col">
                            <input type="tel" class="form-control" v-model="form.cnpj" v-maska="'##.###.###/####-##'">
                            <small class="text-muted">Formato: 00.000.000/0001-00</small>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">CPF:</label>
                        <div class="col">
                            <input type="tel" class="form-control" v-model="form.cpf" v-maska="'###.###.###-##'">
                            <small class="text-muted">Formato: 000.000.000-00</small>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Cartão de Credito:</label>
                        <div class="col">
                            <input type="tel" class="form-control" v-model="form.cartaoDeCredito" v-maska="'#### #### #### ####'">
                            <small class="text-muted">Formato: 0000 0000 0000 0000</small>
                        </div>
                    </div>

                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Data:</label>
                        <div class="col">
                            <input type="date"
                            v-model="form.data"
                            class="form-control">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Data/hora local:</label>
                        <div class="col">
                            <input type="datetime-local"
                            v-model="form.dataHora"
                            class="form-control">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Mês:</label>
                        <div class="col">
                            <input type="month"
                            v-model="form.mes" class="form-control">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Semana:</label>
                        <div class="col">
                            <input type="week"
                            v-model="form.semana" class="form-control">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Hora:</label>
                        <div class="col">
                            <input type="time"
                            v-model="form.hora" class="form-control">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Cor:</label>
                        <div class="col">
                            <input type="color"
                            v-model="form.cor" class="form-color">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Valor limite:</label>
                        <div class="col">
                            <input type="range" class="form-range" min="0" max="100" step="0.1" v-model="form.alcance">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Escondido:</label>
                        <div class="col">
                            <input type="hidden" class="form-control" v-model="form.escondido">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Upload:</label>
                        <div class="col">
                            <input type="file" class="form-control" multiple @change="selecionarArquivos($event)">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Text:</label>
                        <div class="col">
                            <textarea class="form-control" v-model="form.text"> </textarea>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Curso:</label>
                        <div class="col">
                            <select class="form-select" v-model="form.curso">
                                <option value="" disabled> Selecione</option>
                                <option v-for="curso in cursos" :key="curso.id" :value="curso.id"> {{ curso.id }} - {{ curso.nome }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Avaliação:</label>
                        <div class="col">
                            <!--
                                recebendo os dados do evento sem o update
                                <input-estrelas :qtd-estrela="form.avaliacao" @avaliar="form.avaliacao = $event"/>
                            -->
                            <input-estrelas :qtd-estrela="form.avaliacao" v-model:avaliar="form.avaliacao"/>
                        </div>
                    </div>
                    <hr>
                    <div class="mb-3 row">
                        <div class="col d-flex justify-content-between">
                            <button class="btn btn-secondary" type="reset">Limpar</button>
                            <button class="btn btn-success" type="button">Enviar (btn)</button>
                            <button class="btn btn-success" type="submit">Enviar (submit)</button>
                        </div>                        
                    </div>
                </form>
            </div>

            
            <div class="col-6 text-white bg-secondary" :style="`background-color: ${form.cor} !important;`">
                <span class="fs-4">ESTADO DO OBJETO</span>
                <hr>
                <div class="mb-5 row">
                    <span>{{form}}</span>
                </div>

                <span class="fs-4">SAÍDA DE DADOS</span>
                <hr>
                <div class="mb-3 row">
                    <span>Nome: {{ form.nome }}</span>
                </div>
                <div class="mb-3 row">
                    <span>E-mail: {{ form.email }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Senha: {{ form.senha }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Idade: {{ form.idade }} </span>
                </div>
                <div class="mb-3 row">
                    <span>Gênero: {{ form.genero }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Licença: {{ form.licenca }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Interesses:</span>
                    <ul>
                        <li v-for="(interesse, index) in form.interesses" :key="index">
                            {{ interesse}}
                        </li>
                    </ul>
                </div>
                <div class="mb-3 row">
                    <span>Telefone: {{ form.telefone }}</span>
                </div>
                <div class="mb-3 row">
                    <span>CEP: {{ form.cep }}</span>
                </div>
                <div class="mb-3 row">
                    <span>CPF: {{ form.cpf }}</span>
                </div>
                <div class="mb-3 row">
                    <span>CNPJ: {{ form.cnpj }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Cartão de Credito: {{ form.cartaoDeCredito }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Data: {{ $moment(form.data).format('DD/MM/YYYY') }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Data/hora local: {{ $moment(form.dataHora).format('LLLL') }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Mês: {{ form.mes}}</span>
                </div>
                <div class="mb-3 row">
                    <span>Semana: {{ form.semana }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Hora: {{ $moment(form.hora).format('HH:MM')}}</span>
                </div>
                <div class="mb-3 row">
                    <span>Cor: {{form.cor }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Valor limite: {{ form.alcance }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Escondido: {{ form.escondido }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Upload:</span>
                    <ul>
                        <li v-for="(arquivo,index) in form.arquivos" :key="index"> {{ arquivo.name }} </li>
                    </ul>
                </div>
                <div class="mb-3 row">
                    <span>Text:</span>
                    <div style="white-space: pre;"> {{ form.text }} </div>
                </div>  
                <div class="mb-3 row">
                    <span>Curso: {{ form.curso }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Avaliação: {{ form.avaliacao }}</span>
                </div>
            </div>
        </div>

    </div>

</template>

<script>
    import InputEstrelas from '@/components/InputEstrelas.vue';
    
    export default {
        components:{
            InputEstrelas
        },
        name: 'FormularioAula',
        created(){
            this.resetarFormulario();
        },
        data: () => ({
            cursos:[
                {id: 1, nome:"Logica de Programação"},
                {id: 2, nome:"Programação Orientada a Objetos"},
                {id: 3, nome:"Programação Funcional"},
                {id: 4, nome:"Desenvolvimento WEB Frontend com VueJS"},
                {id: 5, nome:"Desenvolvimento WEB Backend com CSharp"}
            ],
            form:{},
            formEstadoInicial: {
                nome: 'Joao Marques da Silva Silveira',
                senha: '123456789',
                email: 'jmsilvasilveira@email.com',
                idade: 50,
                genero: '',
                licenca: "Não Aceita",
                interesses: [],
                telefone: '',
                cep: '',
                cpf: '',
                cnpj: '',
                cartaoDeCredito: '',
                dataHora: '',
                data: '',
                mes: '',
                semana: '',
                cor: '#6c757d',
                alcance: 5,
                escondido: 'Voce não esta me vendo',
                arquivos: {},
                text: '',
                curso: '',
                avaliacao: 0,
            }
        }),
        methods:{
            selecionarArquivos(event){
                this.form.arquivos = event.target.files;
            },
            enviarFormulario(){
                //Clonando o objeto para previnir que alterações reflitam no form original
                //formEnvio serão os dados a serem enviados
                //const formEnvio = Object.assign({}, this.form);
            },
            resetarFormulario(){
                this.form = Object.assign({}, this.formEstadoInicial);
            }
        }
    }
</script>
